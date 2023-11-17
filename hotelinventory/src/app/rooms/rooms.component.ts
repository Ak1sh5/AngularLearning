// rooms.component.ts

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Room, RoomList } from './room';
import { RoomService } from './services/rooms.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
  providers: [RoomService], // Add the service to the providers array
})
export class RoomsComponent implements OnInit, OnDestroy {
  hotelName = 'ABC hotel';
  numberOfRooms = 10;
  hideRooms = false;
  room: Room = {
    availableRooms: 20,
    totalRooms: 33,
    bookedRooms: 12,
  };

  toggle() {
    this.hideRooms = !this.hideRooms;
  }

  roomList!: RoomList[];

  constructor(private roomsService: RoomService) {
    // Inject the service
    // Corrected method name to getRoomList
    // Using subscribe to handle the asynchronous nature
    this.roomsService.getRoomList().subscribe(
      (rooms) => {
        this.roomList = rooms;
      },
      (error) => {
        console.error('Error fetching room list:', error);
      }
    );
  }

  selectedRoom(room: RoomList) {
    console.log(room);
  }

  ngOnInit(): void {
    // Initialization code here
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy is called');
  }
}
