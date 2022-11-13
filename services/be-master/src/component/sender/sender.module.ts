import {Module} from '@nestjs/common';
import {ClientsModule, Transport} from '@nestjs/microservices';
import {SenderController} from "./sender.controller";
import {SenderService} from "./sender.service";

@Module({
  imports: [
    ClientsModule.register(
      [
      {
      name: 'CUSTOM_SUM_MICROSERVICE',
      transport: Transport.RMQ,
      options: {
        urls: [ 'amqp://rabbitmq_management:5672'],
        queue: 'microservice_sum_queue',
        queueOptions: {
          durable: false
        },
      },
    }
    ]
    )],
  controllers: [SenderController],
  providers: [SenderService]
})
export class SenderModule {}
