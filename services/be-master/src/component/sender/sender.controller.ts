import {Controller, Get, HttpCode, Query} from '@nestjs/common';
import {SenderService} from "./sender.service";


@Controller('sender')
export class SenderController {
  constructor(
    private service: SenderService
  ) {
  }
  @Get(``)
  @HttpCode(200)
  public sender(@Query() query): string{
    return this.service.getResult(query);
  }
}
