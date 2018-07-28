import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskerService } from '../services/tasker.service';

@Component({
  selector: 'app-task-viewer',
  templateUrl: './task-viewer.component.html',
  styleUrls: ['./task-viewer.component.css']
})
export class TaskViewerComponent implements OnInit {

  theActualEntry: any;

  constructor(private theViewRouter: ActivatedRoute, private myService: TaskerService ) { }

  ngOnInit() {
    this.theViewRouter.params
    .subscribe((params)=> {
      this.myService.getOneEntry(params['id'])
      .subscribe((theEntryPulledFromService)=>{
        this.theActualEntry = theEntryPulledFromService
      })
    });
  }

}
