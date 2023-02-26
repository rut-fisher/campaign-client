import { Component, OnInit } from '@angular/core';
import { ANIMATION_DELAT_BETWWEN_GROUP_ENTER, NUM_OF_GROUPS_TO_DISPLAY } from 'src/app/consts';
import { Group } from 'src/app/models/group.model';
import { OverviewService } from 'src/app/services/overview.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {
  groups: Group[] | undefined;
  focusClass: string[] = new Array(NUM_OF_GROUPS_TO_DISPLAY / 2).fill('');

  constructor(private overviewService: OverviewService) { }

  ngOnInit(): void {
    this.overviewService.groupsChanged.subscribe((res: Group[]) => {
      this.groups = res;
    })
  }
  ngAfterViewInit() {

    this.setEnterCardAnimation();

  }

  setEnterCardAnimation() {
    for (let index = 0; index < NUM_OF_GROUPS_TO_DISPLAY / 2; index++) {
      setTimeout(() => {
        this.focusClass[index] = 'focus';
      }, ANIMATION_DELAT_BETWWEN_GROUP_ENTER * (index + 1));
    }
  }
}
