import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CapsulesService } from 'src/app/services/capsules.service';

@Component({
  selector: 'app-capsule',
  templateUrl: './capsule.component.html',
  styleUrls: ['./capsule.component.css']
})
export class CapsuleComponent implements OnInit {
  capsule: any;

  constructor(
    private capsuleService: CapsulesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    
    if(id != null) {
      this.capsuleService.getOneCapsule(id).toPromise().then(capsule => {
        this.capsule = capsule;
      })
    } else {
      console.log("error: capsule serial null")
    }
  }

}
