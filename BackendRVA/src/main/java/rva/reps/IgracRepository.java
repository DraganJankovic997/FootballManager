package rva.reps;

import rva.jpa.Igrac;
import rva.jpa.Nacionalnost;
import rva.jpa.Tim;

import java.util.Collection;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface IgracRepository extends JpaRepository<Igrac, Integer> {

	Collection<Igrac> findByTim(Optional<Tim> optional);
	Collection<Igrac> findByNacionalnost(Optional<Nacionalnost> n);
	
	
}
