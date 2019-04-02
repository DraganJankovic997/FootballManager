package rva.ctrls;

import java.util.Collection;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import rva.jpa.Liga;
import rva.reps.LigaRepository;

@RestController
public class LigaRestController {

	@Autowired
	private LigaRepository lr;
	
	@Autowired
	private JdbcTemplate jdbc;
	
	@GetMapping("liga")
	public Collection<Liga> getLige(){
		return lr.findAll();
	}
	
	@GetMapping("liga/{id}")
	public Optional<Liga> getLiga(@PathVariable ("id") Integer id) {
		return lr.findById(id);
	}
	
	@GetMapping("ligaOznaka/{oznaka}")
	public Collection<Liga> getLigaPoOznaci(@PathVariable ("oznaka") String oznaka) {
		return lr.findByOznakaIgnoreCase(oznaka);
	}
	
	@DeleteMapping("liga/{id}")
	public ResponseEntity<Liga> deleteLiga(@PathVariable ("id") Integer id){
		if(!lr.existsById(id)) return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		lr.deleteById(id);
		if(id==4)
			jdbc.execute("insert into liga(id, naziv, oznaka)\r\n" + 
					"values(4, 'Test Delete', 'TLS');");
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@PostMapping("liga")
	public ResponseEntity<Liga> insertLiga(@RequestBody Liga novaLiga){
		if(!lr.existsById(novaLiga.getId())) {
			lr.save(novaLiga);
			return new ResponseEntity<>(HttpStatus.OK);
		}
		return new ResponseEntity<>(HttpStatus.CONFLICT);
	}
	
	@PutMapping("liga")
	public ResponseEntity<Liga> updateLiga(@RequestBody Liga novaLiga){
		if(!lr.existsById(novaLiga.getId())) return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		lr.save(novaLiga);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	
}
