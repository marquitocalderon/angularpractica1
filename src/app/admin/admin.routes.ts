import { Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { LayoutadminComponent } from './layoutadmin/layoutadmin.component';

export const ADMIN_RUTAS: Routes = [
    {
        path: '',
        component: LayoutadminComponent,
        children: [
            { path: '', component: AdminComponent, },
            { path: 'usuarios', component: UsuariosComponent , title: 'Usuarios' },
        ],
        title: 'Admin'
    },
]