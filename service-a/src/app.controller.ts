import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {AmqpConnection} from "@golevelup/nestjs-rabbitmq";

@Controller()
export class AppController {
  constructor(
      private readonly appService: AppService,
      private readonly amqpConnection: AmqpConnection
      ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/send')
  sendMessage() {
    this.amqpConnection.publish('exchange1', 'type.entity.action2', { msg: 'hello world' });
  }

}
