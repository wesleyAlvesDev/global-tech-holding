package com.globaltechholding.application.dto.output.pessoa;

import java.time.LocalDate;

public record PessoaOutputDto(
        Long id,
        String nome,
        String cpf,
        LocalDate dataNascimento,
        char sexo,
        Double altura,
        Double peso
) {
}
