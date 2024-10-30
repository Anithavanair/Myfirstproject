import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductspecificsComponent } from './productspecifics.component';

describe('ProductspecificsComponent', () => {
  let component: ProductspecificsComponent;
  let fixture: ComponentFixture<ProductspecificsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductspecificsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductspecificsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
