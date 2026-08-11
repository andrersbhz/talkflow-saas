import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HealthController } from './common/health.controller';
import { ChannelsController } from './channels/channels.controller';
import { ChannelsService } from './channels/channels.service';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true, envFilePath: ['../../.env', '.env'] })],
  controllers: [HealthController, ChannelsController],
  providers: [ChannelsService]
})
export class AppModule {}
