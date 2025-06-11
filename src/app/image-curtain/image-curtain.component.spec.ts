import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageCurtainComponent } from './image-curtain.component';

describe('ImageCurtainComponent', () => {
  let component: ImageCurtainComponent;
  let fixture: ComponentFixture<ImageCurtainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageCurtainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageCurtainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
