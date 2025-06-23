import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

// Interfaz para el modelo Usuario
export interface Usuario {
  id: number;
  nombre: string;
  apellido: string;
  email: string;
  password?: string;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, HttpClientModule],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected title = 'frontend-angular';
  usuarios: Usuario[] = [];
  private apiUrl = 'http://localhost:8080/api/usuarios';
                   
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.cargarUsuarios();
  }

  cargarUsuarios() {
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    };
    
    this.http.get<Usuario[]>(this.apiUrl, { headers }).subscribe({
      next: (data) => {
        console.log('Usuarios cargados:', data);
        this.usuarios = data;
      },
      error: (error) => {
        console.error('Error al cargar usuarios:', error);
      }
    });
  }

  editarUsuario(id: number) {
    console.log('Editar usuario con ID:', id);
    // Implementar lógica de edición
  }

  eliminarUsuario(id: number) {
    if (confirm('¿Estás seguro de que deseas eliminar este usuario?')) {
      this.http.get(`http://localhost:8080/api/delete/${id}`).subscribe({
        next: () => {
          console.log('Usuario eliminado');
          this.cargarUsuarios(); // Recargar la lista
        },
        error: (error) => {
          console.error('Error al eliminar usuario:', error);
        }
      });
    }
  }
}
