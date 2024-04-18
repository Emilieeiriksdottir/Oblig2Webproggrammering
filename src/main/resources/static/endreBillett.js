 $(function (){
     //hent billetten med billett-id fra url og vis denne i skjemaet
     const id = window.location.search.substring(1); //returnerer id=1 f.eks
     const url = "/hentEnBillett?"+id;
     $.get(url, function (billett){
         $("#id").val(billett.id); //må ha med id inn i skjemaet, hidden i html
         $("#filmvalg").val(billett.filmvalg);
         $("#antall").val(billett.antall);
         $("#fornavn").val(billett.fornavn);
         $("#etternavn").val(billett.etternavn);
         $("#telefon").val(billett.telefon);
         $("#epost").val(billett.epost);
     });
 });

function endreBillett(){
    const billett = {
        id : $("#id").val(), // må ha med denne som ikke har blitt endret for å vite hvilken kunde som skal endres
        filmvalg: $("#filmvalg").val(),
        antall: $("#antall").val(),
        fornavn: $("#fornavn").val(),
        etternavn: $("#etternavn").val(),
        telefon: $("#telefon").val(),
        epost: $("#epost").val()
    }
    $.post("/endreEnBillett", billett, function (){
        window.location.href='index.html';
    })
}