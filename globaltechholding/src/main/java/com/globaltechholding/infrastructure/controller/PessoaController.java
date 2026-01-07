package com.globaltechholding.infrastructure.controller;

import com.globaltechholding.application.dto.input.pessoa.PessoaInputDto;
import com.globaltechholding.application.dto.output.pessoa.PessoaOutputDto;
import com.globaltechholding.application.usecases.PessoaUseCase;
import com.globaltechholding.infrastructure.api.PessoaAPI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
public class PessoaController implements PessoaAPI {

    private final PessoaUseCase pessoaUseCase;

    @Autowired
    public PessoaController(PessoaUseCase pessoaUseCase) {
        this.pessoaUseCase = pessoaUseCase;
    }

    @Override
    public ResponseEntity<Page<PessoaOutputDto>> buscarTodos(Pageable pageable) {
        return ResponseEntity.ok(pessoaUseCase.buscarTodos(pageable));
    }

    @Override
    public ResponseEntity<PessoaOutputDto> buscarPorId(Long id) {
        return ResponseEntity.ok(pessoaUseCase.buscarPorId(id));
    }

    @Override
    public ResponseEntity<PessoaOutputDto> salvar(PessoaInputDto pessoaInputDto) {
        return ResponseEntity.ok(pessoaUseCase.salvar(pessoaInputDto));
    }

    @Override
    public ResponseEntity<PessoaOutputDto> atualizar(Long id, PessoaInputDto pessoaInputDto) {
        return ResponseEntity.ok(pessoaUseCase.atualizar(id, pessoaInputDto));
    }

    @Override
    public ResponseEntity<Void> deletar(Long id) {
        pessoaUseCase.deletar(id);
        return ResponseEntity.noContent().build();
    }

    @Override
    public ResponseEntity<Double> calcularPesoIdeal(Long id) {
        return ResponseEntity.ok(pessoaUseCase.calcularPesoIdeal(id));
    }
}
