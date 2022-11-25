import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoWeekComponent } from './todo-week.component';

describe('TodoWeekComponent', () => {
  let component: TodoWeekComponent;
  let fixture: ComponentFixture<TodoWeekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoWeekComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
