import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-image-gallery',
  standalone: true,
  imports: [CommonModule, RouterModule], // Add RouterModule
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css'],
  animations: [
    trigger('cardAnimation', [
      state('active', style({ transform: 'translateX(0) scale(1)', opacity: 1, zIndex: 2 })),
      state('prev', style({ transform: 'translateX(-120%) scale(0.8)', opacity: 0.6 })),
      state('next', style({ transform: 'translateX(120%) scale(0.8)', opacity: 0.6 })),
      transition('* <=> *', animate('0.8s cubic-bezier(0.645, 0.045, 0.355, 1)'))
    ])
  ]
})
export class ImageGalleryComponent implements OnInit, OnDestroy {
  services = [
    {
      name: 'Cejas Hair Stroke',
      description: 'Técnica de microblading para cejas hiperrealistas con efecto pelo a pelo.',
      price: '3,500 LPS',
      promo: '4,600 LPS en Gira',
      image: 'assets/1.png'
    },
    {
      name: 'Relleno de Labios',
      description: 'Color permanente para labios con acabado natural y duradero',
      price: '4,500 LPS',
      promo: '5,600 LPS en Gira',
      image: 'assets/2.png'
    },
    {
      name: 'Delineado Soft Liner',
      description: 'Técnica suave para un delineado de ojos natural',
      price: '3,000 LPS',
      promo: '3,600 LPS en Gira',
      image: 'assets/3.png'
    },
    {
      name: 'Extensiones Volumen',
      description: 'Pestañas voluminosas con efecto dramático',
      price: '1,500 LPS',
      promo: '2,000 LPS en Gira',
      image: 'assets/4.png'
    },
    {
      name: 'Lifting de Pestañas',
      description: 'Levantamiento profesional para mirada más abierta',
      price: '600 LPS',
      promo: '1,000 LPS en Gira',
      image: 'assets/5.png'
    }
  ];

  currentIndex = 0;
  private intervalId: any;
  private reverse = false;

  ngOnInit() {
    this.startAutoRotation();
  }

  ngOnDestroy() {
    this.stopAutoRotation();
  }

  startAutoRotation() {
    this.intervalId = setInterval(() => {
      if (!this.reverse) {
        this.currentIndex = (this.currentIndex + 1) % this.services.length;
        if (this.currentIndex === this.services.length - 1) {
          setTimeout(() => (this.reverse = true), 3000);
        }
      } else {
        this.currentIndex = (this.currentIndex - 1 + this.services.length) % this.services.length;
        if (this.currentIndex === 0) {
          setTimeout(() => (this.reverse = false), 3000);
        }
      }
    }, 2000);
  }

  stopAutoRotation() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  resumeAutoRotation() {
    if (!this.intervalId) {
      this.startAutoRotation();
    }
  }
}