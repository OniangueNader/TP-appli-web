$( document ).ready(function() {
    // ce code est exécuter une fois que toute la page est téléchargée par le navigateur
    // voir plus : https://www.w3schools.com/js/js_htmldom.asp
     console.log( "DOM ready!" );
     
     // Y mettre le code jQuery pour valider tous les champs du formulaire
     $("#valid-btn").click(function (e) {
        e.preventDefault();
        if (($("#nom").val() && $("#prenom").val() && $("#date").val() && $("#adresse").val() && $("#email").val()) != "") {
            $('#myModal').modal({ show: true })
            $(".modal-title").text("Bienvenue " + $("#nom").val() + " " + $("#prenom").val());

            var position = $("#adresse").val();

            $(".modal-body").html( `vous habitez :
            <a class="link"  href="http://maps.google.com/maps?" ><img src="https://maps.googleapis.com/maps/api/staticmap?markers=${position}&zoom=14&size=400x300&scale=2&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg"/> Lien Google Maps </a>`);
        } 
        else {
            $('#myModal').modal({ show: true })
            $(".modal-title").text("Erreur");
            $(".modal-body").html('Veuillez remplir tous les champs obligatoires');
        }
    });
 });