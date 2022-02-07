$(document).ready(function(){
    $('#subform').hide();
    $("#subbtn").click(function(){
        $('#subform').slideDown('slow');
    });
    $('#subscribe').click(function(){
        $('#subform').hide();
    })
   

});   