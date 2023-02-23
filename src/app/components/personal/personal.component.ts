import { Component, OnInit } from '@angular/core';
import { Fundraiser } from 'src/app/models/fundraiser.model';
import { OverviewService } from 'src/app/services/overview.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {
  personals: Fundraiser[] | undefined;

  constructor(private overviewService: OverviewService) { }

  ngOnInit(): void {
    this.overviewService.fundraiserChanged.subscribe((res: Fundraiser[]) => {
      this.personals = res;
    })
  }

}
