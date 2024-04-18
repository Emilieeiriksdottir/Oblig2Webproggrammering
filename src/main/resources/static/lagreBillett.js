function lagreBillett(){
    const billett = {
        filmvalg: $("#filmvalg").val(),
        antall: $("#antall").val(),
        fornavn: $("#fornavn").val(),
        etternavn: $("#etternavn").val(),
        telefon: $("#telefon").val(),
        epost: $("#epost").val()
    }
    const url = "/lagreBillett";
    $.post(url, billett, function (){
        window.location.href = 'index.html';
    });
}