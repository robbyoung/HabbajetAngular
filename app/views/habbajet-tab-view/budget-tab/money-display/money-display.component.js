"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var budget_service_1 = require("../../../../services/budget.service");
var MoneyDisplayComponent = /** @class */ (function () {
    function MoneyDisplayComponent(budgetService) {
        this.budgetService = budgetService;
    }
    MoneyDisplayComponent.prototype.ngOnInit = function () {
        this.totalAmountString = this.budgetService.getTotalAmountString();
    };
    MoneyDisplayComponent = __decorate([
        core_1.Component({
            selector: 'money-display',
            templateUrl: 'views/habbajet-tab-view/budget-tab/money-display/money-display.html',
            styleUrls: ['views/habbajet-tab-view/budget-tab/money-display/money-display.css'],
        }),
        __metadata("design:paramtypes", [budget_service_1.BudgetService])
    ], MoneyDisplayComponent);
    return MoneyDisplayComponent;
}());
exports.MoneyDisplayComponent = MoneyDisplayComponent;
