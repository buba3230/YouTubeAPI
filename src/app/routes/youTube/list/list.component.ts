import { Component, OnInit } from '@angular/core';
import { YoutubeService } from 'src/app/youtube.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  videos: any[];
  constructor(private youTubeService: YoutubeService) { }

  ngOnInit(): void {
    
this.videos = [];
this.youTubeService
.getVideosForChanel('UCO0RBMR9ILNLhy_mbWbF4dg', 10)
.subscribe(lista => {
for (let element of lista["items"]) {
this.videos.push(element)
}
});
console.log(this.videos);
  }

}
