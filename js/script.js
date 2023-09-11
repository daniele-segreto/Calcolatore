$(document).ready(function () {
    
    somma = function (a, b) {
        var a = $('#primo').val();
        var b = $('#secondo').val();
        
        somma = parseInt(a) + parseInt(b);
        //alert(somma);
        
        $('#risultato').val(somma);
    }
    
    sottrai = function (a, b) {
        var a = $('#primo').val();
        var b = $('#secondo').val();
        
        sottrazione = parseInt(a) - parseInt(b);
        //alert(sottrazione);
        
        $('#risultato').val(sottrazione);
    }
    
    moltiplica = function (a, b) {
        var a = $('#primo').val();
        var b = $('#secondo').val();
        
        moltiplicazione = parseInt(a) * parseInt(b);
        //alert(moltiplicazione);
        
        $('#risultato').val(moltiplicazione);
    }
    
    dividi = function (a, b) {
        var a = $('#primo').val();
        var b = $('#secondo').val();
        
        divisione = parseInt(a) / parseInt(b);
        //alert(divisione);
        
        $('#risultato').val(divisione);
    }
    
    azzera = function (result) {
        var result = $('#risultato').val();
        
        if (result !== '') {
            $('#primo').val('');
            $('#secondo').val('');
            $('#risultato').val('');
        }
    }
    
});