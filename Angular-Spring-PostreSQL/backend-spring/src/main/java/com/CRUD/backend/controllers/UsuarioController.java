package com.CRUD.backend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.CRUD.backend.dao.UsuarioDao;
import com.CRUD.backend.models.Usuario;




@RestController
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
public class UsuarioController {

    @Autowired
    private UsuarioDao usuarioDao;


    @GetMapping(value = "/api/usuarios/{id}")
    public Usuario getUsuario(@PathVariable int id) {
        return usuarioDao.getUsuario(id);
    }

    
    @GetMapping(value = "/api/usuarios")
    public List<Usuario> getUsuarios() {
        return usuarioDao.getUsuarios();
    }

  
    @RequestMapping(value = "/api/delete/{id}", method=RequestMethod.GET)  
    public void deleteUsuario(@PathVariable int id) {
        usuarioDao.deleteUsuario(id);
    }

    @RequestMapping(value = "/api/createUsuarios", method=RequestMethod.POST)
    public void createUsuario(@RequestBody Usuario usuario) {
        usuarioDao.createUsuario(usuario);
    }

    @GetMapping(value = "/api/updateUsuarios")
    public Usuario updateUsuario() {
        Usuario user = new Usuario();
        
        //user.setId(1);
        user.setNombre("John");
        user.setApellido("Doe");
        user.setEmail("test@mail.com");
        user.setPassword("password123");

        return user;
    }
}
