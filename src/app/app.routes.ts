import {Routes} from '@angular/router';
import { TestCaseComponent } from './test-case/test-case.component';
import { TestSetComponent } from './test-set/test-set.component';
import { TestcasedetailComponent } from './testcasedetail/testcasedetail.component';
import { CreateNewTestcaseComponent } from './create-new-testcase/create-new-testcase.component';


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
        path:'testcase-detail/:id/:testcasename',
        component:TestcasedetailComponent,
    },
    {
        path:'createnewtestcase',
        component:CreateNewTestcaseComponent,
    }
];
