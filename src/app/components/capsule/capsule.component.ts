import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CapsulesService } from 'src/app/services/capsules.service';
import { LaunchesService } from 'src/app/services/launches.service';

@Component({
  selector: 'app-capsule',
  templateUrl: './capsule.component.html',
  styleUrls: ['./capsule.component.css']
})
export class CapsuleComponent implements OnInit {
  capsule: any;
  launches: Array<any> = [];

  constructor(
    private capsuleService: CapsulesService,
    private launchesService: LaunchesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    
    if(id != null) {
      this.capsuleService.getOneCapsule(id).toPromise().then(capsule => {
        this.capsule = capsule;

        this.capsule.missions.forEach((mission: any) => {
          console.log(mission.flight)
          this.launchesService.getOneLaunch(mission.flight).toPromise().then(launch => {
            this.launches.push(launch);
          });
        });

        console.log(this.capsule, this.launches);
      })
    } else {
      console.log("error: capsule serial null")
    }
  }

}
