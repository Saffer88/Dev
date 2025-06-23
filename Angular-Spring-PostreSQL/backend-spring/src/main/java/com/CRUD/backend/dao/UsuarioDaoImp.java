package com.CRUD.backend.dao;

import java.util.List;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.CRUD.backend.models.Usuario;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;

@Repository // Conexion bd
@Transactional // querys
public class UsuarioDaoImp implements UsuarioDao {

    @PersistenceContext
    EntityManager entityManager;


    @Override
    public List<Usuario> getUsuarios() {
        String query = "FROM Usuario";
        List<Usuario> usuarios = entityManager.createQuery(query, Usuario.class).getResultList();
        return usuarios;
      
    }

    @Override
    public Usuario getUsuario(int id) {
        Usuario usuario = entityManager.find(Usuario.class, id);
        return usuario;
    }

    @Override
    public void deleteUsuario(int id) {
        Usuario usuario = entityManager.find(Usuario.class, id);
         entityManager.remove(usuario);
    }

    @Override
    public void createUsuario(Usuario usuario) {
         entityManager.merge(usuario);
    }
}
