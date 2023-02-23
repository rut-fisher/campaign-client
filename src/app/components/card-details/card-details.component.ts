import { Component, Input, OnInit } from '@angular/core';
import { CardDetails } from 'src/app/models/card-details.interface';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent implements OnInit {
  @Input() cardDetails: CardDetails | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
