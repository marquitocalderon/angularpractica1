import { Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { LayoutadminComponent } from './layoutadmin/layoutadmin.component';
import { WordComponent } from './word/word/word.component';

export const ADMIN_RUTAS: Routes = [
    {
        path: '',
        component: LayoutadminComponent,
        children: [
            { path: '', component: AdminComponent, },
            { path: 'usuarios', component: UsuariosComponent , title: 'Usuarios' },
            { path: 'word', component: WordComponent , title: 'Generar Word' },
        ],
        title: 'Admin'
    },
]