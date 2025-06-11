import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { FooterComponent } from '../../../../shared/footer/footer.component';
import { HeaderComponent } from '../../../../shared/header/header.component';

@Component({
  selector: 'app-service-gallery',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule ,FooterComponent ,HeaderComponent ],
  templateUrl: './service-gallery.component.html',
  styleUrls: ['./service-gallery.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class ServiceGalleryComponent implements OnInit {
  services: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('assets/services.json').subscribe(data => {
      this.services = data;
    });
  }
}