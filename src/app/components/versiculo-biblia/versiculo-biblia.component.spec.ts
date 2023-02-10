import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VersiculoBibliaComponent } from './versiculo-biblia.component';

describe('VersiculoBibliaComponent', () => {
  let component: VersiculoBibliaComponent;
  let fixture: ComponentFixture<VersiculoBibliaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VersiculoBibliaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VersiculoBibliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
