"use strict"

$(document).ready(function(){
////////////////////////////////////////////////////

    $('#submit').click(function (){
        // cancel submission
        $('form').submit(function(){return false;});
       
        // create contact card
        var first = $('#firstName').val();
        //console.log(first);
        var last = $('#lastName').val();
        //console.log(last);
        var desc = $('#description').val();
        $('#contactcard').append('<div class="contact"><h1>'
         + first + " " + last + '</h1>' +
            '<h2>' + desc + '</h2></div>');
        
            console.log("qwerqewrqerqewr");
    })

  

    $(document).on('click', '.contact', function(){
       $(this).children().toggle();
      


    })  


    ////////////(///////////////////////////////////////////////////////////a
})