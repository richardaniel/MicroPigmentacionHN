import { Component, OnInit } from '@angular/core';
import { SubirPromocionService } from '../../services/subir-promocion.service';
import { SubirPromocionComponent } from '../../components/subir-promocion/subir-promocion.component';
import { ListadoPromocionesComponent } from '../../components/listado-promociones/listado-promociones.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-adminpanel',
  standalone: true,
  imports: [
    CommonModule,
    SubirPromocionComponent,
    ListadoPromocionesComponent,
  ],
  templateUrl: './adminpanel.component.html',
  styleUrl: './adminpanel.component.css',
})
export class AdminpanelComponent implements OnInit {
  promociones: Array<{ nombre_archivo: string; url: string }> = [];

  constructor(private promoService: SubirPromocionService) {}

  ngOnInit(): void {
    this.cargarPromociones();
  }

  cargarPromociones(): void {
    this.promoService.listarPromociones().subscribe((data) => {
      this.promociones = data;
    });
  }

  eliminar(nombre_archivo: string): void {
    this.promoService.eliminarPromocion(nombre_archivo).subscribe(() => {
      this.cargarPromociones();
    });
  }
}
