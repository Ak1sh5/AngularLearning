import { Component, OnInit, Self } from '@angular/core';
import { RoomService } from '../rooms/services/rooms.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  providers:[RoomService]
})
export class EmployeeComponent implements OnInit{

  constructor(@Self() private roomService: RoomService){
     
  }
  ngOnInit(): void {
    
  }

}
