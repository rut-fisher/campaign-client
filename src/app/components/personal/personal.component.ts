import { Component, OnInit } from '@angular/core';
import { INTERVAL_OF_REPLACE, NUM_OF_PERSONALS_TO_DISPLAY } from 'src/app/consts';
import { Fundraiser } from 'src/app/models/fundraiser.model';
import { OverviewService } from 'src/app/services/overview.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {

  _personals: Fundraiser[] | undefined;

  set personals(val: Fundraiser[] | undefined) {
    this._personals = val;
    this.numOfPersonalToDisplay = Math.min(NUM_OF_PERSONALS_TO_DISPLAY, this._personals?.length || 0)
  }

  public get personals(): Fundraiser[] | undefined {
    return this._personals;
  }

  numOfPersonalToDisplay = NUM_OF_PERSONALS_TO_DISPLAY;
  lastIndexOfPersonal: number = 0;
  replaceInterval: NodeJS.Timer | undefined;

  constructor(private overviewService: OverviewService) { }

  ngOnInit(): void {
    this.overviewService.fundraiserChanged.subscribe((res: Fundraiser[]) => {
      this.personals = res;
    })
    this.initReplacePersonals()
  }


  initReplacePersonals() {
    this.replacePersonals();
    this.replaceInterval = setInterval(() => {
      this.replacePersonals();
    }, INTERVAL_OF_REPLACE)
  }

  replacePersonals() {
    if (this.personals) {
      let newIndexOfGroup = this.lastIndexOfPersonal + this.numOfPersonalToDisplay;
      if (newIndexOfGroup > this.personals.length) {
        newIndexOfGroup = newIndexOfGroup - this.personals.length
      }
      this.lastIndexOfPersonal = newIndexOfGroup;
    }
  }


  ngOnDestroy() {
    clearInterval(this.replaceInterval);
  }

}
