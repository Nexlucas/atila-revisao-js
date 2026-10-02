function buscarPosts() {

    const container = document.getElementById('posts');
    container.innerHTML = 'Carregando ...';

    fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
        .then(response => response.json())
        .then(posts => {
            container.innerHTML = '';
            posts.forEach(post => {
                container.innerHTML += `
                    <div class='card'>
                        <h2>${post.title}</h2>
                        <p><strong>${post.body}</strong></p>
                    </div>
                `;
            });
        })
        .catch(error => {
            container.innerHTML = 'Erro ao buscar usuários.';
            console.error(error);
        });
}