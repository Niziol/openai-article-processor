import { apiKey } from '../config/openaiConfig.js';
import OpenAI from 'openai';

const openai = new OpenAI({ apiKey });

async function sendToOpenAI(prompt) {
	try {
		const completion = await openai.chat.completions.create({
			model: 'gpt-4o-mini',
			messages: [
				{ role: 'system', content: 'You are a helpful assistant.' },
				{
					role: 'user',
					content: prompt,
				},
			],
		});

		return completion;
	} catch (error) {
		console.error('Error calling OpenAI API:', error);
		throw error;
	}
}

export default sendToOpenAI;
