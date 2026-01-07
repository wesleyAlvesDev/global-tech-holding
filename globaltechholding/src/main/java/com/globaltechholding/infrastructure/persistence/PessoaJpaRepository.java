package com.globaltechholding.infrastructure.persistence;

import com.globaltechholding.domain.entities.Pessoa;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PessoaJpaRepository extends JpaRepository<Pessoa, Long> {
}
