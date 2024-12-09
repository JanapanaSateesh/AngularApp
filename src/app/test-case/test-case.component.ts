import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test-case',
  standalone: true,
  imports: [RouterModule,RouterLink],
  templateUrl: './test-case.component.html',
  styleUrl: './test-case.component.css'
})
export class TestCaseComponent implements OnInit{

  testcaseDetails:any=[];
  constructor(
    private http:HttpClient
  ){}

  ngOnInit(): void {
    this.http.get("http://127.0.0.1:5000/gettestcases").subscribe((result)=>{
      
    this.testcaseDetails=result;
    })
  }



}
