package rva.ctrls;

import java.util.Collection;
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

import rva.jpa.Igrac;
import rva.reps.IgracRepository;
import rva.reps.NacionalnostRepository;
import rva.reps.TimRepository;

@CrossOrigin
@RestController
public class IgracRestController {

	
	@Autowired
	private IgracRepository ir;
	
	@Autowired 
	private TimRepository tr;
	@Autowired
	private NacionalnostRepository nr;
	@Autowired
	private JdbcTemplate jdbc;
	
	@GetMapping("igrac")
	public Collection<Igrac> getIgraci(){
		return ir.findAll();
	}
	
	@GetMapping("igrac/{id}")
	public Optional<Igrac> getIgrac(@PathVariable("id") Integer id){
		return ir.findById(id);
	}
	

	@GetMapping("igracTim/{id}")
	public Collection<Igrac> getIgraciPoTimu(@PathVariable ("id") Integer id){
		return ir.findByTim(tr.findById(id));
	}
	
	@GetMapping("igracNacionalnost/{id}")
	public Collection<Igrac> getIgracPoNacionalnosti(@PathVariable ("id") Integer id){
		return ir.findByNacionalnost(nr.findById(id));
	}
	
	@DeleteMapping("igrac/{id}")
	public ResponseEntity<Igrac> deleteIgrac(@PathVariable ("id") Integer id){
		if(!ir.existsById(id)) return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		ir.deleteById(id);
		if(id == 15)
			jdbc.execute("insert into igrac(id, ime, prezime, broj_reg, datum_rodjenja, nacionalnost, tim)\r\n" + 
					"values(15, 'Test', 'Delete', '3321', \r\n" + 
					"to_date('20.12.1977.', 'dd.mm.yyyy.'), 1, 1);");
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@PostMapping("igrac")
	public ResponseEntity<Igrac> insertIgrac(@RequestBody Igrac noviIgrac){
		if(!ir.existsById(noviIgrac.getId())) {
			ir.save(noviIgrac);
			return new ResponseEntity<>(HttpStatus.OK);
		}
		return new ResponseEntity<>(HttpStatus.CONFLICT);
	}
	
	@PutMapping("igrac")
	public ResponseEntity<Igrac> updateIgrac(@RequestBody Igrac noviIgrac){
		if(!ir.existsById(noviIgrac.getId())) return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		ir.save(noviIgrac);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	
	
	
	
	
	
	
}
