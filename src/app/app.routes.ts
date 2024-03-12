import { Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ClientComponent } from './client/client.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './Components/login/login.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { guardGuard } from './guards/guard.guard';

export const routes: Routes = [
    {
        path: "",
        component: LoginComponent,
        title: "Login",
    },

    {
        path: "admin",
        // canActivate:[guardGuard],
        // data: {permisoRol : ['ADMIN'] },
        loadChildren: () => import('./admin/admin.routes').then(ruta => ruta.ADMIN_RUTAS)
    },
    {
        path: 'cliente',
        component: LayoutComponent,
        canActivate:[guardGuard],
        data: {permisoRol : ['USUARIO'] },
        children: [
            { path: '', component: ClientComponent },
        ],
        title: 'Cliente'
    },

    {
        path: "**",
        component: NotFoundComponent,
        title: "Pagina No Encontrada",
    },

];
