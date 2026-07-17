// src/app/features/login/login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MOCK_CURRENT_USER } from '../../mock/mock-data';
import { User } from '../../models/chat.model';
import { AvatarComponent } from '../../shared/components/avatar/avatar.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [AvatarComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  currentUser: User = MOCK_CURRENT_USER;

  constructor(private router: Router) {}

  login(): void {
    this.router.navigate(['/chat']);
  }
}
