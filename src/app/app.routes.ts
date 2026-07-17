import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadComponent: () => import('./features/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'chat',
    loadComponent: () =>
      import('./features/chat/chat-shell/chat-shell.component').then((m) => m.ChatShellComponent),
  },
  { path: '**', redirectTo: 'login' },
];
