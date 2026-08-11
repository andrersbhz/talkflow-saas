import { PrismaClient, ProviderType, ChannelStatus, UserRole } from '@prisma/client';
import crypto from 'crypto';

const prisma = new PrismaClient();
const hash = (v:string) => crypto.createHash('sha256').update(v).digest('hex');

async function main() {
  const org = await prisma.organization.upsert({
    where: { slug: 'demo' },
    update: {},
    create: { name: 'TalkFlow Demo', slug: 'demo' }
  });

  const user = await prisma.user.upsert({
    where: { email: 'admin@talkflow.local' },
    update: {},
    create: { name: 'Administrador', email: 'admin@talkflow.local', passwordHash: hash('admin123') }
  });

  await prisma.membership.upsert({
    where: { userId_organizationId: { userId: user.id, organizationId: org.id } },
    update: { role: UserRole.OWNER },
    create: { userId: user.id, organizationId: org.id, role: UserRole.OWNER }
  });

  await prisma.channel.create({
    data: { organizationId: org.id, name: 'WhatsApp principal', provider: ProviderType.META, status: ChannelStatus.DISCONNECTED }
  });
}

main().finally(() => prisma.$disconnect());
