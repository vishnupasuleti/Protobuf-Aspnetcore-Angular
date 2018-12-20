import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './services/employee.service';
import { IEmployee } from './models/Employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Protobuf Client';
  employeeData: IEmployee[] = [];
  constructor(private employeeService: EmployeeService) {
    
  }

  ngOnInit(){
    this.employeeService.getAll().then(data=>{
      if(data) {
        this.employeeData = [...data];
      }
    });
  }
}
