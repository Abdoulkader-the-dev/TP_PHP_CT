const h2 = document.querySelector('h2')
const urlParams = new URLSearchParams(window.location.search);
let nom = urlParams.get('nom')

if(nom == null){
    h2.textContent = "User not found "
    h2.classList.add("alert","alert-warning")
}
h2.classList.add("alert","alert-success")
h2.textContent = "Bonjour "+nom
console.log(nom)

const de_connect = document.querySelector('#deconnexion')

de_connect.addEventListener('click',(e) => {
    e.preventDefault()
    fetch('http://localhost/TP_PHP_CT/vues/clients/login.html?deconnect=true')
    .then(response => response.text())
})
