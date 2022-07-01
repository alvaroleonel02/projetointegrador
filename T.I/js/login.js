function entrar(){
     usuario = document.querySelector('#usuario')
     userLabel= document.querySelector('#userLabel')

     senha = document.querySelector('#senha')
     senhaLabel = document.querySelector('#senhaLabel')


    msgError = document.querySelector('#msgError')
    listaUser = []

    userValid = {
        nome: '',
        user: '',
        senha: ''
    }

    listaUser = JSON.parse(localStorage.getItem('listaUser'))

    listaUser.forEach((item) => {
        if(usuario.value == item.userCad && senha.value == item.senhaCad){
            userValid = {
                nome: item.nomeCad,
                user: item.userCad,
                senha: item.senhaCad
            }
        }
        
    })
  
    if(usuario.value == userValid.user && senha.value == userValid.senha){
        window.location.href = 'inicio.html'
        
        let mathRandom = Math.random().toString(16).substr(2)
        let token = mathRandom + mathRandom
        
        localStorage.setItem('token', token)
        localStorage.setItem('userLogado', JSON.stringify(userValid))
      } else {
        userLabel.setAttribute('style', 'color: red')
        usuario.setAttribute('style', 'border-color: red')
        senhaLabel.setAttribute('style', 'color: red')
        senha.setAttribute('style', 'border-color: red')
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = 'Usuário ou senha incorretos'
        usuario.focus()
      }
      
    }

