import { Component } from '@angular/core';
import { AvatarComponent } from './shared/components/avatar/avatar.component';
import { User } from './models/chat.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AvatarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'reactive-chat';

  user: User = {
    id: '1',
    name: 'Debjani Ghosh',
    avatarUrl: null,
    isOnline: true,
    lastSeen: null,
  };
}
