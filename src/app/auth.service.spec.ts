import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';

describe('AuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [AuthService]
  }));

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });

  it('should be call signin api', () => {
    const logindata = { usernameOrEmail: 'anuradhabhosale93@gmail.com', password: 'Anuradha@95' };
    const service: AuthService = TestBed.get(AuthService);
    console.log("call1");
    service.login(logindata).subscribe(result => {
      console.log(result)
      expect(result).toBe(true);
    });

  });
});
