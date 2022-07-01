

userLogado = JSON.parse(localStorage.getItem('userLogado'))
logado = document.querySelector('#logado')


logado.innerHTML = 'Olá ' + userLogado.nome + ', seja bem-vindo!'
        
console.log(teste);
if(localStorage.getItem('token') == null){
    alert('Você precisa estar logado')
    window.location.href = 'login.html'

}

function sair(){
    localStorage.removeItem('token')
    localStorage.removeItem('userLogado')
    window.location.href = 'login.html'
}
