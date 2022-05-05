import { Component, OnInit } from '@angular/core';
import { LaunchesService } from '../../services/launches.service';

@Component({
  selector: 'app-launch-programs',
  templateUrl: './launch-programs.component.html',
  styleUrls: ['./launch-programs.component.css']
})
export class LunchProgramsComponent implements OnInit {

  launchDataArray = [];
  isLoading = false;

  constructor(private launchesService: LaunchesService) { }

  ngOnInit(): void {
    this.getAllLaunches();
  }

  getAllLaunches(): any{
    this.isLoading = true;
    this.launchesService.getLaunches()
      .subscribe((response: any) => {
        console.log(response);
        this.launchDataArray =  response;
        this.isLoading = false;
      }, err => {
        console.log(err);
      })
  }
}
