import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopPlayerComponent } from './desktop-player.component';

describe('DesktopPlayerComponent', () => {
  let component: DesktopPlayerComponent;
  let fixture: ComponentFixture<DesktopPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
