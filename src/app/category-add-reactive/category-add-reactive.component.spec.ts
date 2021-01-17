import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryAddReactiveComponent } from './category-add-reactive.component';

describe('CategoryAddReactiveComponent', () => {
  let component: CategoryAddReactiveComponent;
  let fixture: ComponentFixture<CategoryAddReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryAddReactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryAddReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
