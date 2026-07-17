// src/app/features/chat/chat-shell/chat-shell.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User, Message, Conversation } from '../../../models/chat.model';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ChatWindowComponent } from '../chat-window/chat-window.component';
import { MOCK_CURRENT_USER, MOCK_CONVERSATIONS, MOCK_MESSAGES } from '../../../mock/mock-data';

@Component({
  selector: 'app-chat-shell',
  standalone: true,
  imports: [HeaderComponent, SidebarComponent, ChatWindowComponent],
  templateUrl: './chat-shell.component.html',
  styleUrl: './chat-shell.component.scss',
})
export class ChatShellComponent {
  currentUser: User = MOCK_CURRENT_USER;
  conversations: Conversation[] = MOCK_CONVERSATIONS;
  messagesMap: Record<string, Message[]> = MOCK_MESSAGES;

  selectedConversation: Conversation | null = this.conversations[0] ?? null;

  get currentMessages(): Message[] {
    if (!this.selectedConversation) return [];
    return this.messagesMap[this.selectedConversation.id] ?? [];
  }

  constructor(private router: Router) {}

  onConversationSelected(conversation: Conversation): void {
    this.selectedConversation = conversation;
  }

  onMessageSent(text: string): void {
    if (!this.selectedConversation) return;

    const newMessage: Message = {
      id: `msg-${Date.now()}`,
      conversationId: this.selectedConversation.id,
      senderId: this.currentUser.id,
      type: 'text',
      content: text,
      timestamp: new Date(),
      status: 'sent',
      isOwn: true,
    };

    // Append to messages map
    const convoId = this.selectedConversation.id;
    this.messagesMap[convoId] = [...(this.messagesMap[convoId] ?? []), newMessage];

    // Update lastMessage on the conversation
    this.selectedConversation.lastMessage = newMessage;
  }

  onLogout(): void {
    this.router.navigate(['/login']);
  }
}
