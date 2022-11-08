import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {SenderModule} from "./component/sender/sender.module";

@Module({
  imports: [
    SenderModule,
    // ClientsModule.register([{
    //     name: 'MATH_SERVICE',
    //     transport: Transport.RMQ,
    //     options: {
    //       urls: ['amqp://localhost:5672'],
    //       queue: 'cats_queue',
    //       queueOptions: {
    //         durable: false
    //       },
    //     },
    //   }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
