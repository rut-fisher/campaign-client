import { CardDetails } from "./card-details.interface";

export class OverviewGroup {
  AmbassadorID?: number;
  NameAmbassador?: string;
  GroupGoal?: string;
  sum?: string;
  Percent?: string;
}


export class Group implements CardDetails {
  ambassadorID?: number;
  nameAmbassador?: string;
  webName: string;
  goal: number;
  sum: number;

  constructor(group: OverviewGroup) {
    this.ambassadorID = group.AmbassadorID;
    this.nameAmbassador = group.NameAmbassador;
    this.webName = group.NameAmbassador || "";
    this.goal = parseInt(group.GroupGoal || "0");
    this.sum = parseInt(group.sum || "0");
  }
}