// src/app/mock/mock-data.ts
import { User, Message, Conversation } from '../models/chat.model';

// ── Current User ──────────────────────────────────
export const MOCK_CURRENT_USER: User = {
  id: 'user-1',
  name: 'Debjani Ghosh',
  avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DebjaniGhosh',
  status: 'online',
  lastSeen: null,
};

// ── Other Users ───────────────────────────────────
const alice: User = {
  id: 'user-2',
  name: 'Alice Chen',
  avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=AliceChen',
  status: 'online',
  lastSeen: null,
};

const bob: User = {
  id: 'user-3',
  name: 'Bob Smith',
  avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=BobSmith',
  status: 'online',
  lastSeen: null,
};

const carol: User = {
  id: 'user-4',
  name: 'Carol Williams',
  avatarUrl: null,
  status: 'offline',
  lastSeen: new Date(Date.now() - 60 * 60000),
};

const dave: User = {
  id: 'user-5',
  name: 'Dave Kumar',
  avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DaveKumar',
  status: 'away',
  lastSeen: null,
};

// ── Message Helper ────────────────────────────────
function msg(
  id: string,
  conversationId: string,
  senderId: string,
  content: string,
  minutesAgo: number,
  isOwn: boolean,
  status: 'sending' | 'sent' | 'delivered' | 'read' = 'read',
): Message {
  return {
    id,
    conversationId,
    senderId,
    type: 'text',
    content,
    timestamp: new Date(Date.now() - minutesAgo * 60000),
    status,
    isOwn,
  };
}

// ── Messages by Conversation ──────────────────────
const aliceMessages: Message[] = [
  msg('m1', 'conv-1', 'user-2', "Hey! How's the project going?", 30, false),
  msg('m2', 'conv-1', 'user-1', 'Great! Just finished the RxJS module', 29, true),
  msg('m3', 'conv-1', 'user-2', 'Nice! Can you share the demo link?', 28, false),
  msg('m4', 'conv-1', 'user-1', 'Sure — reactive-lab.vercel.app', 27, true),
  msg('m5', 'conv-1', 'user-2', 'This is really impressive! Love the scan demo 🎉', 25, false),
];

const bobMessages: Message[] = [
  msg('m6', 'conv-2', 'user-3', 'Did you see the new Angular 17 features?', 120, false),
  msg('m7', 'conv-2', 'user-1', 'Yes! The new control flow is amazing', 118, true),
  msg('m8', 'conv-2', 'user-3', '@if and @for feel so much cleaner', 115, false),
  msg(
    'm9',
    'conv-2',
    'user-1',
    'Agreed. No more *ngIf and *ngFor directives',
    110,
    true,
    'delivered',
  ),
];

const carolMessages: Message[] = [
  msg('m10', 'conv-3', 'user-4', 'Hey, are you coming to the meetup?', 1440, false),
  msg('m11', 'conv-3', 'user-1', 'Which one? The Angular community one?', 1430, true),
  msg('m12', 'conv-3', 'user-4', 'Yes! This Thursday at 7pm', 1425, false),
  msg('m13', 'conv-3', 'user-1', "I'll be there!", 1420, true),
];

const daveMessages: Message[] = [
  msg('m14', 'conv-4', 'user-5', 'Can you review my PR when you get a chance?', 60, false),
  msg('m15', 'conv-4', 'user-1', 'Sure, which repo?', 58, true),
  msg('m16', 'conv-4', 'user-5', 'The shared component library — PR #142', 55, false),
];

export const MOCK_MESSAGES: Record<string, Message[]> = {
  'conv-1': aliceMessages,
  'conv-2': bobMessages,
  'conv-3': carolMessages,
  'conv-4': daveMessages,
};

// ── Conversations ─────────────────────────────────
function buildConversation(
  id: string,
  participant: User,
  messages: Message[],
  unreadCount = 0,
): Conversation {
  const lastMessage = messages.length > 0 ? messages[messages.length - 1] : null;
  return {
    id,
    participant,
    lastMessage,
    unreadCount,
    updatedAt: lastMessage?.timestamp ?? new Date(),
  };
}

export const MOCK_CONVERSATIONS: Conversation[] = [
  buildConversation('conv-1', alice, aliceMessages, 2),
  buildConversation('conv-2', bob, bobMessages),
  buildConversation('conv-3', carol, carolMessages),
  buildConversation('conv-4', dave, daveMessages, 1),
];
