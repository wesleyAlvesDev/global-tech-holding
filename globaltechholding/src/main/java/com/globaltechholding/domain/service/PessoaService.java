package com.globaltechholding.domain.service;

import com.globaltechholding.application.dto.input.pessoa.PessoaInputDto;
import com.globaltechholding.application.dto.output.pessoa.PessoaOutputDto;
import com.globaltechholding.application.usecases.PessoaUseCase;
import com.globaltechholding.domain.entities.Pessoa;
import com.globaltechholding.domain.enums.Sexo;
import com.globaltechholding.infrastructure.mapper.PessoaMapper;
import com.globaltechholding.infrastructure.repositories.TaskRepositoryImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class PessoaService implements PessoaUseCase {

    private final PessoaMapper pessoaMapper;
    private final TaskRepositoryImpl taskRepositoryImpl;

    @Autowired
    public PessoaService(PessoaMapper pessoaMapper, TaskRepositoryImpl taskRepositoryImpl) {
        this.pessoaMapper = pessoaMapper;
        this.taskRepositoryImpl = taskRepositoryImpl;
    }

    @Override
    public Page<PessoaOutputDto> buscarTodos(Pageable pageable) {
        return this.taskRepositoryImpl.findAll(pageable).map(pessoaMapper::toDto);
    }

    @Override
    public PessoaOutputDto buscarPorId(Long id) {
        return this.pessoaMapper.toDto(this.taskRepositoryImpl.findById(id));
    }

    @Override
    public PessoaOutputDto salvar(PessoaInputDto pessoaInputDto) {
        Pessoa pessoa = this.pessoaMapper.toEntity(pessoaInputDto);

        return this.pessoaMapper.toDto(this.taskRepositoryImpl.save(pessoa));
    }

    @Override
    public PessoaOutputDto atualizar(Long id, PessoaInputDto pessoaInputDto) {
        Pessoa pessoa = this.taskRepositoryImpl.findById(id);

        Pessoa pessoaUpdatble = this.pessoaMapper.toEntity(pessoaInputDto);

        pessoaUpdatble.setId(pessoa.getId());

        return this.pessoaMapper.toDto(this.taskRepositoryImpl.save(pessoaUpdatble));
    }

    @Override
    public void deletar(Long id) {
        Pessoa pessoa = this.taskRepositoryImpl.findById(id);

        this.taskRepositoryImpl.deleteById(pessoa.getId());
    }

    @Override
    public Double calcularPesoIdeal(Long id) {
        Pessoa pessoa = this.taskRepositoryImpl.findById(id);

        return pessoa.calcularPesoIdeal();
    }
}
