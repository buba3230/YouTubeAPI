import { Component, OnInit, destroyPlatform} from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  
  videoID:string;
  stateVideo:string;
  title = 'YTIFrameAPI';
  public YT: any;
  public video: any;
  public player: any;
  init() {
    // Return if Player is already created

    if (window['YT']) {
      this.startVideo();
      return;
    }
    

    var tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window['onYouTubeIframeAPIReady'] = () => {this.startVideo();}
  }

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.currentID.subscribe(id => 
      {
      if (this.videoID!=id) {
          this.videoID = id;
          this.stateVideo='Change';
          this.init();
      }
      });

      this.data.currentState.subscribe(st => 
        {
          if (this.stateVideo!=st) {
            this.stateVideo = st;
            this.init();
            
        }
        }
       ); 
    this.video = this.videoID;//'BtckDrRPOVQ';
    this.init();
    
  }

  
 startVideo() {

   if (this.player) {
    if (this.stateVideo=='Play')
    {
      if (!this.videoID) {
        alert('You must select video...');
      }
      this.player.playVideo();
        console.log("Play");

    }
    if (this.stateVideo=='Pause')
    {
      this.player.pauseVideo();
        console.log("Pause");
    }
    if (this.stateVideo=='Stop')
    {
      this.player.stopVideo();
        console.log("Stop");
    }
    if (this.stateVideo=='Change')
    {
      this.player.loadVideoById(this.videoID);
    } 
    return;}
    console.log(this.player);
    this.player = new window['YT'].Player('player', {
      videoId: this.videoID,
      width:0,
      height:500,
      playerVars: {
        autoplay: 0,
        modestbranding: 1,
        controls: 1,
        disablekb: 1,
        rel: 0,
        showinfo: 0,
        fs: 0,
        playsinline: 1

      },
      events: {
        'onStateChange': this.onPlayerStateChange.bind(this),
        'onError': this.onPlayerError.bind(this),
        'onReady': this.onPlayerReady.bind(this),
      }
    });
  }
 
  onPlayerReady(event) {
        
      if (this.stateVideo=='Play')
      {
          event.target.playVideo();
          console.log("Play");
      }
      if (this.stateVideo=='Pause')
      {
          event.target.pauseVideo();
          console.log("Pause");
      }
      if (this.stateVideo=='Stop')
      {
          event.target.stopVideo();
          console.log("Stop");
      }
      
  }

  onPlayerStateChange(event) {
    //console.log(event)
    switch (event.data) {
      case window['YT'].PlayerState.PLAYING:
        if (this.cleanTime() == 0) {
          console.log('started ' + this.cleanTime());
        } else {
          console.log('playing ' + this.cleanTime())
        };
        break;
      case window['YT'].PlayerState.PAUSED:
        if (this.player.getDuration() - this.player.getCurrentTime() != 0) {
          console.log('paused' + ' @ ' + this.cleanTime());
        };
        break;
      case window['YT'].PlayerState.ENDED:
        console.log('ended ');
        break;
    };
  };

  cleanTime() {
    return Math.round(this.player.getCurrentTime())
  };

  onPlayerError(event) {
    switch (event.data) {
      case 2:
        console.log('' + this.video)
        break;
      case 100:
        break;
      case 101 || 150:
        break;
    };
  };

  

}
