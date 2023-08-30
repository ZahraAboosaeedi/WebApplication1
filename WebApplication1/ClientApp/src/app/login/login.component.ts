import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  invalidLogin: boolean = true;

  constructor(private router: Router, private http: HttpClient) {
  }

  login(form: NgForm) {
    const credential = {
      'username': form.value.username,
      'password': form.value.password
    }
    this.http.post("http://localhost:8000/api/auth/login", credential).subscribe(Response => {
      const token = (<any>Response).token;
      localStorage.setItem("jwt", token);
      this.invalidLogin = false;
      this.router.navigate(["/"]);
    }), () => {
      this.invalidLogin = true;
    }


  }
}
