import {Controller} from '@nestjs/common';
import {Ctx, MessagePattern, Payload, RmqContext} from "@nestjs/microservices";

@Controller()
export class AppController {
  data: Number[] = [];

  @MessagePattern('microservice_sum')
  async getNotifications( @Payload() data: number, @Ctx() context: RmqContext) {
    this.data = Object.values(data['sum']);
    return  this.data.reduce((a,b)=> Number(a )+ Number(b));
  }

}
