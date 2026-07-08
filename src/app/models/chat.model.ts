export interface User {
  id: string;
  name: string;
  avatarUrl: string | null;
  isOnline: boolean;
  lastSeen: Date | null;
}

export type MessageType = 'text' | 'image' | 'file';
export type MessageStatus = 'sending' | 'sent' | 'delivered' | 'read';

export interface Message {
  id: string;
  conversationId: string;
  senderId: string;
  type: MessageType;
  content: string;
  timestamp: Date;
  status: MessageStatus;
  isOwn: boolean;
}

export interface Conversation {
  id: string;
  participant: User;
  lastMessage: Message | null;
  unreadCount: number;
  updatedAt: Date;
}
