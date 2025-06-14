import { Component, AfterViewInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import Swal from 'sweetalert2';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-reservation',
  standalone: true,
  imports: [HeaderComponent, FooterComponent , ReactiveFormsModule],
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.css'
})
export class ReservationComponent implements AfterViewInit {

  private http = inject(HttpClient);
    private fb = inject(FormBuilder);


  formulario!: FormGroup;
  direccion = `21102 San Pedro Sula, Cortés`;


  ngAfterViewInit(): void {
    this.viewMap();
  }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required],
      servicio: ['', Validators.required],
      fecha: ['', Validators.required]
    });
  }

  viewMap(): void {
    
    const apiKey = environment.opencageApiKey;
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(this.direccion)}&key=${apiKey}`;

    this.http.get<any>(url).subscribe({
      next: (data) => {
        const { lat, lng } = data.results[0].geometry;
        const iframe = document.getElementById('mapFrame') as HTMLIFrameElement;
        iframe.src = `https://www.openstreetmap.org/export/embed.html?bbox=${lng - 0.01},${lat - 0.01},${lng + 0.01},${lat + 0.01}&layer=mapnik&marker=${lat},${lng}`;
      },
      error: () => {
        const iframe = document.getElementById('mapFrame') as HTMLIFrameElement;
        iframe.src = 'https://www.openstreetmap.org';
      }
    });
  }

onSubmit(): void {
    if (this.formulario.invalid) {
      Swal.fire({
        icon: 'warning',
        title: 'Formulario incompleto',
        text: 'Por favor completa todos los campos correctamente.',
        confirmButtonColor: '#f59e0b'
      });
      return;
    }

    const { nombre, email, telefono, servicio, fecha } = this.formulario.value;

    Swal.fire({
      icon: 'question',
      title: '¿Estás seguro?',
      html: `
        Estás haciendo una reservación para el servicio <strong>${servicio}</strong><br>
        en ${this.direccion}<br>
        a la fecha y hora seleccionada: <strong>${fecha}</strong><br><br>
        <strong>Nombre:</strong> ${nombre}<br>
        <strong>Email:</strong> ${email}<br>
        <strong>Teléfono:</strong> ${telefono}
      `,
      showCancelButton: true,
      confirmButtonText: 'Sí, confirmar',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#10b981',
      cancelButtonColor: '#ef4444'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'info',
          title: 'Reservación enviada',
          text: 'Pronto recibirás un correo con la confirmación y los detalles.',
          confirmButtonColor: '#3b82f6'
        });
        this.formulario.reset();
      }
    });
  }


}
