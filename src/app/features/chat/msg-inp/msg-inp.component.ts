// src/app/features/chat/message-input/message-input.component.ts
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-message-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './msg-inp.component.html',
  styleUrl: './msg-inp.component.scss',
})
export class MessageInputComponent {
  @Output() messageSent = new EventEmitter<string>();

  text = '';

  send(): void {
    const trimmed = this.text.trim();
    if (!trimmed) return;
    this.messageSent.emit(trimmed);
    this.text = '';
  }

  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.send();
    }
  }
}
