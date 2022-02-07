import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityListContainerComponent } from './search-result-container.component';

describe('SearchResultContainerComponent', () => {
  let component: EntityListContainerComponent;
  let fixture: ComponentFixture<EntityListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntityListContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
