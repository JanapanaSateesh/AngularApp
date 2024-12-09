import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-new-testcase',
  standalone: true,
  imports: [RouterOutlet,FormsModule],
  templateUrl: './create-new-testcase.component.html',
  styleUrl: './create-new-testcase.component.css'
})
export class CreateNewTestcaseComponent {

  response:string='';

  applicationName: string = '';
  feature: string = '';
  subFeature: string = '';
  testCaseName: string = '';

  constructor(
    private http:HttpClient
  ) {}

  // Function to check if an object is empty
 isEmptyObject(obj: any): boolean {
  return Object.values(obj).every(value => !value);
  }

  // Method to create a new test case
  createTestCase(): void {
    // Create a JSON object with the form data
    const newTestCase:any = {
      ApplicationName: this.applicationName,
      Feature: this.feature,
      SubFeature: this.subFeature,
      TestCaseName: this.testCaseName
    };

    if(this.isEmptyObject(newTestCase)){
      alert("Please Enter the Test Case Details")
    }else{
      this.http.post("http://127.0.0.1:5000/inserttestcases",newTestCase).subscribe((result:any)=>{
        this.response=result;
          })
  
         confirm("New Test Case Created Successfully");
    }
    
    
  }

}
