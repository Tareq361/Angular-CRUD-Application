import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteBookshopComponent } from './delete-bookshop.component';

describe('DeleteBookshopComponent', () => {
  let component: DeleteBookshopComponent;
  let fixture: ComponentFixture<DeleteBookshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteBookshopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteBookshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
