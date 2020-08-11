import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilePlayerComponent } from './mobile-player.component';

describe('MobilePlayerComponent', () => {
  let component: MobilePlayerComponent;
  let fixture: ComponentFixture<MobilePlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobilePlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilePlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
