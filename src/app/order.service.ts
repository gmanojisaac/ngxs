import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';



@Injectable()
export class OrderService {

  constructor() { }

  //post will return an observable of boolean after a delay of 2sec
  post() {
    return of(Math.random() >= 0.5).pipe(delay(2000));
  }


}
