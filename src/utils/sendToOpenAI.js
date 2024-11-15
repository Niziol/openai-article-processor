import { apiKey } from '../config/openaiConfig.js';
import OpenAI from 'openai';

const openai = new OpenAI({ apiKey });

/**
 * Sends a prompt to the OpenAI API and retrieves the completion response.
 * @param {string} userPrompt - The user's prompt containing specific instructions or content for processing.
 * @param {string} [systemPrompt=''] - A directive defining the assistant's behavior, context, and output guidelines.
 * @param {string} [model='gpt-4o-mini'] - Optional model to use for completion.
 * @returns {Promise<Object>} - The completion response from OpenAI.
 * @throws {Error} - If the API call fails.
 */
async function sendToOpenAI(userPrompt, systemPrompt = '', model = 'gpt-4o-mini') {
	try {
		const completion = await openai.chat.completions.create({
			model,
			messages: [
        {
          role: 'system',
          content: systemPrompt
        },
        { role: 'user', content: userPrompt }
      ],
		});

		return completion;
	} catch (error) {
		const errorMessage = `Error calling OpenAI API in sendToOpenAI: ${error.message}})`;
		console.error(errorMessage);
		throw new Error(errorMessage);
	}
}

export default sendToOpenAI;
