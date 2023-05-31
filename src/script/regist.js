// const regist = (nama, email, password) => {
//     if(!nama && !email && !password) return console.error("Cannot find the data");

//     let data = {
//         'nama': nama,
//         'email': email,
//         'password': password
//     }

//     const add = localStorage.setItem('data_user', data)

//     if(!add) {
//         console.error("Storage gagal dibuat")
//     } else {
//         console.log("Berhasil membuat storage")
//     }
// }

const forms = document.getElementById('form')


forms.addEventListener('submit', (e) => {
    e.preventDefault()

    const nama = document.getElementById('nama').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    localStorage.setItem('nama', nama)
    localStorage.setItem('email', email)
    localStorage.setItem('password', password)

    const accept = confirm("Data telah berhasil ditambahkan, pergi ke halaman login?")
    
    if(accept) {
        window.location.replace("/pages/login.html")
    } else {
        alert("Logout")
    }

})