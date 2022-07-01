let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let usuario = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelUsuario')
let validUsuario = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let confirmSenha = document.querySelector('#confirmSenha')
let labelConfirmSenha = document.querySelector('#labelConfirmSenha')
let validConfirmSenha = false

let endereco = document.querySelector('#endereco')
let labelEndereco = document.querySelector('#labelEndereco')
let validEndereco = false

let cidade = document.querySelector('#cidade')
let labelCidade = document.querySelector('#labelCidade')
let validCidade = false

let idade = document.querySelector('#idade')
let labelIdade = document.querySelector('#labelIdade')
let validIdade = false

let msgError = document.querySelector('#msgError')
let msgSucess = document.querySelector('#msgSucess')


nome.addEventListener('keyup', ()=>{
    if(nome.value.length <= 2){
        labelNome.setAttribute('style', 'color: red')
        labelNome.innerHTML ='Nome (Insira no minímo 3 caracteres)'
        nome.setAttribute('style', 'border-color: red')
        validNome = false
    }else{
        labelNome.setAttribute('style', 'color: green')
        labelNome.innerHTML ='Nome'
        nome.setAttribute('style', 'border-color: green')
        validNome = true
    }
})

usuario.addEventListener('keyup', ()=>{
    if(usuario.value.length <= 4){
        labelUsuario.setAttribute('style', 'color: red')
        labelUsuario.innerHTML ='Usuario (Insira no minímo 5 caracteres)'
        usuario.setAttribute('style', 'border-color: red')
        validUsuario = false
    }else{
        labelUsuario.setAttribute('style', 'color: green')
        labelUsuario.innerHTML ='Usuario'
        usuario.setAttribute('style', 'border-color: green')
        validUsuario = true
    }
})

senha.addEventListener('keyup', ()=>{
    if(senha.value.length <= 5){
        labelSenha.setAttribute('style', 'color: red')
        labelSenha.innerHTML ='Senha (Insira no minímo 6 caracteres)'
        senha.setAttribute('style', 'border-color: red')
        validSenha = false
    }else{
        labelSenha.setAttribute('style', 'color: green')
        labelSenha.innerHTML ='Senha'
        senha.setAttribute('style', 'border-color: green')
        validSenha = true
    }
})

confirmSenha.addEventListener('keyup', ()=>{
    if(senha.value != confirmSenha.value){
        labelConfirmSenha.setAttribute('style', 'color: red')
        labelConfirmSenha.innerHTML ='Confirmar Senha (As senhas não conferem)'
        confirmSenha.setAttribute('style', 'border-color: red')
        validConfirmSenha = false
    }else{
        labelConfirmSenha.setAttribute('style', 'color: green')
        labelConfirmSenha.innerHTML ='Confirmar Senha'
        confirmSenha.setAttribute('style', 'border-color: green')
        validConfirmSenha = true
    }
})

endereco.addEventListener('keyup', ()=>{
    if(endereco.value.length <= 5){
        labelEndereco.setAttribute('style', 'color: red')
        labelEndereco.innerHTML ='Endereço (Insira no minímo 6 caracteres)'
        endereco.setAttribute('style', 'border-color: red')
        validEndereco = false

    }else{
        labelEndereco.setAttribute('style', 'color: green')
        labelEndereco.innerHTML ='Endereço'
        endereco.setAttribute('style', 'border-color: green')
        validEndereco = true
    }
})

cidade.addEventListener('keyup', ()=>{
    if(cidade.value.length <= 2){
        labelCidade.setAttribute('style', 'color: red')
        labelCidade.innerHTML ='Cidade (Insira no minímo 3 caracteres)'
        cidade.setAttribute('style', 'border-color: red')
        validCidade = false
    }else{
        labelCidade.setAttribute('style', 'color: green')
        labelCidade.innerHTML ='Cidade'
        cidade.setAttribute('style', 'border-color: green')
        validCidade = true
    }
})

idade.addEventListener('keyup', ()=>{
    if(idade.value < 18){
        labelIdade.setAttribute('style', 'color: red')
        labelIdade.innerHTML ='Idade (Somente Maiores de Idade)'
        idade.setAttribute('style', 'border-color: red')
        validIdade = false
    }else{
        labelIdade.setAttribute('style', 'color: green')
        labelIdade.innerHTML ='Idade'
        idade.setAttribute('style', 'border-color: green')
        validIdade = true;
    }
})

function cadastrar(){
    if(validNome && validUsuario && validSenha && validConfirmSenha && validEndereco && validCidade && validIdade){
      let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
      
      listaUser.push(
      {
        nomeCad: nome.value,
        userCad: usuario.value,
        senhaCad: senha.value
      }
      )
      
      localStorage.setItem('listaUser', JSON.stringify(listaUser))
      
     
      msgSuccess.setAttribute('style', 'display: block')
      msgSuccess.innerHTML = '<strong>Cadastrando usuário...</strong>'
      msgError.setAttribute('style', 'display: none')
      msgError.innerHTML = ''
      
      setTimeout(()=>{
          window.location.href = 'login.html'
      }, 3000)
    
      
    } else {
      msgError.setAttribute('style', 'display: block')
      msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastrar</strong>'
      msgSuccess.innerHTML = ''
      msgSuccess.setAttribute('style', 'display: none')
    }
  }
