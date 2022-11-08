import {Injectable} from '@nestjs/common';

@Injectable()
export class SenderService {
  public getResult(query) {
    return `Your request: [${query.sum}]<br/><br/>Your result:`;
  }
}
