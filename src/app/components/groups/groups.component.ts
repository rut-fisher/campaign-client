import { Component, OnInit } from '@angular/core';
import { ANIMATION_DELAY_BETWWEN_GROUP_ENTER, INTERVAL_OF_REPLACE, NUM_OF_GROUPS_TO_DISPLAY } from 'src/app/consts';
import { Group } from 'src/app/models/group.model';
import { OverviewService } from 'src/app/services/overview.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {
  _groups: Group[] | undefined;

  set groups(val: Group[] | undefined) {
    this._groups = val;
    this.numOfGroupsToDisplay = Math.min(NUM_OF_GROUPS_TO_DISPLAY, this.groups?.length || 0)
  }

  public get groups(): Group[] | undefined {
    return this._groups;
  }
  replaceInterval: NodeJS.Timer | undefined;
  numOfGroupsToDisplay: number = NUM_OF_GROUPS_TO_DISPLAY;
  lastIndexOfGroup: number = 0;
  focusClass: string[] = new Array(Math.ceil(this.numOfGroupsToDisplay / 2)).fill('');

  constructor(private overviewService: OverviewService) { }

  ngOnInit(): void {
    this.overviewService.groupsChanged.subscribe((res: Group[]) => {
      this.groups = res;
    })
    this.initReplaceGroups();
  }

  initReplaceGroups() {
    this.replaceGroups();
    this.replaceInterval = setInterval(() => {
      this.replaceGroups();
    }, INTERVAL_OF_REPLACE)
  }

  replaceGroups() {
    if (this.groups) {
      let newIndexOfGroup = this.lastIndexOfGroup + this.numOfGroupsToDisplay;
      if (newIndexOfGroup > this.groups.length) {
        newIndexOfGroup = newIndexOfGroup - this.groups.length
      }
      this.initialEnterCArdAnimation()
      this.lastIndexOfGroup = newIndexOfGroup;
    }
  }

  ngAfterViewInit() {
    this.initialEnterCArdAnimation();
  }

  setEnterCardAnimation() {
    for (let index = 0; index < this.numOfGroupsToDisplay / 2; index++) {
      setTimeout(() => {
        this.focusClass[index] = 'focus';
      }, ANIMATION_DELAY_BETWWEN_GROUP_ENTER * (index + 1));
    }
  }


  initialEnterCArdAnimation() {
    this.focusClass = new Array(Math.ceil(this.numOfGroupsToDisplay / 2)).fill('');
    this.setEnterCardAnimation();
  }

  ngOnDestroy() {
    clearInterval(this.replaceInterval);
  }
}
