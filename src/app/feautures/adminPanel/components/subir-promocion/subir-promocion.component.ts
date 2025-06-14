import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SubirPromocionService } from '../../services/subir-promocion.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-subir-promocion',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './subir-promocion.component.html',
  styleUrl: './subir-promocion.component.css'
})
export class SubirPromocionComponent {
  imagenesSeleccionadas: File[] = [];
  previews: string[] = [];
  urlsSubidas: string[] = [];
  progreso = 0;
  cargando = false;

  constructor(private subirService: SubirPromocionService) {}

  onFilesSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.imagenesSeleccionadas = [];
      this.previews = [];
      for (const file of Array.from(input.files)) {
        if (file.type.startsWith('image/')) {
          this.imagenesSeleccionadas.push(file);
          const reader = new FileReader();
          reader.onload = (e: any) => this.previews.push(e.target.result);
          reader.readAsDataURL(file);
        }
      }
    }
  }

  subirImagenes(): void {
    if (this.imagenesSeleccionadas.length === 0) return;

    this.cargando = true;
    this.progreso = 0;
    let total = this.imagenesSeleccionadas.length;
    let subidas = 0;

    for (const file of this.imagenesSeleccionadas) {
      this.subirService.subirImagen(file).subscribe((r: { url: string, nombre_archivo: string }) => {
        this.urlsSubidas.push(r.url);
        subidas++;
        this.progreso = Math.round((subidas / total) * 100);

        if (subidas === total) {
          this.imagenesSeleccionadas = [];
          this.previews = [];
          this.cargando = false;
        }
      });
    }
  }
}
