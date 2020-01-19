import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTopNavComponent } from './main-top-nav.component';

describe('MainTopNavComponent', () => {
  let component: MainTopNavComponent;
  let fixture: ComponentFixture<MainTopNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainTopNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTopNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
