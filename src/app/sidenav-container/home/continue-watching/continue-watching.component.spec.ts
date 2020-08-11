import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinueWatchingComponent } from './continue-watching.component';

describe('ContinueWatchingComponent', () => {
  let component: ContinueWatchingComponent;
  let fixture: ComponentFixture<ContinueWatchingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContinueWatchingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContinueWatchingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
