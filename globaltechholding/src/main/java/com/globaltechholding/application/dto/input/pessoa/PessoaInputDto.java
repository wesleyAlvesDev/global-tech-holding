package com.globaltechholding.application.dto.input.pessoa;

import jakarta.validation.constraints.*;

import java.time.LocalDate;

public record PessoaInputDto(
        @NotBlank(message = "Nome é obrigatório")
        String nome,

        @NotBlank(message = "CPF é obrigatório")
        @Pattern(
                regexp = "\\d{11}",
                message = "CPF deve conter 11 dígitos numéricos"
        )
        String cpf,

        @NotNull(message = "Data de nascimento é obrigatória")
        @Past(message = "Data de nascimento deve ser no passado")
        LocalDate dataNascimento,

        @NotNull(message = "Sexo é obrigatório")
        @Pattern(
                regexp = "^[MF]$",
                message = "Sexo inválido, Valores aceitos: 'M' para Masculino ou 'F' para Feminino"
        )
        String sexo,

        @NotNull(message = "Altura é obrigatória")
        @Positive(message = "Altura deve ser maior que zero")
        Double altura,

        @NotNull(message = "Peso é obrigatório")
        @Positive(message = "Peso deve ser maior que zero")
        Double peso) {
}
