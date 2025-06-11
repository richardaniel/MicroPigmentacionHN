import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'/inicio',
        pathMatch:'full'
    },
    {
        path:'inicio',
        loadComponent : ()=> import('../app/image-curtain/image-curtain.component').then(m=>m.ImageCurtainComponent)
    },
    {
        path:'reservacion-cita',
        loadComponent : ()=> import('../app/feautures/reservation/reservation.component').then(m=>m.ReservationComponent)
    },
    {
        path: 'services', 
        loadComponent:()=> import('../app/feautures/business-services/views/service-gallery/service-gallery.component').then(m=>m.ServiceGalleryComponent)
    },
    { path: '**', redirectTo: '' }
];
