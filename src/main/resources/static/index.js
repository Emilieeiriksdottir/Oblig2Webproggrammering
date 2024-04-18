$(function(){
    hentAlle();
});
function kjopBillett() {
    const isValid = sjekkInput();
    if (!isValid) {
        return;
    }
    const billett = {
        filmvalg: $("#filmvalg").val(),
        antall: $("#antall").val(),
        fornavn: $("#fornavn").val(),
        etternavn: $("#etternavn").val(),
        telefon: $("#telefon").val(),
        epost: $("#epost").val()
    };
    $.post("/lagre", billett, function () {
        hentAlle();
    });
    $("#filmvalg").val("");
    $("#antall").val("");
    $("#fornavn").val("");
    $("#etternavn").val("");
    $("#telefon").val("");
    $("#epost").val("");
}

function hentAlle(){
    $.get("/hentAlle", function (billetter){
        formaterData(billetter);
    });
}

function formaterData(billetter){
    let ut = "<table class='table table-striped'>" +
        "<tr>" +
        "<th>Filmvalg</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Nummer</th><th>Epost</th><th></th><th></th>" +
        "</tr>";
    for (let billett of billetter){
        ut+="<tr>"+
            "<td>"+billett.filmvalg+"</td>"+
            "<td>"+billett.antall+"</td>"+
            "<td>"+billett.fornavn+"</td>"+
            "<td>"+billett.etternavn+"</td>"+
            "<td>"+billett.telefon+"</td>"+
            "<td>"+billett.epost+"</td>"+
            "<td> <a class='btn btn-primary' href='endreBillett.html?id="+billett.id+"'>Endre</a> </td>"+
            "<td> <button class='btn btn-danger' onclick='slettEnBillett("+billett.id+")'>Slett</button></td>"+
            "</tr>";
    }
    $("#resultat").html(ut);
}

function slettAlle(){
    $.get("/slettAlle", function (){
        $("#resultat").empty();
        hentAlle();
    })
}


function sjekkInput() {
    let isValid = true;

    let filmvalg = $("#filmvalg").val();
    $("#feilFilm").html("");
    if (filmvalg === "" || filmvalg === "Velg film her") {
        $("#feilFilm").html("Må velge en film".fontcolor("red"));
        isValid = false;
    }

    let antall = $("#antall").val();
    $("#feilAntall").html("");

    //Dersom antall ikke er et tall får vi feilmelding opp
    if (antall === "" || antall <= 0 || isNaN(antall)) {
        $("#feilAntall").html("Må skrive noe inn i antall".fontcolor("red"));
        isValid = false;
    }

    /*Definerer en regex validering som skal hjelpe å forsikre riktig input av navn. Her har jeg brukt følgende nettsider for
     hjelp med regex validering: https://www.quora.com/What-does-this-regex-match-a-z
     og https://cerveceroscodigo.github.io/ServiciosDeVivienda/constant-values.html#lib.RegexTester.KUN_BOKSTAVER */

    const navnRegex = /^[A-Z][a-z]{1,30}$/;
    let fornavn = $("#fornavn").val();
    $("#feilFornavn").html("");
    if (navnRegex.test(fornavn) === false) {
        $("#feilFornavn").html("Må skrive noe inn i Fornavn".fontcolor("red"));
        isValid = false;
    }
    //Gjør det samme med etternavn som fornavn
    let etternavn = $("#etternavn").val();
    $("#feilEtternavn").html("");
    if (navnRegex.test(etternavn) === false) {
        $("#feilEtternavn").html("Må skrive noe inn i etternavn".fontcolor("red"));
        isValid = false;
    }

//For telefonvalidering har jeg brukt kode fra https://stackoverflow.com/questions/37114166/regex-for-8-digit-phone-number-singapore-number-length
    const telefonnrRegex = /^[0-9]{8}$/;
    let telefon = $("#telefon").val();
    $("#feilTelefon").html("");
    if (telefonnrRegex.test(telefon) === false) {
        $("#feilTelefon").html("Må skrive noe inn i telefonnr".fontcolor("red"));
        isValid = false;
    }

    //For hjelp med email regex validering har jeg brukt følgende nettside: https://emaillistvalidation.com/blog/email-validation-in-javascript-using-regular-expressions-the-ultimate-guide/
    const epostRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let epost = $("#epost").val();
    $("#feilEpost").html("");
    if (epostRegex.test(epost) === false) {
        $("#feilEpost").html("Må skrive noe inn i epost".fontcolor("red"));
        isValid = false;
    }
    return isValid;
}

function slettEnBillett(id){
    const url = "/slettEnBillett?id="+id;
    $.get(url, function (){
        window.location.href = "/index.html";
    })
};