import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private tasks = new BehaviorSubject<any>(['My Angular data','Another example data']);
  task = this.tasks.asObservable();

  constructor() { }

  changeTask(task) {
    this.tasks.next(task);
  }
}
