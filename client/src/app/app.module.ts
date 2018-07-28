import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskerService } from './services/tasker.service';
import { TaskViewerComponent } from './task-viewer/task-viewer.component';

const routes: Routes = [
  {path: '', component: TasksComponent},
  {path: 'tasks/:id', component: TaskViewerComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TaskViewerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [TaskerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
