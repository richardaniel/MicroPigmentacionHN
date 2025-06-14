import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listado-promociones',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listado-promociones.component.html',
  styleUrl: './listado-promociones.component.css',
})
export class ListadoPromocionesComponent {
  @Input() promociones: Array<{ nombre_archivo: string; url: string }> = [];
  @Output() eliminar = new EventEmitter<string>();

  eliminarImagen(nombre_archivo: string): void {
    Swal.fire({
      title: '¿Eliminar promoción?',
      text: 'Esta acción no se puede deshacer.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.eliminar.emit(nombre_archivo);
        Swal.fire('Eliminado', 'La imagen ha sido eliminada.', 'success');
      }
    });
  }
}
