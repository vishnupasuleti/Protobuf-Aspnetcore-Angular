import { Injectable } from '@angular/core';
import { Http, ResponseContentType } from '@angular/http';
import { Employee, EmployeeCollection, IEmployee } from '../models/Employee';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class EmployeeService {

    constructor(private http: Http) { }

    public getAll(): Promise<IEmployee[]> {

        return this.http.get("https://localhost:5001/api/Employee/all", { responseType: ResponseContentType.ArrayBuffer }).toPromise().then(data => {
            return EmployeeCollection.decode(new Uint8Array(data.arrayBuffer())).Employees;
        });

    }

}