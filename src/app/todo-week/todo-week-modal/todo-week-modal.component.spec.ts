import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoWeekModalComponent } from './todo-week-modal.component';

describe('TodoWeekModalComponent', () => {
  let component: TodoWeekModalComponent;
  let fixture: ComponentFixture<TodoWeekModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoWeekModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoWeekModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
