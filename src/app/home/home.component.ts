import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  users: { username: string,age:number, email: string, password: string,mobile:number  }[] = [];
  
  

  onLogin(userdetails: { username: string, password: string }): void {
    const { username, password } = userdetails;
    console.log("user updated :",userdetails)
  }

  onRegister(registerdetails: { username: string,age:number, email: string, password: string,mobile:number }): void {
    this.users.push(registerdetails);
    console.log('User registered:', registerdetails);
  }


}
