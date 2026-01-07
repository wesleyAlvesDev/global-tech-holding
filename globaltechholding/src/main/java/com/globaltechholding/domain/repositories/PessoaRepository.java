package com.globaltechholding.domain.repositories;

import com.globaltechholding.domain.entities.Pessoa;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface PessoaRepository {

    Page<Pessoa> findAll(Pageable pageable);
    Pessoa findById(long id);
    Pessoa save(Pessoa pessoa);
    Pessoa update(Pessoa pessoa);
    void deleteById(Long id);
}
