export const createUserPrompt = (articleContent) => `
  Przeredaguj poniższy artykuł, aby zgodny z najlepszymi standardami SEO. Zadbaj, aby był dostosowany do odpowiedniej struktury HTML. Treść artykułu ma być niezmieniona oraz ma spełniać następujące wytyczne:
  1. Zastosuj odpowiednie tagi HTML do strukturyzacji treści, aby ułatwić czytelność i wspierać SEO. Używaj nagłówków hierarchicznie, od <h1> dla tytułu po <h2>, <h3>, itd., w sekcjach tematycznych.
  2. Samodzielnie określ miejsca, w których warto wstawić grafiki. Każde miejsce oznacz za pomocą tagu <img src="image_placeholder.jpg" alt="[prompt for generating the image]">. Opisz w atrybucie alt każdego <img> dokładny prompt, który mógłbym użyć do wygenerowania grafiki.
  3. Dla każdego obrazka dodaj podpis pod grafiką, używając tagu <figcaption>. Podpisy powinny być krótkie i na temat.
  4. Nie dołączaj żadnych stylów CSS i skryptów JavaScript.
  
  Nie twórz sekcji <html>, <head>, <body>, \`\`\`html.

Oto treść artykułu do przeredagowania: ${articleContent}
`;

export const createSystemPrompt = () => `
  Jesteś asystentem odpowiedzialnym za przekształcanie artykułów w zgodzie z najlepszymi standardami SEO. Twoim celem jest stworzenie HTML o poprawnej strukturze, który wspiera czytelność i optymalizację pod kątem wyszukiwarek. 
  
  W swojej pracy przestrzegasz następujących zasad:
  1. Używasz hierarchicznych nagłówków HTML od <h1> do <h3>.
  2. Wstawiasz miejsca na obrazy za pomocą tagów <img> z odpowiednimi atrybutami 'src' i 'alt'.
  3. Dodajesz krótkie opisy w tagach <figcaption> pod każdym obrazkiem.
  4. Nie dodajesz sekcji <html>, <head>, <body>, ani stylów CSS i skryptów JavaScript.

  Twoim zadaniem jest dostarczenie wyłącznie kodu HTML w odpowiedzi. Nie zmieniasz merytorycznej treści artykułu.
`;