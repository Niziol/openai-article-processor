import sendToOpenAI from './utils/sendToOpenAI.js';

async function processArticle() {
	try {
		const prompt = "Write simple 'test completed succefuly, openai connected, yey' text in response";

		const response = await sendToOpenAI(prompt);
		const htmlContent = response.choices[0].message;
    console.log(htmlContent);

	} catch (error) {
		console.error('Error processing article:', error);
	}
}

processArticle();
