import { language_id } from "../constants";

const url = 'https://judge0-ce.p.rapidapi.com';
const headers = {
	'x-rapidapi-key': 'your-api-key',
	'x-rapidapi-host': 'judge0-ce.p.rapidapi.com'
}

const options = {
	method: 'GET',
	headers
};

export const generateToken = async(sourceCode,model) => {
	try{
		const response = await fetch(url + '/submissions', {
			method: 'POST',
			headers: {
				...headers,
				"Content-Type": "application/json"
			},
			body: {
				"source_code" : sourceCode,
				"language_id" : language_id[model]
			}
		});
		// const result = await response.text();
		console.log(response);
	} catch(error) {
		console.error(error.message);
	}
}
