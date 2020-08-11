import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyMessagesListComponent } from './party-messages-list.component';

describe('PartyMessagesListComponent', () => {
  let component: PartyMessagesListComponent;
  let fixture: ComponentFixture<PartyMessagesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartyMessagesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartyMessagesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
