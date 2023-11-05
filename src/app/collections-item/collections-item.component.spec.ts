import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionsItemComponent } from './collections-item.component';

describe('CollectionsItemComponent', () => {
  let component: CollectionsItemComponent;
  let fixture: ComponentFixture<CollectionsItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollectionsItemComponent]
    });
    fixture = TestBed.createComponent(CollectionsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
