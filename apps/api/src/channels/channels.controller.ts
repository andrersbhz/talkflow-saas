import { Body, Controller, Get, Post } from '@nestjs/common';
import { ChannelsService } from './channels.service';

@Controller('channels')
export class ChannelsController {
  constructor(private readonly channels: ChannelsService) {}
  @Get('gate') gate() { return this.channels.getGate(); }
  @Post('connect') connect(@Body() body: { provider?: string }) { return this.channels.connect(body.provider || 'META'); }
  @Post('activate-demo') activate() { return this.channels.activate(); }
  @Post('disconnect-demo') disconnect() { return this.channels.disconnect(); }
}
