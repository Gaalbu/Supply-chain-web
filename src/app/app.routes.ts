import { Routes } from '@angular/router';
import { Rastreio } from './pages/rastreio/rastreio';
export const routes: Routes = [
    { path: '', redirectTo: 'rastreio', pathMatch: 'full' },
    { path: 'rastreio', component: Rastreio }
];
