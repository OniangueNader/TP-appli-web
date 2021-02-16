$( document ).ready(function() {
    // ce code est exécuter une fois que toute la page est téléchargée par le navigateur
    // voir plus : https://www.w3schools.com/js/js_htmldom.asp
     console.log( "DOM ready!" );
     
     // Y mettre le code jQuery pour valider tous les champs du formulaire
    $('#submit').click(function(event){
        event.preventDefault();
        var nom = $("#nom");
        var prenom = $("#prenom");
        var adresse = $("#adresse");
        var mail = $("#mail");

        if (nom.val()== null || nom.val() ===""){
            //afficher une erreur.
            $('.modalBox').addClass("active");
            $('.corps-modal').html("Le nom doit être supérieur à 5");
        }
        else if (prenom.val().length<5){
            //afficher une erreur.
            $('.modalBox').addClass("active");
            $('.corps-modal').html("Le nom doit être supérieur à 5");
        }
        else if (adresse.val().length<5){
            //afficher une erreur.
            $('.modalBox').css("visibility","visible");
            $('.corps-modal').html("Le nom doit être supérieur à 5");
        }
        else if (mail.val().length<5){
            //afficher une erreur.
            $('.modalBox').css("visibility","visible");
            $('.corps-modal').html("Le nom doit être supérieur à 5");
        }
        else{
            $('.modalBox').css("visibility","visible");
            $('.corps-modal').html("Bienvenu" + nom.val());
        }
    });
 });

