    const tittle  = document.getElementById("Título");
    const article = document.getElementById("Artigo");
    const writter = document.getElementById("Autor");

    const maxTittleLength = 100;
    const maxArticleLength = 8000;
    const maxWritterLength = 40;
    
    tittle.addEventListener('input', () => validateLength(tittle, 8, maxTittleLength));
    article.addEventListener('input', () => validateLength(article, 8, maxArticleLength));
    writter.addEventListener('input', () => validateLength(writter, 8, maxWritterLength));