
# OpenAI Article Processor
> A Node.js project that transforms plain text articles into SEO-friendly, structured HTML using the OpenAI API.

## Table of Contents
* [General Information](#general-information)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Setup](#setup)
* [Usage](#usage)

## General Information
The OpenAI Article Processor is designed to simplify the process of converting plain text articles into structured, SEO-friendly HTML. By leveraging the OpenAI API, the project can:
- Analyze the content and optimize its structure with semantic HTML tags.
- Suggest appropriate places for images with relevant `alt` attributes and captions.

This project can be useful for content creators, bloggers, and web developers looking to streamline their workflows and improve content quality for better search engine rankings.

## Technologies Used
- Node.js
- OpenAI API
- ES Modules
- File System API (fs/promises)

## Features
- Automatically processes plain text articles into semantic HTML.
- Hierarchically structures content using `<h1>`, `<h2>`, `<h3>`, etc.
- Suggests image placements using `<img>` tags with placeholder `src` and descriptive `alt` attributes.
- Adds captions to images with `<figcaption>`.
- Outputs clean HTML code ready for use.
- Includes `szablon.html`, a template file for previewing articles, with CSS and JavaScript for formatting and navigation.
- `podglad.html` provides a full preview of the article, combining the template with the processed article content.


## Setup
### Prerequisites
- Node.js installed (version 16 or higher recommended).
- An OpenAI API key.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/openai-article-processor.git
   cd openai-article-processor
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `src/article.txt` file and add the content you want to process.
4. Add your OpenAI API key in `.env`:
   ```javascript
   OPENAI_API_KEY="YOUR_API_KEY"
   ```

## Usage
1. Run the project:
   ```bash
   node src/index.js
   ```
2. The processed HTML will be saved in `src/output/artykul.html`.
3. Use `szablon.html` as a template for formatting and previewing articles. The `<body>` section remains empty and ready for inserting the processed article content.
4. Open `podglad.html` to view the fully formatted article with all styles and navigation features applied.


### Example
Input file (`src/article.txt`):
```
Artificial intelligence: impact and challenges
Artificial intelligence is a field of science and technology concerned with creating machines and programmes capable of performing tasks that require human intelligence, such as learning, understanding natural language and making decisions.
```

Output file (`src/output/artykul.html`):
```html
<h1>Artificial intelligence: impact and challenges</h1>

<p>Artificial intelligence is a field of science and technology concerned with creating machines and programmes capable of performing tasks that require human intelligence, such as learning, understanding natural language and making decisions.</p>

<img src="image_placeholder.jpg" alt="Infographic showing the impact of artificial intelligence on everyday life" />
<figcaption>The impact of artificial intelligence on our daily lives.</figcaption>.
```
