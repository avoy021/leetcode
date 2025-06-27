import { language_id } from "../constants";

const url = 'https://judge0-ce.p.rapidapi.com';
const headers = {
	'x-rapidapi-key': '449c3b4ff6mshd39c8b42f543762p112fa3jsn343c792eb8c7',
	'x-rapidapi-host': 'judge0-ce.p.rapidapi.com'
}

const options = {
	method: 'GET',
	headers
};

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

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
