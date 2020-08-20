import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

 
  // apiKey : string = 'AIzaSyCV-X6HHz471x9UHz-9uP2bIP1u0bSQNmA';
  apiKey : string = 'AIzaSyBOH5OVkKpAx5z2qHknOMraH78KyVQFsU0';
  //apiKey : string = 'AIzaSyCJGkgIeokMEwibiIVzqbygen77nZQUSbE';
  
  constructor(public http: HttpClient) { }

    getVideosForChanel(channel, maxResults): Observable<Object> {
    let url = 'https://www.googleapis.com/youtube/v3/search?key=' + this.apiKey + '&channelId=' + channel + '&order=date&part=snippet &type=video,id&maxResults=' + maxResults
    return this.http.get(url)
      .pipe(map((res) => {
        return res;
      }))
  }
}
