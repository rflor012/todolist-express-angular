import { Component, OnInit } from '@angular/core';
import { TaskerService } from '../services/tasker.service'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks:Array<any>;

  theNewEntry:any = {};

  constructor(private theService: TaskerService) { }

  addNew(){
    this.theService.addNewEntry(this.theNewEntry)
    .subscribe((response)=>{
      this.theNewEntry = {};
      this.getEntries();
      console.log('Yo, we"ve added this in here for you')
    })
  }

  getEntries(){
    this.theService.getEntries()
    .subscribe((res)=>{
      this.tasks = res;
    })
  }

  ngOnInit() {
    this.getEntries();
  }

}
