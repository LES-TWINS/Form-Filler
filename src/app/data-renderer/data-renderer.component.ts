import { Component, OnInit,Input, EventEmitter, Output } from '@angular/core';
import { User } from '../form-filler/user.modal';

@Component({
  selector: 'app-data-renderer',
  templateUrl: './data-renderer.component.html',
  styleUrls: ['./data-renderer.component.css']
})
export class DataRendererComponent implements OnInit {

  @Input()
  userInfo!:User[];
  @Output() onUpdateEmitter:EventEmitter<User> = new EventEmitter();
 
  constructor() { }

  ngOnInit(): void {
  }
  onBtnDelete(index:any){
    this.userInfo.splice(index,1)
  }
  onBtnUpdate(index:any,item:any){
     this.onBtnDelete(index);
     this.userInfo[index] = {
      userName: item.userName,
      lastName: item.lastName,
      age:item.age
    }
    this.onUpdateEmitter.emit(this.userInfo[index]);
  }

}
