import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSetComponent } from './test-set.component';

describe('TestSetComponent', () => {
  let component: TestSetComponent;
  let fixture: ComponentFixture<TestSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestSetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
