export class OverviewTotalAmount {
  TotalAmounts: number = 0;
  GeneralTarget: number = 0
  Percentage?: string;
}


export class TotalAmount {
  totalAmounts: number = 0;
  generalTarget: number = 0


  constructor(total: OverviewTotalAmount) {
    this.totalAmounts = total.TotalAmounts;
    this.generalTarget = total.GeneralTarget;
  }
}