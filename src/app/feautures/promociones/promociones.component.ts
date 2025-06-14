import { Component, OnInit ,Output ,EventEmitter } from '@angular/core';
import { SubirPromocionService } from '../adminPanel/services/subir-promocion.service';
import { finalize } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-promociones',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './promociones.component.html',
  styleUrls: ['./promociones.component.css']
})
export class PromocionesComponent implements OnInit {
  promociones: Array<{ url: string; nombre_archivo: string }> = [];
  current = 0;
  animating = false;

   @Output() scrollToFooter = new EventEmitter<void>();

  constructor(private service: SubirPromocionService) {}

  mesActual = new Date().toLocaleDateString('es-ES', { month: 'long' }).toUpperCase();

  ngOnInit(): void {
    this.service.listarPromociones().subscribe({
      next: (data) => {
        this.promociones = data;
      },
      error: (err) => {
        console.error('Error cargando promociones:', err);
      }
    });
  }

   irAlFooter(): void {
    this.scrollToFooter.emit();
  }

 

  
}
