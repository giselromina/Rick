import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCardInfComponent } from './show-card-inf.component';

describe('ShowCardInfComponent', () => {
  let component: ShowCardInfComponent;
  let fixture: ComponentFixture<ShowCardInfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowCardInfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCardInfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
