// src/app/features/chat/chat-window/chat-window.component.ts
import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  AfterViewChecked,
} from '@angular/core';
import { Conversation, Message } from '../../../models/chat.model';
import { AvatarComponent } from '../../../shared/components/avatar/avatar.component';
import { MsgBubbleComponent } from '../msg-bubble/msg-bubble.component';
import { MessageInputComponent } from '../msg-inp/msg-inp.component';

@Component({
  selector: 'app-chat-window',
  standalone: true,
  imports: [AvatarComponent, MsgBubbleComponent, MessageInputComponent],
  templateUrl: './chat-window.component.html',
  styleUrl: './chat-window.component.scss',
})
export class ChatWindowComponent implements AfterViewChecked {
  @Input() conversation: Conversation | null = null;
  @Input() messages: Message[] = [];
  @Output() messageSent = new EventEmitter<string>();

  @ViewChild('messageList') private messageList!: ElementRef<HTMLDivElement>;

  private shouldScroll = true;

  ngAfterViewChecked(): void {
    if (this.shouldScroll) {
      this.scrollToBottom();
    }
  }

  onMessageSent(text: string): void {
    this.shouldScroll = true;
    this.messageSent.emit(text);
  }

  private scrollToBottom(): void {
    const el = this.messageList?.nativeElement;
    if (el) {
      el.scrollTop = el.scrollHeight;
    }
  }
}
