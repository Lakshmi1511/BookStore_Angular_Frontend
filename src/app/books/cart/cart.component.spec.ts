import { ComponentFixture, TestBed } from '@angular/core/testing';

import { bookstoreComponent } from './bookstore.component';

describe('bookstoreComponent', () => {
  let component: bookstoreComponent;
  let fixture: ComponentFixture<bookstoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ bookstoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(bookstoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
