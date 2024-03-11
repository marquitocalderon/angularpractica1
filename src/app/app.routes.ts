import { Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ClientComponent } from './client/client.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './Components/login/login.component';

export const routes: Routes = [
    {
        path: "",
        component: LoginComponent,
        title: "Login",
    },

    {
        path: 'admin',
        component: LayoutComponent,
        children: [
            { path: '', component: AdminComponent },
        ],
        title: 'Admin'
    },
    {
        path: 'cliente',
        component: LayoutComponent,
        children: [
            { path: '', component: ClientComponent },
        ],
        title: 'Cliente'
    }

];
