const cadastro = []

const login = document.getElementById(login)

login.addEventListener('click', logar(e))

function logar(e) {
    e.preventDefault();
    const email = document.getElementById(email).value;
    const senha = document.getElementById(senha).value;
}