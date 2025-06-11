import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import AOS from "aos";
import { ImageGalleryComponent } from '../feautures/business-services/components/image-gallery/image-gallery.component';
import { ChatWindowComponent } from '../shared/chat-window/chat-window.component';
import { TestimonialsDetailComponent } from '../feautures/testimonials/views/testimonials-detail/testimonials-detail.component';


@Component({
  selector: 'app-image-curtain',
  imports: [
    CommonModule,
    RouterLink,
    HeaderComponent ,
    FooterComponent,
    ImageGalleryComponent,
    ChatWindowComponent,
    TestimonialsDetailComponent

  ],
  templateUrl: './image-curtain.component.html',
  styleUrls: ['./image-curtain.component.css']
})
export class ImageCurtainComponent implements OnInit {
  slides = [
    {
      image: 'assets/5.png',
      title: 'Belleza y pigmentación profesional',
      subtitle: 'Realza tu estilo con tratamientos personalizados para tu piel y cabello.',
    },
    {
      image: 'assets/12.png',
      title: 'Tratamientos de pigmentación facial',
      subtitle: 'Dale vida a tu rostro con pigmentación natural y duradera.',
    },
    {
      image: 'assets/6.png',
      title: 'Cejas perfectas, mirada impactante',
      subtitle: 'Microblading y técnicas avanzadas para una definición impecable.',
    },
    {
      image: 'assets/13.png',
      title: 'Cuida tu piel y luce radiante',
      subtitle: 'Expertos en cuidado facial y corporal para resultados visibles.',
    },
  ];


 

  currentIndex = 0;
  nextIndex = 1;
  isAnimating = false;
  animationDuration = 1000; // 1s para la cortina

  ngOnInit(): void {

    AOS.init();

    setInterval(() => {
      this.startAnimation();
    }, 7000);
  }

  startAnimation() {
    this.isAnimating = true;
    setTimeout(() => {
      this.currentIndex = this.nextIndex;
      this.nextIndex = (this.nextIndex + 1) % this.slides.length;
      this.isAnimating = false;
    }, this.animationDuration);
  }


  moveCarousel(direction: string): void {
    const carousel = document.getElementById('carousel');
    if (carousel) {
      if (direction === 'left') {
        carousel.style.transform = 'translateX(-100%)';
      } else {
        carousel.style.transform = 'translateX(0)';
      }
    }
  }
}
