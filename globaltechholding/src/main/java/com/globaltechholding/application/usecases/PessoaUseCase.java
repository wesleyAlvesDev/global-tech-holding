package com.globaltechholding.application.usecases;

import com.globaltechholding.application.dto.input.pessoa.PessoaInputDto;
import com.globaltechholding.application.dto.output.pessoa.PessoaOutputDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface PessoaUseCase {

    Page<PessoaOutputDto> buscarTodos(Pageable pageable);
    PessoaOutputDto buscarPorId(Long id);
    PessoaOutputDto salvar(PessoaInputDto pessoaInputDto);
    PessoaOutputDto atualizar(Long id, PessoaInputDto pessoaInputDto);
    void deletar(Long id);

    Double calcularPesoIdeal(Long id);
}
