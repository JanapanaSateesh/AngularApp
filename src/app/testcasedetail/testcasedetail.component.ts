import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-testcasedetail',
  standalone: true,
  imports: [],
  templateUrl: './testcasedetail.component.html',
  styleUrl: './testcasedetail.component.css'
})
export class TestcasedetailComponent implements OnInit{

  testCaseId: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Retrieve the 'id' parameter from the route
    this.route.paramMap.subscribe(params => {
      this.testCaseId = params.get('id');  // 'id' is the name of the parameter
    });
  }

}
