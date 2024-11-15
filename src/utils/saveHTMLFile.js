import { mkdir, writeFile } from 'fs/promises';
import path from 'path';

/**
 * Saves HTML content to a specified file path, creating directories as needed.
 * @param {string} htmlContent - The HTML content to save in the file.
 * @param {string} [outputPath='src/output/artykul.html'] - The path where the HTML content will be saved.
 * @returns {Promise<void>}
 * @throws {Error} - If file saving fails.
 */
async function saveHTMLFile(htmlContent, outputPath = 'src/output/artykul.html') {
	if (typeof htmlContent !== 'string' || htmlContent.trim() === '') {
		throw new Error('Invalid HTML content provided');
	}

	try {
		const directory = path.dirname(outputPath);
		await mkdir(directory, { recursive: true });

		await writeFile(outputPath, htmlContent, 'utf-8');
	} catch (error) {
		const errorMessage = `Error saving HTML content to ${outputPath}: ${error.message}`;
		console.error(errorMessage);
		throw new Error(errorMessage);
	}
}

export default saveHTMLFile;
