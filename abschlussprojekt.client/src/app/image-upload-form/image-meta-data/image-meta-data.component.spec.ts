import { ComponentFixture, TestBed } from '@angular/core/testing';

import ImageMetaDataComponent from './image-meta-data.component';

describe('ImageMetaDataComponent', () => {
  let component: ImageMetaDataComponent;
  let fixture: ComponentFixture<ImageMetaDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImageMetaDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageMetaDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
