import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedReservationsComponent } from './saved-reservations.component';

describe('SavedReservationsComponent', () => {
  let component: SavedReservationsComponent;
  let fixture: ComponentFixture<SavedReservationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SavedReservationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SavedReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
