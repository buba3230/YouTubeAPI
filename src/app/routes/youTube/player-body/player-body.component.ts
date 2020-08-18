import { Component, OnInit } from '@angular/core';
import { ControlsComponent } from '../controls/controls.component';
import { ListComponent } from '../list/list.component';
import { PlayerComponent } from '../player/player.component';


@Component({
  selector: 'app-player-body',
  templateUrl: './player-body.component.html',
  styleUrls: ['./player-body.component.css']
})
export class PlayerBodyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
