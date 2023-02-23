import { OverviewFundraiser } from "./fundraiser.model";
import { OverviewGroup } from "./group.model";
import { OverviewTotalAmount } from "./total-amount.model";

export class Overview {
    overviewTotalAmount: OverviewTotalAmount[] = [];
    overviewGroup: OverviewGroup[] = [];
    oerviewFundraiser: OverviewFundraiser[] = [];
}