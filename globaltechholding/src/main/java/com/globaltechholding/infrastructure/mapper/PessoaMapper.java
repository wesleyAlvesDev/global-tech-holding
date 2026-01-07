package com.globaltechholding.infrastructure.mapper;

import com.globaltechholding.application.dto.input.pessoa.PessoaInputDto;
import com.globaltechholding.application.dto.output.pessoa.PessoaOutputDto;
import com.globaltechholding.domain.entities.Pessoa;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface PessoaMapper {

    Pessoa toEntity(PessoaInputDto pessoaInputDto);
    PessoaOutputDto toDto(Pessoa pessoa);
}
