import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewTestcaseComponent } from './create-new-testcase.component';

describe('CreateNewTestcaseComponent', () => {
  let component: CreateNewTestcaseComponent;
  let fixture: ComponentFixture<CreateNewTestcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateNewTestcaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateNewTestcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
