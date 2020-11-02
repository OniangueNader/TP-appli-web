function validation(){
    var nom = document.getElementById("nom").nodeValue;
    var errormsg = document.getElementById("error").innerHTML
    if (nom.length<5){
        //afficher une erreur.
    }
}

form.addEventListener('submit',(valid)=> {valid.preventDefault})