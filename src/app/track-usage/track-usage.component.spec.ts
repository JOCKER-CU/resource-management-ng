import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackUsageComponent } from './track-usage.component';

describe('TrackUsageComponent', () => {
  let component: TrackUsageComponent;
  let fixture: ComponentFixture<TrackUsageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackUsageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
