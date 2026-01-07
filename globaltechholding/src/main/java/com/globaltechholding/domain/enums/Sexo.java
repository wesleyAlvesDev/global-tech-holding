package com.globaltechholding.domain.enums;

import com.globaltechholding.infrastructure.exception.SexoInvalidoException;

public enum Sexo {
    M("Masculino"),
    F("Feminino");

    private final String descricao;

    Sexo(String descricao) {
        this.descricao = descricao;
    }

    public String getDescricao() {
        return descricao;
    }

    public static Sexo fromString(String value) {
        try {
            return Sexo.valueOf(value.trim().toUpperCase());
        } catch (Exception e) {
            throw new SexoInvalidoException( "Sexo inválido: " + value +
                    ". Valores aceitos: M para Masculino ou F para Feminino");
        }
    }
}
