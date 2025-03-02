document.addEventListener('DOMContentLoaded', function () {
    const apiBaseUrl = 'https://api.seobot.ai/articles';

    fetch(apiBaseUrl)
        .then(response => response.json())
        .then(data => {
            const articlesSection = document.getElementById('articles');
            data.articles.forEach(article => {
                const articleElement = document.createElement('article');
                articleElement.innerHTML = `
                    <h2>${article.title}</h2>
                    <p>${article.content}</p>
                `;
                articlesSection.appendChild(articleElement);
            });
        })
        .catch(error => console.error('Error fetching articles:', error));
});
