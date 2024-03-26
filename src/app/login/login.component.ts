import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  @Input() users: { username: string,age:number, email: string, password: string,mobile:number }[] = [];
  
  
  reactiveloginForm: FormGroup;
  userError: string = '';
  passError: string = '';
  
  

  ngOnInit() {
    this.reactiveloginForm = new FormGroup({
      username:new FormControl('',[ Validators.required]),
      password: new  FormControl('', [Validators.required])
    });
  }

  onLoginSubmit() {
    if (this.reactiveloginForm.valid) {
      const { username, password } = this.reactiveloginForm.value;
      let data = this.users.find(user => user.username === username && user.password === password);
      if (data) {
        alert('Login successfully');
      } 
      else {
       alert('Invalid username or password');
      }
    } else {
      if (this.reactiveloginForm.get('username').hasError('required')) {
        this.userError = 'Username is required';
      } else {
        this.userError = '';
      }
      if (this.reactiveloginForm.get('password').hasError('required')) {
        this.passError = 'Password is required';
      } else {
        this.passError = '';
      }
    }
  }
}
