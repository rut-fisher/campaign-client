import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { OVERVIEW_INTERVAL, SERVER_URL } from '../consts';
import { Fundraiser, OverviewFundraiser } from '../models/fundraiser.model';
import { Group, OverviewGroup } from '../models/group.model';
import { Overview } from '../models/overview.model';
import { TotalAmount } from '../models/total-amount.model';

@Injectable({
  providedIn: 'root'
})
export class OverviewService {
  groupsChanged: Subject<Group[]> = new Subject();
  totalAmountChanged: Subject<TotalAmount | undefined> = new Subject();
  fundraiserChanged: Subject<Fundraiser[]> = new Subject();

  constructor(private http: HttpClient) {
    this.initOverviews();
  }

  initOverviews() {
    this.setOverViews();
    setInterval(() => {
      this.setOverViews();
    }, OVERVIEW_INTERVAL)
  }


  setOverViews() {
    this.getAllOverviews().subscribe((res: Overview) => {
      this.groupsChanged.next(res.overviewGroup?.map((g: OverviewGroup) => { return new Group(g) }))
      let totalAmount;
      if (res.overviewTotalAmount[0]) {
        totalAmount = new TotalAmount(res.overviewTotalAmount[0]);
      }
      this.totalAmountChanged.next(totalAmount)
      this.fundraiserChanged.next(res.oerviewFundraiser?.map((f: OverviewFundraiser) => { return new Fundraiser(f) }))
    })
  }

  getAllOverviews() {
    return this.http.get<Overview>(SERVER_URL + "/overview");
  }

}
