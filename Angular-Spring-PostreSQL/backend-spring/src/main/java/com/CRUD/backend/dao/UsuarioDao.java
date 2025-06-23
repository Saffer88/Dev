package com.CRUD.backend.dao;
import java.util.List;

import com.CRUD.backend.models.Usuario;

public interface UsuarioDao {

    List<Usuario> getUsuarios();

    Usuario getUsuario(int id);

    void deleteUsuario(int id);

    void createUsuario(Usuario usuario);
}
