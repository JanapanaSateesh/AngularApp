import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestcasedetailComponent } from './testcasedetail.component';

describe('TestcasedetailComponent', () => {
  let component: TestcasedetailComponent;
  let fixture: ComponentFixture<TestcasedetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestcasedetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestcasedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
