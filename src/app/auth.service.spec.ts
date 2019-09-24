import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';

describe('AuthService', () => {
  let injector: TestBed;
  let service: AuthService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService],
    });
    injector = getTestBed();
    service = injector.get(AuthService);
    httpMock = injector.get(HttpTestingController);
  });

  it('should be call signin api', () => {
    const logindata = { usernameOrEmail: 'anuradhabhosale93@gmail.com', password: 'Anuradha@95' };
    service.login(logindata).subscribe(data => {
    });
    console.log("ho run api service");
    const req = httpMock.expectOne('http://localhost:3090/auth/signin');
    expect(req.request.method).toBe('POST');
  });

  afterEach(() => {
    httpMock.verify();
  });

});
