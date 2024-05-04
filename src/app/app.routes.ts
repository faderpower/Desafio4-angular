import { Routes } from '@angular/router';
import { DescripcionComponent } from "./descripcion/descripcion.component";
import { HeaderComponent } from "./header/header.component";
export const routes: Routes = [
    {
        path:'home', component: HeaderComponent   
    },
    {
        path:'descripcion/:id', component: DescripcionComponent
    }
];
