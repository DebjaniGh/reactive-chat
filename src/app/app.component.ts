import { Component } from '@angular/core';
import { AvatarComponent } from './shared/components/avatar/avatar.component';
import { Message, User } from './models/chat.model';
import { MsgBubbleComponent } from './features/chat/msg-bubble/msg-bubble.component';
import { MessageInputComponent } from './features/chat/msg-inp/msg-inp.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AvatarComponent, MsgBubbleComponent, MessageInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'reactive-chat';

  user: User = {
    id: '1',
    name: 'Debjani Ghosh',
    avatarUrl: null,
    status: 'online',
    lastSeen: null,
  };

  testMessages: Message[] = [
    {
      id: 'm1',
      conversationId: 'conv-1',
      senderId: 'user-2',
      type: 'text',
      content: "Hey! How's the project going?",
      timestamp: new Date(Date.now() - 30 * 60000),
      status: 'read',
      isOwn: false,
    },
    {
      id: 'm2',
      conversationId: 'conv-1',
      senderId: 'user-1',
      type: 'text',
      content: 'Great! Just finished the RxJS module 🎉',
      timestamp: new Date(Date.now() - 29 * 60000),
      status: 'read',
      isOwn: true,
    },
    {
      id: 'm3',
      conversationId: 'conv-1',
      senderId: 'user-2',
      type: 'text',
      content: 'Nice! Can you share the demo link?',
      timestamp: new Date(Date.now() - 28 * 60000),
      status: 'read',
      isOwn: false,
    },
    {
      id: 'm4',
      conversationId: 'conv-1',
      senderId: 'user-1',
      type: 'text',
      content: 'Sure — reactive-lab.vercel.app',
      timestamp: new Date(Date.now() - 27 * 60000),
      status: 'delivered',
      isOwn: true,
    },
    {
      id: 'm5',
      conversationId: 'conv-1',
      senderId: 'user-1',
      type: 'text',
      content: 'Let me know what you think!',
      timestamp: new Date(Date.now() - 1 * 60000),
      status: 'sending',
      isOwn: true,
    },
  ];

  messages: Message[] = [
    {
      id: 'm1',
      conversationId: 'conv-1',
      senderId: 'user-2',
      type: 'text',
      content: "Hey! How's the project going?",
      timestamp: new Date(Date.now() - 30 * 60000),
      status: 'read',
      isOwn: false,
    },
    {
      id: 'm2',
      conversationId: 'conv-1',
      senderId: 'user-1',
      type: 'text',
      content: 'Great! Just finished the RxJS module 🎉',
      timestamp: new Date(Date.now() - 29 * 60000),
      status: 'read',
      isOwn: true,
    },
  ];

  onSend(text: string): void {
    const newMsg: Message = {
      id: `msg-${Date.now()}`,
      conversationId: 'conv-1',
      senderId: 'user-1',
      type: 'text',
      content: text,
      timestamp: new Date(),
      status: 'sent',
      isOwn: true,
    };
    this.messages = [...this.messages, newMsg];
  }
}
