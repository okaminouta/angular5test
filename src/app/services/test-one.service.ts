import {Injectable} from '@angular/core';

@Injectable()
export class TestOneService {

  l (variable: any, alert: string) {
    console.log(variable, alert);
  }

  constructor() {
  }

}
