package rva.ctrls;

import java.util.Collection;
import java.util.Collections;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import rva.jpa.Liga;
import rva.jpa.Tim;
import rva.reps.LigaRepository;
import rva.reps.TimRepository;

@CrossOrigin
@RestController
public class TimRestController {
	@Autowired
	private TimRepository tr;
	
	@Autowired
	private LigaRepository lr;
	@Autowired
	private JdbcTemplate jdbc;
	
	@GetMapping("tim")
	public Collection<Tim> getTimovi(){
		return tr.findAll();
	}
	
	@GetMapping("tim/{id}")
	public Optional<Tim> getTim(@PathVariable ("id") Integer id){
		return tr.findById(id);
	}
	
	@GetMapping("timNaziv/{naziv}")
	public Collection<Tim> getTimPoNazivu(@PathVariable ("naziv") String naziv){
		return tr.findByNazivContainingIgnoreCase(naziv);
	}
	
	@GetMapping("timLiga/{id}")
	public Collection<Tim> getTimPoLigi(@PathVariable ("id") int id){
		return tr.findByLiga(lr.findById(id));
	}
	
	@DeleteMapping("tim/{id}")
	public ResponseEntity<Tim> deleteTim(@PathVariable ("id") Integer id){
		if(!tr.existsById(id)) return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		tr.deleteById(id);
		if(id==10)
			jdbc.execute("insert into tim(id, naziv, osnovan, sediste, liga)\r\n" + 
					"values(10, 'Delete Test', \r\n" + 
					"to_date('20.01.1975.', 'dd.mm.yyyy.'), 'FTN', 1);");
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@PostMapping("tim")
	public ResponseEntity<Tim> insertTim(@RequestBody Tim noviTim){
		if(!tr.existsById(noviTim.getId())) {
			tr.save(noviTim);
			return new ResponseEntity<>(HttpStatus.OK);
		}
		return new ResponseEntity<>(HttpStatus.CONFLICT);
	}
	
	@PutMapping("tim")
	public ResponseEntity<Tim> updateTim(@RequestBody Tim noviTim){
		if(!tr.existsById(noviTim.getId())) return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		tr.save(noviTim);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	
	
	
	
	
	
	
	
}
