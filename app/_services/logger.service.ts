import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Logger {
  logs: string[] = []; // capture logs for testing

  constructor() { }

  log(message: string) {
    this.logs.push(message);
    console.log(message);
  }

}
