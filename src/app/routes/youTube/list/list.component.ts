import { Component, OnInit, ViewChild } from '@angular/core';
import { YoutubeService } from 'src/app/youtube.service';
import { DataService } from '../data.service';
import { NgbModal ,ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @ViewChild('settingsForm', {static: false}) settingsForm: NgForm;
  closeResult: string;
  videos: any[];
  firstPlay: string;
  chanel: string='UCO0RBMR9ILNLhy_mbWbF4dg';
  qty: number=10;
  constructor(private youTubeService: YoutubeService, private data:DataService, private modalService: NgbModal) { }

  ngOnInit(): void {
    
this.videos = [];
this.youTubeService
.getVideosForChanel(this.chanel, this.qty)
.subscribe(lista => {
for (let element of lista["items"]) {
this.videos.push(element);
console.log(element.id.videoId);
}
});

  }

  changeVideo(id) {
    this.data.changeVideo(id);
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  onSubmit(settingsForm: NgForm): void{
    console.log(settingsForm.controls['chanel'].value);
    console.log(settingsForm.controls['qty'].value);
    this.chanel=settingsForm.controls['chanel'].value;
    this.qty=settingsForm.controls['qty'].value;
    
    this.videos = [];
    
this.youTubeService
.getVideosForChanel(this.chanel, this.qty)
.subscribe(lista => {
for (let element of lista["items"]) {
this.videos.push(element)
}
});

    this.modalService.dismissAll('Dismissed after saving data');
  }
  
}
