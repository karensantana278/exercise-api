$(document).ready(function(){
    const nome = $('.profile-name');
    const username = $('.profile-username');
    const avatar = $('.profile-avatar');
    const repositorios = $('.profile-repos');
    const seguidores = $('.profile-followers');
    const seguindo = $('.profile-following');
    const linkPerfil = $('.profile-link');

    //carrega os meus dados no primeiro acesso
    fetch('https://api.github.com/users/karensantana278')
    .then(function(response){
    return response.json()
    })
    .then(function(json){
        console.log(json)
        nome.text(json.name)
        username.text("@" + json.login)
        avatar.attr('src', json.avatar_url)
        repositorios.text(json.public_repos)
        seguidores.text(json.followers)
        seguindo.text(json.following)
        linkPerfil.attr('href', json.html_url)
    })


    //pesquisa um novo usuário
    $('#searchButton').click(function(){

        const user = $('#userGit').val();
        const endpoint = `https://api.github.com/users/${user}`;

        fetch(endpoint)
        .then(function(response){
        return response.json()
        })
        .then(function(json){
            console.log(json)
            nome.text(json.name)
            username.text("@" + json.login)
            avatar.attr('src', json.avatar_url)
            repositorios.text(json.public_repos)
            seguidores.text(json.followers)
            seguindo.text(json.following)
            linkPerfil.attr('href', json.html_url)
        })
        .catch(function(err){
            alert('usuário não encontrado, por favor tente novamente')
        })


    })

    

})