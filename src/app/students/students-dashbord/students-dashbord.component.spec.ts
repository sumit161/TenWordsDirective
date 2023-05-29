import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsDashbordComponent } from './students-dashbord.component';

describe('StudentsDashbordComponent', () => {
  let component: StudentsDashbordComponent;
  let fixture: ComponentFixture<StudentsDashbordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsDashbordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentsDashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
