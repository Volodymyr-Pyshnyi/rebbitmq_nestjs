import {Module} from '@nestjs/common';
import {ClientsModule, Transport} from '@nestjs/microservices';
import {SenderController} from "./sender.controller";
import {SenderService} from "./sender.service";

@Module({
  imports: [
    ClientsModule.register([
    {
      name: 'service_sum',
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://rabbitmq:5672'],
        queue: 'cats_queue',
        queueOptions: {
          durable: false
        },
      },
    },
  ]),],
  controllers: [SenderController],
  providers: [SenderService]
})
export class SenderModule {}
