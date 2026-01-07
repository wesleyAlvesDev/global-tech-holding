package com.globaltechholding.infrastructure.api;

import com.globaltechholding.application.dto.input.pessoa.PessoaInputDto;
import com.globaltechholding.application.dto.output.pessoa.PessoaOutputDto;
import jakarta.validation.Valid;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequestMapping(value = "pessoas")
public interface PessoaAPI {

    @GetMapping
    ResponseEntity<Page<PessoaOutputDto>> buscarTodos(Pageable pageable);

    @GetMapping("/{id}")
    ResponseEntity<PessoaOutputDto> buscarPorId(@PathVariable(name = "id") Long id);

    @PostMapping
    ResponseEntity<PessoaOutputDto> salvar(@RequestBody @Valid PessoaInputDto pessoaInputDto);

    @PutMapping("/{id}")
    ResponseEntity<PessoaOutputDto> atualizar(@PathVariable(name = "id")Long id, @RequestBody @Valid PessoaInputDto pessoaInputDto);

    @DeleteMapping("/{id}")
    ResponseEntity<Void> deletar(@PathVariable(name = "id") Long id);

    @GetMapping("calcular-peso-ideal/{id}")
    ResponseEntity<Double> calcularPesoIdeal(@PathVariable(name = "id") Long id);
}
