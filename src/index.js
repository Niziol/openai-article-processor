import readArticleFile from './utils/readArticleFile.js';
import saveHTMLFile from './utils/saveHTMLFile.js';
import sendToOpenAI from './utils/sendToOpenAI.js';
import {createUserPrompt, createSystemPrompt} from './templates/promptTemplate.js';

const ARTICLE_PATH = 'src/article.txt';
const OUTPUT_PATH = 'src/output/artykul.html';

/**
 * Processes an article by reading it, sending it to OpenAI, and saving the resulting HTML.
 * @returns {Promise<void>}
 */
async function processArticle() {
  try {
    const articleContent = await readArticleFile(ARTICLE_PATH);

    if (!articleContent.trim()) {
      throw new Error('The article content is empty.');
    }

    const userPrompt = createUserPrompt(articleContent);
    const systemPrompt = createSystemPrompt();
    const response = await sendToOpenAI(userPrompt, systemPrompt);
    const htmlContent = response?.choices?.[0]?.message?.content;

    if (!htmlContent || typeof htmlContent !== 'string') {
      throw new Error('Invalid or empty HTML content returned from OpenAI.');
    }

    await saveHTMLFile(htmlContent, OUTPUT_PATH);
    console.log(`✅ Article processed and saved to: ${OUTPUT_PATH}`);
  } catch (error) {
    console.error(`❌ Error processing article: ${error.message}`);
  }
}

processArticle();