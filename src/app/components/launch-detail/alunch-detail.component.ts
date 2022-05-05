import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-launch-detail',
  templateUrl: './launch-detail.component.html',
  styleUrls: ['./launch-detail.component.css']
})
export class LaunchDetailComponent implements OnInit {

  showMe:boolean=false
  toggleTag(){
    this.showMe=!this.showMe
  }

  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    console.log(this.data);
  }
}
