import { apiKey } from '../config/openaiConfig.js';
import OpenAI from 'openai';

const openai = new OpenAI({ apiKey });

/**
 * Sends a prompt to the OpenAI API and retrieves the completion response.
 * @param {string} prompt - The prompt to send to OpenAI.
 * @param {string} [model='gpt-4o-mini'] - Optional model to use for completion.
 * @returns {Promise<Object>} - The completion response from OpenAI.
 * @throws {Error} - If the API call fails.
 */
async function sendToOpenAI(prompt, model = 'gpt-4o-mini') {
	try {
		const completion = await openai.chat.completions.create({
			model,
			messages: [{ role: 'user', content: prompt }],
		});

		return completion;
	} catch (error) {
		const errorMessage = `Error calling OpenAI API in sendToOpenAI: ${error.message}})`;
		console.error(errorMessage);
		throw new Error(errorMessage);
	}
}

export default sendToOpenAI;
