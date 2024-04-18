package oslomet.oblig2webproggrammering;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class BillettRepository {
    @Autowired
    private JdbcTemplate db;
    public void lagreBillett(Billett innBillett){
        String sql = "INSERT INTO Billett (filmvalg, antall, fornavn, etternavn, telefon, epost) VALUES (?,?,?,?,?,?)";
        db.update(sql, innBillett.getFilmvalg(), innBillett.getAntall(), innBillett.getFornavn(), innBillett.getEtternavn(), innBillett.getTelefon(), innBillett.getEpost());
    }

    public List<Billett> hentAlle(){
        String sql = "SELECT * FROM Billett";
        List<Billett> alleBilletter = db.query(sql,new BeanPropertyRowMapper(Billett.class));
        return alleBilletter;
    }
    public Billett hentEnBillett(int id){
        Object[] param = new Object[1];
        param[0] = id;
        String sql = "SELECT * FROM Billett WHERE id=?";
        Billett enBillett = db.queryForObject(sql,param, BeanPropertyRowMapper.newInstance(Billett.class));
        return enBillett;
    }
    public void endreEnBillett(Billett billett){
        String sql = "UPDATE Billett SET filmvalg=?, antall=?, fornavn=?, etternavn=?, telefon=?, epost=? WHERE id=?";
        db.update(sql, billett.getFilmvalg(), billett.getAntall(), billett.getFornavn(), billett.getEtternavn(), billett.getTelefon(), billett.getEpost(), billett.getId());
    }
    public void slettEnBillett(int id){
        String sql = "DELETE FROM Billett WHERE id=?";
        db.update(sql, id);
    }
    public void slettAlleBilletter(){
        String sql = "DELETE from Billett";
        db.update(sql);
    }

}
