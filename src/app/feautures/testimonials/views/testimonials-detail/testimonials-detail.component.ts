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
      name: 'Aryany Ayala',
      text: 'Me encantó la atención increíble , son unos artistas , te evalúan todo desde que tipo de piel edad , toman su tiempo para hacerte la evaluación , 100 recomendando mis cejitas están perfectas.',
      image: '',
      position: ''
    },
    {
      name: 'EL Vis',
      text: 'Esto es una manera de poder sentirse en mas confianza contigo mismo y tu apariencia física. Una única experiencia en Micropigmentación Honduras, La recomiendo al 1,000 por 1,000. Muy satisfecho por el trabajo elaborado por el profesional quien ejecuto mi procedimiento en micropigmentación.',
      image: '',
      position: ''
    },
    {
      name: 'Estrellita Ramirez',
      text: 'Hacen excelente trabajo profesional, ético.. muy buen trato Asia los pacientes .hoy me fui aser mi retoque y quede encantada. Nilo piensen para ir y hacerse unas cejas bien hechas con profesionales  gracias.',
      image: '',
      position: ''
    },
    {
      name: 'Nilser Pineda',
      text: `Hoy fui atendida por la mejor en Micropigmentación Honduras, y me atrevo a hacerlo público porque 1. Soy exigente y conozco la calidad.
             Gracias primero por cambiar completamente mi rostro su buen trabajo se nota, y segundo gracias por explicar y aclarar todas mis dudas, gracias por la confianza que transmiten. De verdad déjeme felicitarlos por ser los mejores.
            Sobre todo supo tomar su tiempo para que yo saliera satisfecha`,
      image: '',
      position: ''
    },
   
  ];

  constructor() {}

  ngOnInit(): void {}
}