package com.globaltechholding.infrastructure.repositories;

import com.globaltechholding.domain.entities.Pessoa;
import com.globaltechholding.domain.repositories.PessoaRepository;
import com.globaltechholding.infrastructure.exception.NotFoundException;
import com.globaltechholding.infrastructure.persistence.PessoaJpaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

@Repository
public class TaskRepositoryImpl implements PessoaRepository {

    private final PessoaJpaRepository pessoaJpaRepository;

    @Autowired
    public TaskRepositoryImpl(PessoaJpaRepository pessoaJpaRepository) {
        this.pessoaJpaRepository = pessoaJpaRepository;
    }

    @Override
    public Page<Pessoa> findAll(Pageable pageable) {
        return this.pessoaJpaRepository.findAll(pageable);
    }

    @Override
    public Pessoa findById(long id) {
        return pessoaJpaRepository.findById(id).orElseThrow(NotFoundException::new);
    }

    @Override
    public Pessoa save(Pessoa pessoa) {
        return this.pessoaJpaRepository.save(pessoa);
    }

    @Override
    public Pessoa update(Pessoa pessoa) {
        return this.pessoaJpaRepository.save(pessoa);
    }

    @Override
    public void deleteById(Long id) {
        this.pessoaJpaRepository.deleteById(id);
    }
}
