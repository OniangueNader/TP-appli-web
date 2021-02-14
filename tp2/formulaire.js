function validation(){
    var nom = document.getElementById("nom");
    var prenom = document.getElementById("prenom");
    var adresse = document.getElementById("adresse");
    var mail = document.getElementById("mail");
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var errormsg = document.getElementById("error");
    var form = document.getElementById('form')
    if (nom.value.length<5){
        //afficher une erreur.
        document.getElementById("resultat").innerHTML = '';
        document.getElementById("error").innerHTML = "le nom est supérieur à 5";
        form.addEventListener('submit',(e)=>{e.preventDefault()})
    }
    else if (prenom.value.length<5){
        //afficher une erreur.
        document.getElementById("resultat").innerHTML = '';
        document.getElementById("error").innerHTML = "le prenom est supérieur à 5";
        form.addEventListener('submit',(e)=>{e.preventDefault()})
    }
    else if (adresse.value.length<5){
        //afficher une erreur.
        document.getElementById("resultat").innerHTML = '';
        document.getElementById("error").innerHTML = "le adresse est supérieur à 5";
        form.addEventListener('submit',(e)=>{e.preventDefault()})
    }
    else if (mail.value.length<5){
        //afficher une erreur.
        document.getElementById("resultat").innerHTML = '';
        document.getElementById("error").innerHTML = "le mail est supérieur à 5";
        form.addEventListener('submit',(e)=>{e.preventDefault()})
    }
    else{
        document.getElementById("error").innerHTML = '';
        document.getElementById("resultat").innerHTML = "Bienvenue " + document.querySelector("#nom").value;
        
    }
}
