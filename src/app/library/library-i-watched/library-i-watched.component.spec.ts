import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryIWatchedComponent } from './library-i-watched.component';

describe('LibraryIWatchedComponent', () => {
  let component: LibraryIWatchedComponent;
  let fixture: ComponentFixture<LibraryIWatchedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibraryIWatchedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryIWatchedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
