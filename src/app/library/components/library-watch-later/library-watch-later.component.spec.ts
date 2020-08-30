import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryWatchLaterComponent } from './library-watch-later.component';

describe('LibraryWatchLaterComponent', () => {
  let component: LibraryWatchLaterComponent;
  let fixture: ComponentFixture<LibraryWatchLaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibraryWatchLaterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryWatchLaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
