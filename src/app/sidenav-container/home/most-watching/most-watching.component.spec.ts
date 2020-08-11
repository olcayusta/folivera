import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostWatchingComponent } from './most-watching.component';

describe('MostWatchingComponent', () => {
  let component: MostWatchingComponent;
  let fixture: ComponentFixture<MostWatchingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostWatchingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostWatchingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
