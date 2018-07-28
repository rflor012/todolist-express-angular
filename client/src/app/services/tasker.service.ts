import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})

export class TaskerService {

  constructor(private myHttp: Http) { }

getEntries(){
  return this.myHttp.get('http://localhost:3000/api/tasks')
  .map((response)=> response.json());
}

addNewEntry(theTaskObject){
  console.log(theTaskObject);
  return this.myHttp.post('http://localhost:3000/api/tasks/create', theTaskObject)
  .map((response)=>response.json());
}

getOneEntry(idOfEntry){
  return this.myHttp.get('http://localhost:3000/api/tasks/' + idOfEntry)
  .map((response)=>response.json());
}

//need to create a delete CRUD, for these Routes


}
