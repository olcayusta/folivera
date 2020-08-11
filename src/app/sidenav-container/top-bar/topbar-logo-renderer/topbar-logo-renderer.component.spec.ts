import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopbarLogoRendererComponent } from './topbar-logo-renderer.component';

describe('TopbarLogoRendererComponent', () => {
  let component: TopbarLogoRendererComponent;
  let fixture: ComponentFixture<TopbarLogoRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopbarLogoRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopbarLogoRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
