import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowForwardIconComponent } from './arrow-forward-icon.component';

describe('ArrowForwardIconComponent', () => {
  let component: ArrowForwardIconComponent;
  let fixture: ComponentFixture<ArrowForwardIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrowForwardIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrowForwardIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
