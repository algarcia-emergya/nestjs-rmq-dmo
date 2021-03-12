import { Injectable } from '@nestjs/common';
import {RabbitSubscribe} from "@golevelup/nestjs-rabbitmq";

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  @RabbitSubscribe({
    exchange: 'exchange1',
    routingKey: 'type.entity.action2',
    queue: 'subscribed-queue',
  })
  public async pubSubHandler(msg: {}) {
    console.log(`Received message from B: ${JSON.stringify(msg)}`);
  }
}
