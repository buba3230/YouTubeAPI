import { Component, OnInit } from '@angular/core';
import { YoutubeService } from 'src/app/youtube.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  videos: any[];
  constructor(private youTubeService: YoutubeService) { }

  ngOnInit(): void {

this.videos = [];
this.youTubeService
.getVideosForChanel('UCO0RBMR9ILNLhy_mbWbF4dg', 1)
.subscribe(lista => {
for (let element of lista["items"]) {
this.videos.push(element)
}
});
  }

}
