import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookResourceComponent } from './book-resource.component';

describe('BookResourceComponent', () => {
  let component: BookResourceComponent;
  let fixture: ComponentFixture<BookResourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookResourceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
