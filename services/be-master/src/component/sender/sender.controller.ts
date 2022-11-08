import {Controller, Get, HttpCode} from '@nestjs/common';
import {SenderService} from "./sender.service";


@Controller('sender')
export class SenderController {
  constructor(
    private service: SenderService
  ) {
  }
  @Get(``)
  @HttpCode(200)
  public sender(){
    return this.service.getResult();
  }
}
