const Nom = document.getElementById("nom")
const prenom =  document.getElementById("prenom")
const email = document.getElementById("email")
const password = document.getElementById("password")
const alertpassword = document.createElement("span")
const emailmessage = document.createElement("span")
const message = document.createElement("span")

 // Création des messages d'erreur
message.innerText = "Veuillez entrer un nom ou prenom valide"
alertpassword.innerText = "Veuillez entrer au moins 8 caractères"
emailmessage.innerText = "Veuillez entrer une adresse e-mail valide"

//Ajout des style au message d'erreur
message.className = emailmessage.className = alertpassword.classList.add("alert"," alert-warning")

// Validation du nom et prénom lors de la saisie

//---------------Nom-------------------
Nom.addEventListener("blur", (e) => {

    let nomRegex = /^[a-zA-ZÀ-ÿ\s]+$/;

    if (!nomRegex.test(Nom.value)) {
        e.preventDefault()
        document.getElementsByClassName("lastnamemessage")[0].appendChild(message)
        Nom.style.borderColor = "red"
        Nom.style.boxShadow = "0 0 0 0.2rem rgba(236, 23, 23, 0.25)"
        Nom.focus()
    }
    else if (nom.value.charAt(0) === " ") {
        e.preventDefault()
        document.getElementsByClassName("lastnamemessage")[0].appendChild(message)
        Nom.style.borderColor = "red"
        Nom.style.boxShadow = "0 0 0 0.2rem rgba(236, 23, 23, 0.25)"
        Nom.focus()
    }

    else {
        if( document.getElementsByClassName("lastnamemessage")[0].contains(message)) {
            Nom.style.borderColor = ""
            Nom.style.boxShadow = ""
            document.getElementsByClassName("lastnamemessage")[0].removeChild(message)
        }
    }
})


//--------------Prenom----------------
prenom.addEventListener("blur", (e) => {
    let prenomRegex = /^[a-zA-ZÀ-ÿ\s]+$/

    
    if (!prenomRegex.test(prenom.value)) {
        e.preventDefault()
        document.getElementsByClassName("firstnamemessage")[0].appendChild(message)
        prenom.style.borderColor = "red"
        prenom.style.boxShadow = "0 0 0 0.2rem rgba(236, 23, 23, 0.25)"
        prenom.focus()
    }
    else if (prenom.value.charAt(0) === " ") {
        e.preventDefault()
        document.getElementsByClassName("firstnamemessage")[0].appendChild(message)
        prenom.style.borderColor = "red"
        prenom.style.boxShadow = "0 0 0 0.2rem rgba(236, 23, 23, 0.25)"
        prenom.focus()
    }

    else {
        if( document.getElementsByClassName("firstnamemessage")[0].contains(message)) {
            prenom.style.borderColor = ""
            prenom.style.boxShadow = ""
            document.getElementsByClassName("firstnamemessage")[0].removeChild(message)
        }
    }
})




// Validation de l'email
email.addEventListener("blur" , (e) => {
    const Regexmotif = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    // Vérification de l'email avec une expression régulière
    if (!Regexmotif.test(email.value)){
        e.preventDefault()
        document.getElementsByClassName("emailmessage")[0].appendChild(emailmessage)
        emailmessage.innerText = "Veuillez entrer une adresse e-mail valide"
        emailmessage.className = "text-danger small"
        emailmessage.style.display = "block"
        emailmessage.style.margin = "5px 5px 0 0"
        email.style.borderColor = "red"
        email.style.boxShadow = "0 0 0 0.2rem rgba(236, 23, 23, 0.25)"
        email.focus()
    }
    //Si l'email est valide, on enlève le message d'erreur             
    else{
        if (document.getElementsByClassName("emailmessage")[0].contains(emailmessage)) {
            email.style.borderColor = ""
            email.style.boxShadow = ""
            document.getElementsByClassName("emailmessage")[0].removeChild(emailmessage)
        }
    }
})


// Validation du mot de passe

password.addEventListener("blur",(e) => {
    const value = password.value
    if (value.length > 8) {
        value.slice(0, 8) // coupe à 8 caractères
        
    }// Vérification de la longueur du mot de passe
    else if (value.length < 8) {
        e.preventDefault()
        document.getElementsByClassName("alertpassword")[0].appendChild(alertpassword)
        password.style.borderColor = "red"
        password.style.boxShadow = "0 0 0 0.2rem rgba(236, 23, 23, 0.25)"
        password.focus()
    } // Si le mot de passe est valide, on enlève le message d'erreur
    else{
        password.style.borderColor = ""
        password.style.boxShadow = ""
        if (document.getElementsByClassName("alertpassword")[0].contains(alertpassword)) {
            document.getElementsByClassName("alertpassword")[0].removeChild(alertpassword)
        }
        
    }
})
