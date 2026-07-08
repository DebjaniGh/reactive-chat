import { Component, Input } from '@angular/core';
import { Message } from '../../../models/chat.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-msg-bubble',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './msg-bubble.component.html',
  styleUrl: './msg-bubble.component.scss'
})
export class MsgBubbleComponent {
  @Input({ required: true }) message!: Message;
}
