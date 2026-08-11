import { Injectable } from '@nestjs/common';

@Injectable()
export class ChannelsService {
  // Starter implementation. Replace with Prisma persistence + provider adapters.
  private status = 'DISCONNECTED';
  getGate() { return { hasActiveChannel: this.status === 'ACTIVE', activeChannelId: this.status === 'ACTIVE' ? 'demo-channel' : undefined }; }
  connect(provider='META') { this.status = provider === 'META' ? 'CONNECTING' : 'QR_PENDING'; return { provider, status: this.status, next: provider === 'META' ? 'META_EMBEDDED_SIGNUP' : 'SCAN_QR' }; }
  activate() { this.status = 'ACTIVE'; return { status: this.status }; }
  disconnect() { this.status = 'DISCONNECTED'; return { status: this.status }; }
}
