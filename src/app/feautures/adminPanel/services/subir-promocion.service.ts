import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SubirPromocionService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  subirImagen(file: File): Observable<{ url: string; nombre_archivo: string }> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<{ url: string; nombre_archivo: string }>(
      `${this.baseUrl}/subir-promocion/`,
      formData
    );
  }

  listarPromociones(): Observable<Array<{ url: string; nombre_archivo: string }>> {
    return this.http.get<Array<{ url: string; nombre_archivo: string }>>(
      `${this.baseUrl}/listar-promociones/`
    );
  }

  eliminarPromocion(nombre_archivo: string): Observable<{ mensaje: string }> {
    return this.http.delete<{ mensaje: string }>(
      `${this.baseUrl}/eliminar-promocion/`,
      {
        body: { nombre_archivo }
      }
    );
  }
}
