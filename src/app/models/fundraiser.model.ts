import {CardDetails} from "./card-details.interface"

export class OverviewFundraiser {
  ID?: number;
  TeudatZehut?: string;
  LastName?: string;
  FirstName?: string;
  WebName?: string;
  sum?: string;
  objectives?: string;
  Percent?: string;
}



export class Fundraiser implements CardDetails {
  id?: number;
  teudatZehut?: string;
  webName: string;
  sum: number = 0;
  goal: number;

  constructor(fundraiser: OverviewFundraiser) {
    this.id = fundraiser.ID;
    this.teudatZehut = fundraiser.TeudatZehut;
    this.webName = fundraiser.WebName || fundraiser.FirstName + " " + fundraiser.LastName;
    this.sum = parseInt(fundraiser.sum || "0");
    this.goal = parseInt(fundraiser.objectives || "0");
  }
}

