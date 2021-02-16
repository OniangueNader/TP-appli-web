var form = document.getElementById("form")

$(".open").on("click", function(){
    $(".modalBox").addClass(" active");
    form.addEventListener('submit',(e)=>{e.preventDefault()})
});