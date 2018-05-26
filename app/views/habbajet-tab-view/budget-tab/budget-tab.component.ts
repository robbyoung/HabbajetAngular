import { Component } from "@angular/core";
import * as _ from 'lodash';
import { BudgetService } from "../../../services/budget.service";

@Component({
    selector: "budget-tab",
    templateUrl: "views/habbajet-tab-view/budget-tab/budget-tab.html",
    styleUrls: ["views/habbajet-tab-view/budget-tab/budget-tab.css"]
})

export class BudgetTabComponent {
    public totalAmountString: {
        text: string;
    };

    constructor(private budgetService: BudgetService) {}

    ngOnInit() {
        this.totalAmountString = this.budgetService.getTotalAmountString();
    }
}