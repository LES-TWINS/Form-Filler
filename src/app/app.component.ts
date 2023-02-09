import { Component } from '@angular/core';
import { User } from './form-filler/user.modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  userInfo!:User[];
  updateUser!:User;


  onSaveInfo(event:User[]){
      this.userInfo = event;
  }
  onUpdate(event:User){
     this.updateUser = event;
   
  
  }
}
