export type ChannelConnectionStatus = 'DISCONNECTED'|'CONNECTING'|'QR_PENDING'|'AUTHENTICATING'|'CONNECTED'|'SYNCING'|'ACTIVE'|'ERROR'|'SUSPENDED';
export type ConversationBucket = 'INBOX'|'WAITING'|'OPEN'|'CLOSED';
export interface ApiError { code: string; message: string; details?: unknown }
export interface ActiveChannelGate { hasActiveChannel: boolean; activeChannelId?: string }
