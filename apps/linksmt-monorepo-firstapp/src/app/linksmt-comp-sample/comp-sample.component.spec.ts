import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompSampleComponent } from './comp-sample.component';

describe('CompSampleComponent', () => {
  let component: CompSampleComponent;
  let fixture: ComponentFixture<CompSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompSampleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CompSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
