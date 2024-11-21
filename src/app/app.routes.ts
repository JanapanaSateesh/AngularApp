import {Routes} from '@angular/router';
import { TestCaseComponent } from './test-case/test-case.component';
import { TestSetComponent } from './test-set/test-set.component';
import { TestcasedetailComponent } from './testcasedetail/testcasedetail.component';


export const routes:Routes=[
    {
        path:'test-case',
        component:TestCaseComponent,
    },
    {
        path:'test-set',
        component:TestSetComponent,
    },
    {
        path:'testcase-detail/:id',
        component:TestcasedetailComponent,
    }
];
