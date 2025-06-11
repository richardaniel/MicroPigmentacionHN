import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImageCurtainComponent } from "./image-curtain/image-curtain.component";




@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
  title = 'Micropigmentacion_HN';


  customSlides = [
  {
    url: 'assets/1.jpg',
    title: 'Mi Título 1',
    description: 'Mi descripción personalizada',
    bgClass: 'bg-gradient-to-r from-purple-500/90 to-pink-800/90'
  },
  {
    url: 'assets/2.jpg',
    title: 'Mi Título 2',
    description: 'Otra descripción personalizada',
    bgClass: 'bg-gradient-to-r from-green-500/90 to-blue-800/90'
  },
  {
    url: 'assets/3.jpg',
    title: 'Mi Título 3',
    description: 'Descripción adicional para la tercera imagen',
    bgClass: 'bg-gradient-to-r from-yellow-500/90 to-red-800/90'
  }
  // ...más slides
];

}
