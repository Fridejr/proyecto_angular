import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdivinarNumeroComponent } from './adivinar-numero.component';

describe('AdivinarNumeroComponent', () => {
  let component: AdivinarNumeroComponent;
  let fixture: ComponentFixture<AdivinarNumeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdivinarNumeroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdivinarNumeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
