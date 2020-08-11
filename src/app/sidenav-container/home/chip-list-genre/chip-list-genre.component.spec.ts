import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipListGenreComponent } from './chip-list-genre.component';

describe('ChipListGenreComponent', () => {
  let component: ChipListGenreComponent;
  let fixture: ComponentFixture<ChipListGenreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChipListGenreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipListGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
