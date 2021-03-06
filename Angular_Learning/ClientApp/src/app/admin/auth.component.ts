import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { AuthService } from "../Models/auth.service";

@Component({
  moduleId: module.id,
  templateUrl: "auth.component.html"
})


export class AuthComponent {
  public username: string;
  public password: string;
  public errorMessage: string;

  constructor(private router: Router, private auth: AuthService) { }

  authenticate(form: NgForm) {
    if (form.valid) {
      this.auth.authenticate(this.username, this.password)
        .subscribe(response => {
          if (response) {
            this.router.navigateByUrl("/admin/main");
          } else {
            this.errorMessage = "Uwierzytelnianie zakonczylo sie niepowodzeniem";
          }
        })
    } else {
      this.errorMessage = "Nieprawidłowe dane.";
    }
  }

}
