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
        $('#contactcard').append('<div class="contact"><button id="togglecontact">x</button><h1>' + first + " " + last + '</h1></div>')
            console.log("qwerqewrqerqewr");
    })

    $(document).on('click', '#refresh', function(){
        $('#togglecontact').click(function(){
                $('.contact').toggle();})  
    })
    ///////////////////////////////////////////////////////////////////////a
})