import { Component, OnInit } from '@angular/core';
import { AMOUNT_RAISERD_TEXT, FORM_TARGET_TEXT } from 'src/app/consts';
import { TotalAmount } from 'src/app/models/total-amount.model';
import { OverviewService } from 'src/app/services/overview.service';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.scss']
})
export class TotalComponent implements OnInit {

  total: TotalAmount | undefined;
  formTargetTxt: string = FORM_TARGET_TEXT;
  amountRaisedTxt: string = AMOUNT_RAISERD_TEXT;

  constructor(private overviewService: OverviewService) { }

  ngOnInit(): void {
    this.overviewService.totalAmountChanged.subscribe(res => {
      this.total = res;
    })
  }

}
