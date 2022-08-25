$(document).ready(function () {
    var ga = document.createElement("script"); //ga is to remember Google Analytics ;-)
    ga.type = 'text/javascript';
    ga.src = 'blob.js';
    ga.id = 'invisible';
    document.body.appendChild(ga);

    var ge = document.createElement("script"); //ga is to remember Google Analytics ;-)
    ge.type = 'text/javascript';
    ge.src = 'blob2.js';
    ge.id = 'invisible';
    document.body.appendChild(ge);
    
    $('#invisible').remove();
});