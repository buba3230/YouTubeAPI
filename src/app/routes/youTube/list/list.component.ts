import { Component, OnInit } from '@angular/core';
import { YoutubeService } from 'src/app/youtube.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  parentMessage = 'Hola Mundo!';
  videos: any[];
  constructor(private youTubeService: YoutubeService, private data:DataService) { }

  ngOnInit(): void {
    
this.videos = [];
this.youTubeService
.getVideosForChanel('UCO0RBMR9ILNLhy_mbWbF4dg', 3)
.subscribe(lista => {
for (let element of lista["items"]) {
this.videos.push(element)
}
});
console.log(this.videos);
  }

  changeVideo(id) {
    this.data.changeVideo(id);
  }

}
