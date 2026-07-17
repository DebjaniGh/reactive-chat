import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { AvatarComponent } from './shared/components/avatar/avatar.component';
// import { Conversation, Message, User } from './models/chat.model';
// import { MsgBubbleComponent } from './features/chat/msg-bubble/msg-bubble.component';
// import { MessageInputComponent } from './features/chat/msg-inp/msg-inp.component';
// import { ChatWindowComponent } from './features/chat/chat-window/chat-window.component';
// import { ConversationListComponent } from './features/chat/conversation-list/conversation-list.component';
// import { SidebarComponent } from './features/chat/sidebar/sidebar.component';
// import { HeaderComponent } from './features/chat/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    // AvatarComponent,
    // MsgBubbleComponent, MessageInputComponent,
    // ChatWindowComponent,
    //  ConversationListComponent,
    //  SidebarComponent,
    // HeaderComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  // title = 'reactive-chat';
  // selectedConvoId: string | null = null;
  // user: User = {
  //   id: '1',
  //   name: 'Debjani Ghosh',
  //   avatarUrl: null,
  //   status: 'online',
  //   lastSeen: null,
  // };
  // testConversation: Conversation[] = [
  //   {
  //     id: 'conv-1',
  //     participant: {
  //       id: 'user-2',
  //       name: 'Alice Chen',
  //       avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=AliceChen',
  //       status: 'online',
  //       lastSeen: null,
  //     },
  //     lastMessage: {
  //       id: 'm5',
  //       conversationId: 'conv-1',
  //       senderId: 'user-2',
  //       type: 'text',
  //       content: 'This is really impressive! Love the scan demo 🎉',
  //       timestamp: new Date(Date.now() - 25 * 60000),
  //       status: 'read',
  //       isOwn: false,
  //     },
  //     unreadCount: 2,
  //     updatedAt: new Date(),
  //   },
  //   {
  //     id: 'conv-2',
  //     participant: {
  //       id: 'user-3',
  //       name: 'Bob Smith',
  //       avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=BobSmith',
  //       status: 'online',
  //       lastSeen: null,
  //     },
  //     lastMessage: {
  //       id: 'm9',
  //       conversationId: 'conv-2',
  //       senderId: 'user-1',
  //       type: 'text',
  //       content: 'Agreed. No more *ngIf and *ngFor directives',
  //       timestamp: new Date(Date.now() - 110 * 60000),
  //       status: 'read',
  //       isOwn: true,
  //     },
  //     unreadCount: 0,
  //     updatedAt: new Date(),
  //   },
  //   {
  //     id: 'conv-3',
  //     participant: {
  //       id: 'user-4',
  //       name: 'Carol Williams',
  //       avatarUrl: null,
  //       status: 'offline',
  //       lastSeen: new Date(Date.now() - 60 * 60000),
  //     },
  //     lastMessage: {
  //       id: 'm13',
  //       conversationId: 'conv-3',
  //       senderId: 'user-1',
  //       type: 'text',
  //       content: "I'll be there!",
  //       timestamp: new Date(Date.now() - 1420 * 60000),
  //       status: 'read',
  //       isOwn: true,
  //     },
  //     unreadCount: 0,
  //     updatedAt: new Date(),
  //   },
  //   {
  //     id: 'conv-4',
  //     participant: {
  //       id: 'user-5',
  //       name: 'David Brown',
  //       avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DavidBrown',
  //       status: 'away',
  //       lastSeen: null,
  //     },
  //     lastMessage: {
  //       id: 'm17',
  //       conversationId: 'conv-4',
  //       senderId: 'user-5',
  //       type: 'text',
  //       content: 'Meeting at 3 PM today',
  //       timestamp: new Date(Date.now() - 180 * 60000),
  //       status: 'read',
  //       isOwn: false,
  //     },
  //     unreadCount: 1,
  //     updatedAt: new Date(),
  //   },
  // ];
  // testMessages: Message[] = [
  //   {
  //     id: 'm1',
  //     conversationId: 'conv-1',
  //     senderId: 'user-2',
  //     type: 'text',
  //     content: "Hey! How's the project going?",
  //     timestamp: new Date(Date.now() - 30 * 60000),
  //     status: 'read',
  //     isOwn: false,
  //   },
  //   {
  //     id: 'm2',
  //     conversationId: 'conv-1',
  //     senderId: 'user-1',
  //     type: 'text',
  //     content: 'Great! Just finished the RxJS module 🎉',
  //     timestamp: new Date(Date.now() - 29 * 60000),
  //     status: 'read',
  //     isOwn: true,
  //   },
  //   {
  //     id: 'm3',
  //     conversationId: 'conv-1',
  //     senderId: 'user-2',
  //     type: 'text',
  //     content: 'Nice! Can you share the demo link?',
  //     timestamp: new Date(Date.now() - 28 * 60000),
  //     status: 'read',
  //     isOwn: false,
  //   },
  //   {
  //     id: 'm4',
  //     conversationId: 'conv-1',
  //     senderId: 'user-1',
  //     type: 'text',
  //     content: 'Sure — reactive-lab.vercel.app',
  //     timestamp: new Date(Date.now() - 27 * 60000),
  //     status: 'delivered',
  //     isOwn: true,
  //   },
  //   {
  //     id: 'm5',
  //     conversationId: 'conv-1',
  //     senderId: 'user-1',
  //     type: 'text',
  //     content: 'Let me know what you think!',
  //     timestamp: new Date(Date.now() - 1 * 60000),
  //     status: 'sending',
  //     isOwn: true,
  //   },
  // ];
  // messages: Message[] = [
  //   {
  //     id: 'm1',
  //     conversationId: 'conv-1',
  //     senderId: 'user-2',
  //     type: 'text',
  //     content: "Hey! How's the project going?",
  //     timestamp: new Date(Date.now() - 30 * 60000),
  //     status: 'read',
  //     isOwn: false,
  //   },
  //   {
  //     id: 'm2',
  //     conversationId: 'conv-1',
  //     senderId: 'user-1',
  //     type: 'text',
  //     content: 'Great! Just finished the RxJS module 🎉',
  //     timestamp: new Date(Date.now() - 29 * 60000),
  //     status: 'read',
  //     isOwn: true,
  //   },
  // ];
  // onSend(text: string): void {
  //   const newMsg: Message = {
  //     id: `msg-${Date.now()}`,
  //     conversationId: 'conv-1',
  //     senderId: 'user-1',
  //     type: 'text',
  //     content: text,
  //     timestamp: new Date(),
  //     status: 'sent',
  //     isOwn: true,
  //   };
  //   this.testMessages = [...this.testMessages, newMsg];
  // }
  // onConvoSelect(convo: Conversation): void {
  //   this.selectedConvoId = convo.id;
  // }
  // onLogout(): void {
  //   console.log('Logout clicked');
  // }
}
