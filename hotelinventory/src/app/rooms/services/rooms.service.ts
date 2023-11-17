// room.service.ts

import { Injectable } from '@angular/core';
import { RoomList } from '../room';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  private roomList: RoomList[] = [];

  constructor(private http: HttpClient) {}

  getRoomList(): Observable<RoomList[]> {
    return this.http.get<RoomList[]>('/api/rooms');
  }
  addRoom(room:RoomList){
    return this.http.post('/api/rooms',room);
  }
}
