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

import rva.jpa.Nacionalnost;
import rva.reps.NacionalnostRepository;

@RestController
public class NacionalnostRestController {

	
	
	
	@Autowired
	private NacionalnostRepository nr;
	
	@Autowired
	private JdbcTemplate jdbc;
	
	
	@GetMapping("nacionalnost")
	public Collection<Nacionalnost> getNacionalnosti(){
		return nr.findAll();
	}
	
	@GetMapping("nacionalnost/{id}")
	public Optional<Nacionalnost> getNacionalnost(@PathVariable ("id") Integer id) {
		return nr.findById(id);
	}
	
	@DeleteMapping("nacionalnost/{id}")
	public ResponseEntity<Nacionalnost> deleteNacionalnost(@PathVariable ("id") Integer id){
		if(!nr.existsById(id)) return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		nr.deleteById(id);
		if(id == 6)
			jdbc.execute("insert into nacionalnost(id, naziv, skracenica) values(6, \'Del Test\', \'DT\');");
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@PostMapping("nacionalnost")
	public ResponseEntity<Nacionalnost> insertNacionalnost(@RequestBody Nacionalnost novaNacionalnost){
		if(!nr.existsById(novaNacionalnost.getId())) {
			nr.save(novaNacionalnost);
			return new ResponseEntity<>(HttpStatus.OK);
		}
		return new ResponseEntity<>(HttpStatus.CONFLICT);
	}
	
	@PutMapping("nacionalnost")
	public ResponseEntity<Nacionalnost> updateNacionalnost(@RequestBody Nacionalnost novaNacionalnost){
		if(!nr.existsById(novaNacionalnost.getId())) return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		nr.save(novaNacionalnost);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@GetMapping("nacionalnostSkracenica/{skracenica}")
	public Collection<Nacionalnost> findBySkracenicaIgnoreCase(@PathVariable ("skracenica") String skracenica){
		return nr.findBySkracenicaIgnoreCase(skracenica);
	}
}



















