import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BingImagesComponent } from './bing-images.component';

describe('BingImagesComponent', () => {
  let component: BingImagesComponent;
  let fixture: ComponentFixture<BingImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BingImagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BingImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
