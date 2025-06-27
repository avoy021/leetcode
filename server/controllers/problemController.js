import express from 'express';
import problems from '../db/leetcodeProblems.js';
import { language_id } from '../db/language_id.js';
import Handlebars from 'handlebars';
import boilerplate from '../db/problems/1/javascript_initial.js';
import javascript_main from '../db/problems/1/javascript_main.js';
import testCase from '../db/problems/1/testCases.js';

export const getProblemSet = (req,res) => {
    const set = [];
    problems.forEach((problem) => {
        set.push({
            id: problem.id,
            title: problem.title
        }) 
    })
    return res.status(200).json(set);
}

export const getProblemDesc = (req,res) => {
    const {id,title} = req.params;
    const {model} = req.body;
    if(!id || !title || !model) {
        return res.status(400).json({'message': 'Id,title or model is missing.'});
    }
    const desc = problems.find((problem) => problem['id']===(id.toString()) && problem['title']===title);
    return res.status(200).json([desc,boilerplate]);
}

const url = 'https://judge0-ce.p.rapidapi.com';

const pollResult = async (token) => {
    while(true) {
        const tokenResponse = await fetch(url + `/submissions/${token}`,{
			method: 'GET',
			headers: {
				'x-rapidapi-key' : process.env.RAPID_API_KEY,
                'x-rapidapi-host' : process.env.RAPID_API_HOST,
		}});
        const output = await tokenResponse.json();
        if(output && output.status?.id>=3) {
            return output;
        }
        await new Promise(resolve => {
            setTimeout(() => {
                resolve();
            },2000)
        })
    }
}

export const getSubmissionOutput = async(req,res) => {
    const { sourceCode,model } = req.body;
    if(!sourceCode || !model ) {
        return res.status(400).json({message: "Source code or langauge model is missing"});
    }

    try{
        const entire_code = javascript_main({
            USER_CODE: sourceCode, 
            INPUT_1:testCase[1].stdin[0], 
            INPUT_2:testCase[1].stdin[1]
        })
        const finalCode = Buffer.from(entire_code).toString('base64');
		const response = await fetch(url + '/submissions/?base64_encoded=true', {
			method: 'POST',
			headers: {
				'x-rapidapi-key' : process.env.RAPID_API_KEY,
                'x-rapidapi-host' : process.env.RAPID_API_HOST,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				source_code: finalCode,
				"language_id" : language_id[model],
                expected_output: Buffer.from(testCase[1].expected_output).toString('base64')
			})
		});
		const result = await response.json();
        // console.log(result)
        // if(response) {
        //     console.log("response status",response.status)
        // }
        if(!result.token) {
            return res.status(500).json({ message: "Server error"});
        }
        
        const token = result.token;
        const output = await pollResult(token);
        if(output) {
            if(output.token){
                delete output.token;
            }
            console.log(output)
            return res.status(200).json({ output });
        }
	} catch(error) {
		console.error(error.message);
        res.status(500).json({message: error.message});
	}
}