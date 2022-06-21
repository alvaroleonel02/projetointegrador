if(localStorage.getItem('token') == null){
    alert('Você precisa estar logado')
}

function sair(){
    localStorage.removeItem('token')
    window.location.href = 'login.html'
}