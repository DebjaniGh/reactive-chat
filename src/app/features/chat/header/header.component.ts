// src/app/features/chat/header/header.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../../models/chat.model';
import { AvatarComponent } from '../../../shared/components/avatar/avatar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AvatarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input({ required: true }) currentUser!: User;
  @Output() logoutClicked = new EventEmitter<void>();
}
