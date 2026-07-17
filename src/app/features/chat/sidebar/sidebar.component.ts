// src/app/features/chat/sidebar/sidebar.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Conversation } from '../../../models/chat.model';
import { ConversationListComponent } from '../conversation-list/conversation-list.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [FormsModule, ConversationListComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  @Input({ required: true }) conversations!: Conversation[];
  @Input() selectedConversationId: string | null = null;
  @Output() conversationSelected = new EventEmitter<Conversation>();

  searchTerm = '';

  get filteredConversations(): Conversation[] {
    if (!this.searchTerm.trim()) return this.conversations;
    const term = this.searchTerm.toLowerCase();
    return this.conversations.filter((c) => c.participant.name.toLowerCase().includes(term));
  }

  onConversationSelected(conversation: Conversation): void {
    this.conversationSelected.emit(conversation);
  }
}
