import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { trigger, transition, style, animate } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-reservation',
  standalone:true,
  imports: [
    HeaderComponent,
    FooterComponent,
    CommonModule
  ],
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.css',
   animations: [
    trigger('fadeIn', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('1s ease-out', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class ReservationComponent {

}
