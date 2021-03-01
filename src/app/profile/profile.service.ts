import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  //baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  skillsData: any = [
    {
      'id': '1',
      'skill': 'Python',
      'progress': '85%'
    },
    {
      'id': '2',
      'skill': 'Java',
      'progress': '80%'
    },
    {
      'id': '3',
      'skill': 'C',
      'progress': '80%'
    },
    {
      'id': '4',
      'skill': 'Html & css',
      'progress': '75%'
    },
    {
      'id': '5',
      'skill': 'Angular',
      'progress': '75%'
    },
    {
      'id': '6',
      'skill': 'DATA STRUCTURE',
      'progress': '70%'
    }
  ];

  educationData: any = [
    {
      'id': '1',
      'from_to_year': '2018 - 2022',
      'education': 'Bachelor\'s Degree',
      'stream': 'Bachelor of COMPUTER SCIENCE',
      'institution': 'MCGILL UNIVERSITY'
    },
    {
      'id': '2',
      'from_to_year': '2013 - 2016',
      'education': 'Higher Secondary',
      'stream': 'Science and Mathematics',
      'institution': 'ST JOSEPH`S BOYS NATIONAL SCHOOL'
    },
  ];

  exprienceData: any = [
    
  ];
  // contactus(data: any): Observable<any> {
  //   return this.http.post(this.baseUrl + 'contact', data);
  // }

  skills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.skillsData;
  }

  education(): Observable<any> {
    // return this.http.get(this.baseUrl + 'education');
    return this.educationData;
  }

  exprience(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.exprienceData;
  }
}
