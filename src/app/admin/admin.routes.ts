import { Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { AdminComponent } from './admin.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

export const ADMIN_RUTAS: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', component: AdminComponent, },
            { path: 'usuarios', component: UsuariosComponent , title: 'Usuarios' },
        ],
        title: 'Admin'
    },
]