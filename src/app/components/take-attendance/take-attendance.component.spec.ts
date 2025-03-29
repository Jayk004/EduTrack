import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeAttendanceComponent } from './take-attendance.component';

describe('TakeAttendanceComponent', () => {
  let component: TakeAttendanceComponent;
  let fixture: ComponentFixture<TakeAttendanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TakeAttendanceComponent]
    });
    fixture = TestBed.createComponent(TakeAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
