import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertChildrenComponent } from './insert-children.component';

describe('InsertChildrenComponent', () => {
  let component: InsertChildrenComponent;
  let fixture: ComponentFixture<InsertChildrenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertChildrenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
