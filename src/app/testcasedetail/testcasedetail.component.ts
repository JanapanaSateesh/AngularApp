import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-testcasedetail',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './testcasedetail.component.html',
  styleUrls: ['./testcasedetail.component.css']
})
export class TestcasedetailComponent implements OnInit {
  testCaseId: string | null = null;
  testCaseName: string | null=null;
  response:any[]=[];

  constructor(
    private route: ActivatedRoute,
    private http:HttpClient
  ) {}



  ngOnInit(): void {
  
    this.route.paramMap.subscribe(params => {
      this.testCaseId = params.get('id');  // 'id' is the name of the parameter
      this.testCaseName=params.get('testcasename')
    });
    
    
    this.fetchApiData();

  }

  fetchApiData(){
    
    // Use HttpParams to append the ID to the query string
     // Use HttpParams to append the ID to the query string
   const testcaseid = this.testCaseId ?? ''; 
   const params = new HttpParams().set('id', testcaseid);

    this.http.get("http://127.0.0.1:5000/gettestcasedetails",{params}).subscribe((result:any)=>{
      
    this.response=result;
    })
  }


  //Test Case Step
  action:string="";
  input:string="";
  xpath:string="";

  gettestcasedetailresponse:any[]=[]

  // Function to check if an object is empty
 isEmptyObject(obj: any): boolean {
  return Object.values(obj).every(value => !value);
  }

  addTestCaseStep():void{

    let convertedTestCaseId = this.testCaseId !== null ? +this.testCaseId : null;

    //create json
    const addNewStep:any = {
      Action: this.action,
      Input: this.input,
      Xpath: this.xpath,
      TestCaseId: convertedTestCaseId
    };

    const addNewStepValid:any = {
      Action: this.action,
      Input: this.input,
      Xpath: this.xpath
    };
    
    if(this.isEmptyObject(addNewStepValid)){
      alert("Please Add The Test Case Step")
    }else{
      this.http.post("http://127.0.0.1:5000/inserteachtestcase",addNewStep).subscribe((result:any)=>{
     this.gettestcasedetailresponse=result;
     confirm("New Test Step Added Successfully");
    })
    }  
      
  }

  /////Run Test
  runTest():void{
    
    
    // Use HttpParams to append the ID to the query string
   const testcaseid = this.testCaseId ?? ''; 
   const params = new HttpParams().set('id', testcaseid);

    if(this.response.length>0){
      this.http.get("http://127.0.0.1:5000/runtest",{params}).subscribe((result:any)=>{
        this.gettestcasedetailresponse=result;
         
        })
    }else{
      alert("This Test Doesn't have any steps to exeucte")
    }
   
    
  }

}


