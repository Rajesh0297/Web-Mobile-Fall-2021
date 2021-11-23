import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerCountDownComponent } from './timer-count-down.component';

describe('TimerCountDownComponent', () => {
  let component: TimerCountDownComponent;
  let fixture: ComponentFixture<TimerCountDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerCountDownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerCountDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
