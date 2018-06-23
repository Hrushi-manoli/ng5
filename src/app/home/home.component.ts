import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  itemCount: number;
  btnText: string = 'Add an item';
  taskText: string = 'My first task';
  tasks = [];

  constructor(private _data : DataService) { }

  ngOnInit() {
    this._data.task.subscribe(res => this.tasks = res);
    this._data.changeTask(this.tasks);
    this.itemCount = this.tasks.length;
  }

  addItem() {
    this.tasks.push(this.taskText);
    this.taskText = '';
    this._data.changeTask(this.tasks);
    this.itemCount = this.tasks.length;
  }

  removeItem(i) {
    this.tasks.splice(i, 1);
    this._data.changeTask(this.tasks);
    this.itemCount = this.tasks.length;
  }

}
