import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntriesBoxComponent } from './entries-box.component';

describe('EntriesBoxComponent', () => {
  let component: EntriesBoxComponent;
  let fixture: ComponentFixture<EntriesBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntriesBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntriesBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
