import {Inject, Injectable} from '@nestjs/common';
import {ClientProxy, RmqRecordBuilder} from '@nestjs/microservices';
import {lastValueFrom} from 'rxjs';

@Injectable()
export class SenderService {
  public sum: number = NaN;

  constructor(@Inject('CUSTOM_SUM_MICROSERVICE') private client: ClientProxy) {
  }

  public async getResult(query) {
    const record = new RmqRecordBuilder({sum: query.sum.split(',').map(_ => Number(_))})
      .setOptions({
        headers: {
          ['x-version']: '1.0.0',
        },
        priority: 3,
      }).build();
    this.sum = await lastValueFrom(this.client.send('microservice_sum', record));

    return `Your request: [${query.sum}]<br/><br/>Your result: ${this.sum}`;
  }

}
