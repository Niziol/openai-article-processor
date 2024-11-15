import { readFile } from 'fs/promises';

/**
 * Reads content from a specified file path.
 * @param {string} filePath - Path to the file to read.
 * @returns {Promise<string>} - Content of the file as a string.
 */
async function readArticleFile(filePath) {
	try {
		return await readFile(filePath, 'utf-8');
	} catch (error) {
		throw new Error(`Error reading file at "${filePath}": ${error.message}`);
	}
}

export default readArticleFile;
