import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBookshopsComponent } from './list-bookshops.component';

describe('ListBookshopsComponent', () => {
  let component: ListBookshopsComponent;
  let fixture: ComponentFixture<ListBookshopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBookshopsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListBookshopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
