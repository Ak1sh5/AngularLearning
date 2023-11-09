import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { RoomList } from '../room';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss']
})
export class RoomsListComponent implements OnInit ,OnChanges,OnDestroy{

 
  @Input() rooms:RoomList[]=[];

  @Output() roomsSelected =new EventEmitter<RoomList>();
  constructor(){

  }
  roomSelected(room:RoomList){
    this.roomsSelected.emit(room);
  }

  ngOnInit(): void {
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called in RoomsListComponent:', changes);
  }
  ngOnDestroy(): void {
    console.log("ngondestory is  called");
  }
}
