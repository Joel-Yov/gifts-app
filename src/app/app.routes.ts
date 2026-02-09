import { Routes } from '@angular/router';
import DashboardPages from './gifts/pages/dashboard-pages/dashboard-pages';

export const routes: Routes = [
    {
        /**
         * DIFERENCIAS ENTRE EL loadComponent: y component: 
         * 
         * 1.- component: carga este componente apenas abra la app
         * 2.- loadComponent: no descargues este codigo hasta que el usuario haga click en la ruta
         */
        path:'dashboard',
        loadComponent: () => import('./gifts/pages/dashboard-pages/dashboard-pages'),
        children: [
            {
                path: 'trending',
                loadComponent: () => import('./gifts/pages/trending/trending'),
            }, 
            {
                path: 'search',
                loadComponent: () => import('./gifts/pages/search/search'),
            },
            {
                path: '**',
                redirectTo: 'trending'
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'dashboard'
    }
];
