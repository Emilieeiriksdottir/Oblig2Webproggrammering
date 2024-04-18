package oslomet.oblig2webproggrammering;

public class Billett {
    private int id;
    private String filmvalg;
    private int antall;
    private String fornavn;
    private String etternavn;
    private String telefon;
    private String epost;

    public Billett(int id, String filmvalg, int antall, String fornavn, String etternavn, String telefon, String epost) {
        this.id = id;
        this.filmvalg = filmvalg;
        this.antall = antall;
        this.fornavn = fornavn;
        this.etternavn=etternavn;
        this.telefon=telefon;
        this.epost=epost;
    }
    public Billett(){}

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFilmvalg() {
        return filmvalg;
    }

    public void setFilmvalg(String filmvalg) {
        this.filmvalg = filmvalg;
    }

    public int getAntall() {
        return antall;
    }

    public void setAntall(int antall) {
        this.antall = antall;
    }

    public String getFornavn() {
        return fornavn;
    }

    public void setFornavn(String fornavn) {
        this.fornavn = fornavn;
    }

    public String getEtternavn() {
        return etternavn;
    }

    public void setEtternavn(String etternavn) {
        this.etternavn = etternavn;
    }

    public String getTelefon() {
        return telefon;
    }

    public void setTelefon(String telefon) {
        this.telefon = telefon;
    }

    public String getEpost() {
        return epost;
    }

    public void setEpost(String epost) {
        this.epost = epost;
    }
}
