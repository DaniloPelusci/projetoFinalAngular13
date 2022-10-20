import { TestBed, inject } from '@angular/core/testing';


import { ConversorService } from './conversor.service';

describe('ConversorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
      	ConversorService
      ],
      imports: [
      	
      ]
    });
  });

  it('should ...', inject([ConversorService], (service: ConversorService) => {
    expect(service).toBeTruthy();
  }));
});
