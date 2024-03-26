import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() registerdetails: EventEmitter<{ username: string,age:number, email: string, password: string,mobile:number }> = new EventEmitter<{ username: string,age:number, email: string, password: string,mobile:number }>();

  reactiveForm: FormGroup;
  usernameError: string = '';
  ageError: string = '';
  emailError: string = '';
  passwordError: string = '';
  mobileError: string = ''; // Corrected property name

  ngOnInit() {
    this.reactiveForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]),
      age: new FormControl('', [Validators.required, Validators.pattern(/^\d+$/)]),
      email: new FormControl('', [Validators.required, Validators.email, Validators.pattern(/\S+@\S+\.\S+/)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.pattern(/\d/)]),
      mobile: new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)])
    });
  }

  onSubmit() {
    if (this.reactiveForm.valid) {
      const { username, age, email, password, mobile } = this.reactiveForm.value;
      this.registerdetails.emit({ username, age, email, password, mobile });
      console.log(username + " registered successfully");
      this.reactiveForm.reset();
    } else {
      this.usernameError = this.reactiveForm.controls['username'].errors ? 'Name is required and must contain only letters.' : '';
      this.emailError = this.reactiveForm.controls['email'].errors ? 'Enter a valid email address.' : '';
      this.passwordError = this.reactiveForm.controls['password'].errors ? 'Password is required and must have minimum 8 characters with at least one special character.' : '';
      this.ageError = this.reactiveForm.controls['age'].errors ? 'Age is required and must be at least 18.' : '';
      this.mobileError = this.reactiveForm.controls['mobile'].errors ? 'Mobile number is required and must be a 10-digit number.' : ''; // Corrected property name
    }
  }
}
