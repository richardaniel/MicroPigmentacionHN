import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials-detail.component.html',
  styleUrl: './testimonials-detail.component.css'
})
export class TestimonialsDetailComponent implements OnInit {
  reviews = [
    {
      name: 'Ana Rodríguez',
      text: 'La micropigmentación de cejas cambió mi vida. Después de años de rellenarlas cada mañana, ahora me despierto con unas cejas perfectas. El trabajo fue tan natural que hasta mi estilista preguntó si eran mis cejas reales.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&auto=format&fit=crop',
      position: 'Paciente de cejas'
    },
    {
      name: 'Carlos Méndez',
      text: 'Como sobreviviente de cáncer, la micropigmentación capilar me devolvió la confianza. El realismo de cada pelo es increíble. Nadie puede creer que no es mi cabello natural cuando me ven sin pañuelo.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop',
      position: 'Paciente oncológico'
    },
    {
      name: 'María González',
      text: 'Mis labios siempre fueron muy pálidos. La micropigmentación me dio un color natural que no desaparece. Después de 2 años, todavía mantiene un tono rosado perfecto. ¡Vale cada centavo!',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop',
      position: 'Paciente de labios'
    },
    {
      name: 'Laura Sánchez',
      text: 'El efecto sombra de ojos permanente ha sido mi mejor inversión de belleza. Ahorro 15 minutos cada mañana y mi maquillaje siempre luce impecable, incluso después de nadar o hacer ejercicio.',
      image: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?w=200&auto=format&fit=crop',
      position: 'Paciente de ojos'
    },
   
  ];

  constructor() {}

  ngOnInit(): void {}
}