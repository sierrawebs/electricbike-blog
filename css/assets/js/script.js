document.addEventListener('DOMContentLoaded', function () {
    fetchArticles();

    function fetchArticles() {
        fetch('config/settings.json')
            .then(response => response.json())
            .then(config => {
                const apiBaseUrl = config.apiBaseUrl;
                const apiKey = config.apiKey;

                fetch(apiBaseUrl, {
                    headers: {
                        'Authorization': `Bearer ${apiKey}`
                    }
                })
                .then(response => response.json())
                .then(data => {
                    const articlesSection = document.getElementById('articles');
                    articlesSection.innerHTML = ''; // Clear previous content
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
            })
            .catch(error => console.error('Error loading configuration:', error));
    }
});
