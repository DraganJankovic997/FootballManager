package rva.reps;

import java.util.Collection;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import rva.jpa.Liga;
import rva.jpa.Tim;

public interface TimRepository extends JpaRepository<Tim, Integer> {
	Collection<Tim> findByLiga(Optional<Liga> optional);
	Collection<Tim> findByNazivContainingIgnoreCase(String naziv);
}
