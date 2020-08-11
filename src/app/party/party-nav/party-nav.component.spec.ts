import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyNavComponent } from './party-nav.component';

describe('PartyNavComponent', () => {
  let component: PartyNavComponent;
  let fixture: ComponentFixture<PartyNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartyNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartyNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
