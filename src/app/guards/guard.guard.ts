import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

export const guardGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const perfilRequerido = route.data['permisoRol'];
  const decodedToken = authService.decodeToken();

  if (decodedToken) {
    if (decodedToken.role.includes('ADMIN') && perfilRequerido.includes('ADMIN')) {
      return true; // Permitir acceso si el usuario es administrador y se requiere el rol de administrador
    } else if (decodedToken.role.includes('USUARIO') && perfilRequerido.includes('USUARIO')) {
      return true; // Permitir acceso si el usuario es usuario normal y se requiere el rol de usuario normal
    } else {
      router.navigateByUrl('/'); // Redirigir al usuario a la página de inicio si no tiene los permisos necesarios
      return false;
    }
  } else {
    router.navigateByUrl('/'); // Redirigir al usuario a la página de inicio si no está autenticado
    return false;
  }
}