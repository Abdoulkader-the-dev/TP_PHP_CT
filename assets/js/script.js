const body = document.querySelector('.div_body');

fetch("http://localhost/TP_PHP_CT/vues/clients/login.html")
.then(r => r.text())
.then(html => {
  body.innerHTML = html
  let script = document.createElement('script')
  script.src = "assets/js/session.js"
  body.insertAdjacentElement("afterend",script)
})
.catch(error => console.log(error))
