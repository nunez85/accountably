import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityTypeFilterComponent } from './activity-type-filter.component';

describe('ActivityTypeFilterComponent', () => {
  let component: ActivityTypeFilterComponent;
  let fixture: ComponentFixture<ActivityTypeFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivityTypeFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActivityTypeFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
