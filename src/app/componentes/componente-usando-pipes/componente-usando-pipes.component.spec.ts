import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteUsandoPipesComponent } from './componente-usando-pipes.component';

describe('ComponenteUsandoPipesComponent', () => {
  let component: ComponenteUsandoPipesComponent;
  let fixture: ComponentFixture<ComponenteUsandoPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteUsandoPipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteUsandoPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
