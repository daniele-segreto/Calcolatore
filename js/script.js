$(document).ready(function () {
    $('#alert').css('display', 'block');

    // ADDIZIONE
    somma = function(a, b) {
        // CATTURO I VALORI INSERITI DALL'UTENTE
        a = $('#primo').val();
        b = $('#secondo').val();
        
        // SE ENTRAMBI I VALORI SONO DEI NUMERI
        if ($.isNumeric(a) && $.isNumeric(b)) {
            // ESEGUO L'ADDIZIONE
            addizione = parseInt(a) + parseInt(b);
            
            // INSERISCO IL RISULTATO SUL CAMPO SELEZIONATO
            $('#risultato').val(addizione);
            // ALTRIMENTI
        } else {
            // INSERISCO UN ALERT SUL CAMPO SELEZIONATO
            $('#alert').html(`
            <div class="alert alert-danger" role="alert">
            Devi inserire un valore numerico.
            </div>
            `);
            // E SVUOTO I CAMPI INPUT
            $('input').val('');
        }
        
    }
    
    // SOTTRAZIONE
    sottrai = function(a, b) {
        // CATTURO I VALORI INSERITI DALL'UTENTE
        a = $('#primo').val();
        b = $('#secondo').val();
        
        // SE ENTRAMBI I VALORI SONO DEI NUMERI
        if ($.isNumeric(a) && $.isNumeric(b)) {
            // ESEGUO LA SOTTRAZIONE
            sottrazione = parseInt(a) - parseInt(b);
            
            // INSERISCO IL RISULTATO SUL CAMPO SELEZIONATO
            $('#risultato').val(sottrazione);
            // ALTRIMENTI
        } else {
            // INSERISCO UN ALERT SUL CAMPO SELEZIONATO
            $('#alert').html(`
            <div class="alert alert-danger" role="alert">
            Devi inserire un valore numerico.
            </div>
            `);
            // E SVUOTO I CAMPI IN INPUT
            $('input').val('');
        }
        
    }
    
    // MOLTIPLICAZIONE
    moltiplica = function(a, b) {
        // CATTURO I VALORI INSERITI DALL'UTENTE
        a = $('#primo').val();
        b = $('#secondo').val();
        
        // SE ENTRAMBI I VALORI SONO DEI NUMERI
        if ($.isNumeric(a) && $.isNumeric(b)) {
            // ESEGUO LA MOLTIPLICAZIONE
            moltiplicazione = parseInt(a) * parseInt(b);
            
            // INSERISCO IL RISULTATO SUL CAMPO SELEZIONATO
            $('#risultato').val(moltiplicazione);
            // ALTRIMENTI
        } else {
            // INSERISCO UN ALERT SUL CAMPO SELEZIONATO
            $('#alert').html(`
            <div class="alert alert-danger" role="alert">
            Devi inserire un valore numerico.
            </div>
            `);
            // E SVUOTO I CAMPI IN INPUT
            $('input').val('');
        }
        
    }
    
    // DIVISIONE
    dividi = function(a, b) {
        // CATTURO I VALORI INSERITI DALL'UTENTE
        a = $('#primo').val();
        b = $('#secondo').val();
        
        // SE ENTRAMBI I VALORI SONO DEI NUMERI
        if ($.isNumeric(a) && $.isNumeric(b)) {
            // ESEGUO LA DIVIZIONE
            divisione = parseInt(a) / parseInt(b);
            
            // INSERISCO IL RISULTATO SUL CAMPO SELEZIONATO
            $('#risultato').val(divisione);
            // ALTRIMENTI
        } else {
            // INSERISCO UN ALERT SUL CAMPO SELEZIONATO
            $('#alert').html(`
            <div class="alert alert-danger" role="alert">
            Devi inserire un valore numerico.
            </div>
            `);
            // E SVUOTO I CAMPI IN INPUT
            $('input').val('');
        }
        
    }
    
    // AZZERAMENTO
    azzera = function() {
        // SVUOTO I CAMPI IN INPUT
        $('input').val('');
        // SOSTITUISCO L'ALERT CON UN DIV VUOTO
        $('#alert').html(`<div></div>`);
    }
    
});