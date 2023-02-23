import { Component, OnInit } from '@angular/core';
import { Group } from 'src/app/models/group.model';
import { OverviewService } from 'src/app/services/overview.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {
  groups: Group[] | undefined;

  constructor(private overviewService: OverviewService) { }

  ngOnInit(): void {
    this.overviewService.groupsChanged.subscribe((res: Group[]) => {
      this.groups = res;
    })
  }
}
