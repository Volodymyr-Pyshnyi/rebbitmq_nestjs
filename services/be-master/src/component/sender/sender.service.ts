import {Inject, Injectable} from '@nestjs/common';
import {ClientProxy, RmqRecordBuilder} from '@nestjs/microservices';

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

    const result = this.client.send('microservice_sum', record).subscribe(r => {
      console.log(r);
    });
    // const result =  this.sendToQueues(record)
    // .subscribe((result: Number) => {
    //   console.log(result);
    //   this.sum = Number(result);
    // })

    console.log(result);
    // console.log(await this.sum);
    // console.log( this.sendToQueues(query))
    if (this.sum) {

    }
    return `Your request: [${query.sum}]<br/><br/>Your result: ${this.sum}`;

  }


}
