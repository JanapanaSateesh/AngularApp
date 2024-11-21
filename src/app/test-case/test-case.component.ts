import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-test-case',
  standalone: true,
  imports: [RouterModule,RouterLink],
  templateUrl: './test-case.component.html',
  styleUrl: './test-case.component.css'
})
export class TestCaseComponent {

  testCases = [
    { id: '1', name: 'Login with valid credentials' },
    { id: '2', name: 'Search on Google' }
  ];

}
