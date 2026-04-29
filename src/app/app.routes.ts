import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Login } from './pages/login/login';
import { Rastreio } from './pages/rastreio/rastreio';
export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: Login },
    { path: 'dashboard', component: Dashboard },
    { path: 'rastreio', component: Rastreio },
    { path: '**', redirectTo: 'login' }
];
