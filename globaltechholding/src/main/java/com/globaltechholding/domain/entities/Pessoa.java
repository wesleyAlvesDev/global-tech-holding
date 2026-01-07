package com.globaltechholding.domain.entities;

import com.globaltechholding.domain.enums.Sexo;
import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "pessoa")
public class Pessoa {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nome", nullable = false)
    private String nome;

    @Column(name = "cpf", unique = true, nullable = false)
    private String cpf;

    @Column(name = "data_nascimento", nullable = false)
    private LocalDate dataNascimento;

    @Column(name = "sexo", length = 1, nullable = false)
    private char sexo;

    @Column(name = "altura", nullable = false)
    private Double altura;

    @Column(name = "peso", nullable = false)
    private Double peso;

    public Pessoa() {
    }

    public Pessoa(String nome, String cpf, LocalDate dataNascimento, char sexo, Double altura, Double peso) {
        this.nome = nome;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
        this.sexo = sexo;
        this.altura = altura;
        this.peso = peso;
    }

    public Pessoa(Long id, String nome, String cpf, LocalDate dataNascimento, char sexo, Double altura, Double peso) {
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
        this.sexo = sexo;
        this.altura = altura;
        this.peso = peso;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public LocalDate getDataNascimento() {
        return dataNascimento;
    }

    public void setDataNascimento(LocalDate dataNascimento) {
        this.dataNascimento = dataNascimento;
    }

    public char getSexo() {
        return sexo;
    }

    public void setSexo(char sexo) {
        this.sexo = sexo;
    }

    public Double getAltura() {
        return altura;
    }

    public void setAltura(Double altura) {
        this.altura = altura;
    }

    public Double getPeso() {
        return peso;
    }

    public void setPeso(Double peso) {
        this.peso = peso;
    }

    public Double calcularPesoIdeal() {
        final double FATOR_HOMEM = 72.7;
        final double SUBTRAENDO_HOMEM = 58.0;

        final double FATOR_MULHER = 62.1;
        final double SUBTRAENDO_MULHER = 44.7;

        double pesoIdeal = switch (Sexo.fromString(String.valueOf(sexo))) {
            case M -> (FATOR_HOMEM * altura) - SUBTRAENDO_HOMEM;
            case F -> (FATOR_MULHER * altura) - SUBTRAENDO_MULHER;
        };

        return Math.round(pesoIdeal * 100.0) / 100.0;
    }
}
