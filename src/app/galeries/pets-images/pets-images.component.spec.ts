import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetsImagesComponent } from './pets-images.component';

describe('PetsImagesComponent', () => {
  let component: PetsImagesComponent;
  let fixture: ComponentFixture<PetsImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetsImagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetsImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
