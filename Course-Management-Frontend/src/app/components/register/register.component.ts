import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  providers: [UserService],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder, private user_service: UserService) {
    this.registerForm = this.formBuilder.group({
      email: formBuilder.control('', [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ),
      ]),
      password: formBuilder.control('', [
        Validators.required,
        Validators.minLength(7),
      ]),
    });
  }
  //Get Form Controls
  public control(name: string) {
    return this.registerForm.get(name);
  }

  //Submit Form
  public onSubmit() {
    this.user_service.registerUser(this.registerForm.value).subscribe({
      next: (res: any) => {
        //response
        console.log(res);
        localStorage.setItem('token', res.token);
        this.router.navigate(['/list-course']);
      },
      error: (error) => {
        // handle error
        console.log(error);
      },
      complete: () => {
        console.log('Request complete');
      },
    });
  }

  ngOnInit() {}
}
