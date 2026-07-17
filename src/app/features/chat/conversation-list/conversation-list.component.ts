// src/app/features/chat/conversation-list/conversation-list.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Conversation } from '../../../models/chat.model';
import { AvatarComponent } from '../../../shared/components/avatar/avatar.component';

@Component({
  selector: 'app-conversation-list',
  standalone: true,
  imports: [DatePipe, AvatarComponent],
  templateUrl: './conversation-list.component.html',
  styleUrl: './conversation-list.component.scss',
})
export class ConversationListComponent {
  @Input({ required: true }) conversations!: Conversation[];
  @Input() selectedConversationId: string | null = null;
  @Output() conversationSelected = new EventEmitter<Conversation>();

  select(conversation: Conversation): void {
    this.conversationSelected.emit(conversation);
  }

  getTimestamp(conversation: Conversation): Date {
    return conversation.lastMessage?.timestamp ?? conversation.updatedAt;
  }
}
