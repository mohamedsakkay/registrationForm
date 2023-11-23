// Obtenir le formulaire
const formulaire = document.querySelector("form");

// Obtenir les inputs password
const motDePasse = document.querySelector("#password");
const confirmerMotDePasse = document.querySelector("#confirmpassword");


// Obtenir les icones 
const icon1 = document.querySelector("#icon1")
const eyeColor1 = document.querySelector(".fas.fa-eye.one")
const icon2 = document.querySelector("#icon2")
const eyColor2 = document.querySelector(".fas.fa-eye.two")


// Afficher le mot de passe lorsque l'utilisateur clique sur l'icône + changement de couleur icone
icon1.addEventListener("click", () => {
    motDePasse.type = motDePasse.type === "password" ? "text" : "password";

    if (motDePasse.type === "text") {
        eyeColor1.classList.remove("text-secondary");
        eyeColor1.classList.add("text-danger");
    } else {
        eyeColor1.classList.add("text-secondary");
        eyeColor1.classList.remove("text-danger");
    }
});
;

icon2.addEventListener("click", () => {
    confirmerMotDePasse.type = confirmerMotDePasse.type === "password" ? "text" : "password";

    if (confirmerMotDePasse.type === "text") {
        eyColor2.classList.remove("text-secondary");
        eyColor2.classList.add("text-danger");
    } else {
        eyColor2.classList.add("text-secondary");
        eyColor2.classList.remove("text-danger");
    }
});


// Attachez un event lister
formulaire.addEventListener("submit", function (event) {
    // Obtenez les valeurs des deux champs de mot de passe
    const mdpValue = motDePasse.value;
    const confirMdpValue = confirmerMotDePasse.value;
    // Vérifier si les mots de passe correspondent
    if (mdpValue !== confirMdpValue) {
        alert("Les mots de passe ne correspondent pas !");
        event.preventDefault(); // Empêcher la soumission du formulaire
        return;
    }
    // Vérifier si le mot de passe a au moins 10 caractères dont 1 caractère spécial
    if (mdpValue.length < 10 || !/[!@#$%^&*(),.?":{}|<>]/.test(mdpValue)) {
        alert("Le mot de passe doit contenir au moins 10 caractères dont 1 caractère spécial !");
        event.preventDefault(); // Empêcher la soumission du formulaire
        return;
    }
});

