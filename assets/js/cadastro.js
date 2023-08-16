const usuariosCadastrados = [
    {
    email:'gustavomonarin11@gmail.com',
    nome:'gustavo',
    senha:'gustavinho'
    }
];

const cadastrar = document.getElementById('cadastrar');

const campos =[
    document.getElementById('email'),
    document.getElementById('nome'),
    document.getElementById('senha'),
    document.getElementById('repita_senha')
]

campos.forEach(campo => {
    campo.addEventListener('focus', function(){
        this.value ='';
        const erroMensagem = campo.nextElementSibling;
        if (erroMensagem && erroMensagem.classList.contains('erro-mensagem')) {
            erroMensagem.remove();
        }
    })
    
})

campos.forEach(campo => {
    campo.addEventListener('blur', function(){
        if(campo.value === '') {
            const erroMensagem = document.createElement('div');
            erroMensagem.classList.add('erro-mensagem');
            erroMensagem.textContent = 'Campo obrigatório';
            campo.insertAdjacentElement('afterend', erroMensagem);
        }else if(campo.name === 'email') {
            if(!validarEmail(campo.value) && campo.value != '') {
                erroCampoInvalido(campo);       
        }
        } else if(campo.name === 'nome') {
            const nome = campo.value.split('')
            if(nome.length < 4 && campo.value != '') {
                erroCampoInvalido(campo);
            }
           
        }
    })
     
})

cadastrar.addEventListener('click', efetuarCadastro);

function efetuarCadastro(e) {
    e.preventDefault();

    const [email, nome, senha, repita_senha] = campos.map(campo => campo);

    const erroMensagem = email.nextElementSibling;
    if (erroMensagem && erroMensagem.classList.contains('erro-mensagem')) {
        erroMensagem.remove();
    }
    
    if (emailCadastrado(email.value)) {
        const erroMensagem = document.createElement('div');
        erroMensagem.classList.add('erro-mensagem');
        erroMensagem.textContent = 'Email já cadastrado';
        email.insertAdjacentElement('afterend', erroMensagem);
    }
    
}

function emailCadastrado (email) {
    const usuarioEncontrado = usuariosCadastrados.find(function (usuario) {
        return usuario.email === email;
    });
    return usuarioEncontrado
}

function validarEmail(email) {
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regexEmail.test(email);
}

function erroCampoInvalido(campo){
    const erroMensagem = document.createElement('div');
    erroMensagem.classList.add('erro-mensagem');
    erroMensagem.textContent = 'Campo inválido';
    campo.insertAdjacentElement('afterend', erroMensagem);
}