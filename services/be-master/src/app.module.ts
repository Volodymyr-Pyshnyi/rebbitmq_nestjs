import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {SenderModule} from "./component/sender/sender.module";

@Module({
  imports: [
    SenderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
