import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskerService } from './services/tasker.service';
import { TaskViewerComponent } from './task-viewer/task-viewer.component';
import { AuthService } from './services/auth.service';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  {path: '', component: TasksComponent},
  {path: 'tasks/:id', component: TaskViewerComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TaskViewerComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [TaskerService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
