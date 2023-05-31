const root = document.getElementById('root')

let _h1 = root.appendChild(document.createElement('h1'))
const nama = localStorage.getItem('nama')


_h1.appendChild(document.createTextNode("Selamat datang! " + nama))

if(!localStorage.length) {
    alert("Please login first!")
    window.location.replace("/index.html")
}


function logout() {
    // localStorage.removeItem('nama')
    // localStorage.removeItem('email')
    // localStorage.removeItem('password')
    alert("Logout selesai")
    window.location.replace("/index.html")
}