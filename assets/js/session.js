const email = document.getElementById("email")
const password = document.getElementById("password")

const div_form = document.querySelector(".div-form")
const warning = document.createElement("div")
const login_form = document.querySelector('.login')
warning.classList.add("alert", "alert-danger")


login_form.addEventListener('submit',(e) =>{
  e.preventDefault()
  //recuperation des users de la BDD
  fetch("http://localhost/TP_PHP_CT/api/users.php")
  .then(response => response.json())
  .then(data => {
    if(data[0] === null){
        console.log("User not found")
        div_form.insertAdjacentElement("afterbegin",warning)
    }else{
        let userFound = false
        for(let i = 0 ; i < data.length ; i++ ){
          if(email.value === data[i].email){
            sessionStorage.setItem('email' , email.value)
              fetch("http://localhost/TP_PHP_CT/vues/clients/hello.html")
              .then(response => response.text())
              .then(html => div_form.innerHTML = html)
              .catch(error => console.log(error))
            userFound = true
            break
          }
        }
        if (!userFound) {
          console.log("User not found")
          warning.textContent = "User not found"
          div_form.insertAdjacentElement("afterbegin",warning)
        }
    }
  })
  .catch(error => console.log(error))
  
})


function alertStyle(element){
  element.style.borderColor = "red"
  element.style.boxShadow = "0 0 0 0.2rem rgba(236, 23, 23, 0.25)"
}


function cancelStyle(element){
  element.style.borderColor = ""
  element.style.boxShadow = ""
}



// Validation de l'email
email.addEventListener("blur" , (e) => {
  const Regexmotif = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  // Vérification de l'email avec une expression régulière
  if (!Regexmotif.test(email.value)){
    e.preventDefault()
    document.querySelector(".mb-3").insertAdjacentElement("afterbegin",warning)
    warning.innerText = "Veuillez entrer une adresse e-mail valide"
    alertStyle(email)
  }
  //Si l'email est valide, on enlève le message d'erreur             
  else{
    if (document.querySelector(".mb-3").contains(warning)) {
      cancelStyle(email)
      document.querySelector(".mb-3").removeChild(warning)
    }
  }
})


// Validation du mot de passe

password.addEventListener("blur",(e) => {
  const value = password.value
  // Vérification de la longueur du mot de passe
  if (value.length < 8 || value.length > 8) {
      e.preventDefault()
      warning.innerText = "the password must be 8 characters"
      document.querySelector(".mb-3").insertAdjacentElement("afterbegin",warning)
      alertStyle(password)
  } // Si le mot de passe est valide, on enlève le message d'erreur
  else{
      cancelStyle(password)
      if (document.querySelector(".mb-3").contains(warning)) {
        document.querySelector(".mb-3").removeChild(warning)
      }
      
  }
})




document.querySelector('#inscription').addEventListener('click',(e)=> {
  e.preventDefault()
  fetch("http://localhost/TP_PHP_CT/vues/clients/inscription.html")
  .then(r => r.text())
  .then(html => {
    document.querySelector('.container').innerHTML = html
    let script = document.createElement('script')
    script.src = "assets/js/inscription.js"
    document.querySelector('.container').insertAdjacentElement("afterend",script)
  })
  .catch(error => console.log(error))
})


//Gestion de mot de passse oublié
let forgot_pwd = document.querySelector('.forgot')

forgot_pwd.addEventListener('click',(e) =>{
  e.preventDefault()
  div_form.innerHTML = ` <form class="form" method="post" action="http://localhost/TP_PHP_CT/api/pwd_form.php">
    <div class="mb-3">
      <label for="email" class="form-label">Adresse e-mail</label>
      <div class="input-group">
        <span class="input-group-text"><i class="bi bi-envelope"></i></span>
        <input type="email" class="form-control" id="email" name="email" placeholder="Votre e-mail" required autofocus>
      </div>
      <button type="submit" class="btn btn-primary w-100 mb-2" name="submit">Envoyer</button>
    </div>
  </form>`

  document.querySelector('.form').addEventListener('submit',(e) =>{
    fetch('http://localhost/TP_PHP_CT/vues/clients/email-message.html')
    .then(response => response.text())
    .then(html => div_form.innerHTML = html)
    .catch(error => console.log(error))

  })
})

const url = new URL(window.location.href)
const nom = url.searchParams.get('nom')
const pwd_refresh = url.searchParams.get('refresh')

if(nom != null && pwd_refresh != null){

  fetch("http://localhost/TP_PHP_CT/vues/clients/pwd_refresh.html")
  .then(response => response.text())
  .then(html => {
    div_form.innerHTML=html
    document.querySelector('.form').addEventListener('submit',(e) => {
    //div_form.innerHTML = "<div><p>Veuillez patienter...</p></div> "
    console.log(e);
  })
  })
}
