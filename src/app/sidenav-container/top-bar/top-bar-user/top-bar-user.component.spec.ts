import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBarUserComponent } from './top-bar-user.component';

describe('TopBarUserComponent', () => {
  let component: TopBarUserComponent;
  let fixture: ComponentFixture<TopBarUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopBarUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopBarUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
