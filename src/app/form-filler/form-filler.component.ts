import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from './user.modal';

@Component({
  selector: 'app-form-filler',
  templateUrl: './form-filler.component.html',
  styleUrls: ['./form-filler.component.css']
})
export class FormFillerComponent implements OnInit {

  @Output() onChangeEmitter:EventEmitter<User[]> = new EventEmitter();
  @Input()  updateUser!:User;

  userInfo:User = new User();
  userInfoList:User[] = [];

  constructor() { 
  }
  ngOnInit(): void {
  
  }
  onBtnClick(){
    this.userInfoList.push(this.userInfo);
    this.userInfo = new User();
    this.onChangeEmitter.emit(this.userInfoList);
      
  }
  


}
