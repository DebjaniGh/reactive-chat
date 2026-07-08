import { Component, Input } from '@angular/core';
import { Message } from '../../../models/chat.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-msg-bubble',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './msg-bubble.component.html',
  styleUrl: './msg-bubble.component.scss',
})
/**
 * Message bubble component for displaying chat messages
 * Shows different styling for sent vs received messages
 * Displays message content and timestamp
 */
export class MsgBubbleComponent {
  @Input({ required: true }) message!: Message;
}
