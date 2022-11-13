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
  public async sender(@Query() query): Promise<string>{
    return await this.service.getResult(query);
  }
}
