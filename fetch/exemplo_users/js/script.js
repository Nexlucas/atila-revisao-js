function buscarUsuario() {

    const container = document.getElementById('usuarios');
    container.innerHTML = 'Carregando ...';

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(usuarios => {
            container.innerHTML = '';

            usuarios.forEach(usuario => {
                container.innerHTML += `
                    <div class='card'>
                        <h2>${usuario.name}</h2>
                        <p><strong>Usuário:</strong> ${usuario.username}</p>
                        <p><strong>Email:</strong> ${usuario.email}</p>
                        <p><strong>Telefone:</strong> ${usuario.phone}</p>
                        <p><strong>Cidade:</strong> ${usuario.address.city}</p>
                    </div>
                `;
            });
        })
        .catch(error => {
            container.innerHTML = 'Erro ao buscar usuários.';
            console.error(error);
        });
}