const forms = document.getElementById('form')

function login(email, password) {
    const server_email = localStorage.getItem('email')
    const server_password = localStorage.getItem('password')

    if(email !== server_email && password !== server_password) {
        console.warn("Maaf login gagal")
    } else if(email === server_email && password === server_password) {
        console.log("Login Berhasil dengan user: " + localStorage.getItem('nama'))
        window.location.replace("/pages/dashboard.html")
    } else {
        alert("Email/Password yang anda masukan salah!")
    }
}

forms.addEventListener('submit', (e) => {
    e.preventDefault()

    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    login(email, password)

})

console.log(localStorage)