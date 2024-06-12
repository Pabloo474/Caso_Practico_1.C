import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://34.232.152.61'; // Cambia esto por la URL de tu API Gateway

  constructor(private http: HttpClient) { }

  // Crear
  createItem(item: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/create`, item);
  }

  // Leer (obtener todos los ítems)
  getItems(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/items`);
  }

  // Leer (obtener un ítem por id)
  getItem(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/items/${id}`);
  }

  // Actualizar
  updateItem(id: number, item: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/update/${id}`, item);
  }

  // Eliminar
  deleteItem(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }
}
