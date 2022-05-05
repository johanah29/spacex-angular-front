import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CapsulesService } from 'src/app/services/capsules.service';

@Component({
  selector: 'app-list-capsule',
  templateUrl: './list-capsule.component.html',
  styleUrls: ['./list-capsule.component.css']
})
export class ListCapsuleComponent implements OnInit {
  listCapsules: any;

  constructor(
    private capsulesService: CapsulesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.capsulesService.getCapsules().subscribe(capsules => {
      this.listCapsules = capsules;
      console.log(capsules);
    })
  }

  redirectToCapsule(id: String): void {
    this.router.navigate(["capsule/" + id]);
  }

}
