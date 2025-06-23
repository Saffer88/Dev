package com.CRUD.backend.models;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "usuarios") 
@ToString @EqualsAndHashCode
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Setter @Getter @Column(name = "id") 
    private int id;

    @Setter @Getter @Column(name = "nombre")
    private String nombre;

    @Setter @Getter @Column(name = "apellido")
    private String apellido;

    @Setter @Getter @Column(name = "email")
    private String email;

    @Setter @Getter @Column(name = "password")
    private String password;

    public Usuario() {
        this.id = 0; 
        this.nombre = "";       
        this.apellido = "";
        this.email = "";
        this.password = "";
        
    }

    public Usuario(int id, String nombre, String apellido, String email, String password) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.password = password;
    }

  

}
