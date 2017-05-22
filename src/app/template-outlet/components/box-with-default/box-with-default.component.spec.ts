import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxWithDefaultComponent } from './box-with-default.component';

describe('BoxWithDefaultComponent', () => {
  let component: BoxWithDefaultComponent;
  let fixture: ComponentFixture<BoxWithDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxWithDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxWithDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
