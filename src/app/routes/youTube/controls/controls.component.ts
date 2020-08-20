import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {

  constructor(private data: DataService) { }

  ngOnInit(): void {
  }

  changeState(st) {
    this.data.changeState(st);
  }

}
