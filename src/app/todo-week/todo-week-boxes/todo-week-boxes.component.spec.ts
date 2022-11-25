import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoWeekBoxesComponent } from './todo-week-boxes.component';

describe('TodoWeekBoxesComponent', () => {
  let component: TodoWeekBoxesComponent;
  let fixture: ComponentFixture<TodoWeekBoxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoWeekBoxesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoWeekBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
