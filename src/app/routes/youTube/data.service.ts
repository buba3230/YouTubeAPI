import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

  private videoID = new BehaviorSubject('BtckDrRPOVQ');
  private stateVideo = new BehaviorSubject('Stop');
  currentID = this.videoID.asObservable();
  currentState = this.stateVideo.asObservable();
  constructor() { }

  changeVideo(ID: string) {
    this.videoID.next(ID)
  }

  changeState(st:string){
    this.stateVideo.next(st);
  }

}