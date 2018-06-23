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
var validation_service_1 = require("../../../../services/validation.service");
var HabbajetSubmitButtonComponent = /** @class */ (function () {
    function HabbajetSubmitButtonComponent(validationService) {
        this.validationService = validationService;
    }
    HabbajetSubmitButtonComponent.prototype.ngOnInit = function () { };
    HabbajetSubmitButtonComponent.prototype.onSubmitTap = function () {
        this.validationService.submit();
    };
    HabbajetSubmitButtonComponent = __decorate([
        core_1.Component({
            selector: "habbajet-submit-button",
            templateUrl: "views/habbajet-tab-view/add-tab/habbajet-submit-button/habbajet-submit-button.html",
            styleUrls: ["views/habbajet-tab-view/add-tab/habbajet-submit-button/habbajet-submit-button.css"]
        }),
        __metadata("design:paramtypes", [validation_service_1.ValidationService])
    ], HabbajetSubmitButtonComponent);
    return HabbajetSubmitButtonComponent;
}());
exports.HabbajetSubmitButtonComponent = HabbajetSubmitButtonComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFiYmFqZXQtc3VibWl0LWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJoYWJiYWpldC1zdWJtaXQtYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUEwQztBQUUxQyw4RUFBNEU7QUFRNUU7SUFFSSx1Q0FBb0IsaUJBQW9DO1FBQXBDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7SUFBRyxDQUFDO0lBRTVELGdEQUFRLEdBQVIsY0FBVyxDQUFDO0lBRUwsbURBQVcsR0FBbEI7UUFDSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDcEMsQ0FBQztJQVJRLDZCQUE2QjtRQU56QyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLHdCQUF3QjtZQUNsQyxXQUFXLEVBQUUsb0ZBQW9GO1lBQ2pHLFNBQVMsRUFBRSxDQUFDLG1GQUFtRixDQUFDO1NBQ25HLENBQUM7eUNBSXlDLHNDQUFpQjtPQUYvQyw2QkFBNkIsQ0FTekM7SUFBRCxvQ0FBQztDQUFBLEFBVEQsSUFTQztBQVRZLHNFQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgVmFsaWRhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vLi4vc2VydmljZXMvdmFsaWRhdGlvbi5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImhhYmJhamV0LXN1Ym1pdC1idXR0b25cIixcclxuICAgIHRlbXBsYXRlVXJsOiBcInZpZXdzL2hhYmJhamV0LXRhYi12aWV3L2FkZC10YWIvaGFiYmFqZXQtc3VibWl0LWJ1dHRvbi9oYWJiYWpldC1zdWJtaXQtYnV0dG9uLmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1widmlld3MvaGFiYmFqZXQtdGFiLXZpZXcvYWRkLXRhYi9oYWJiYWpldC1zdWJtaXQtYnV0dG9uL2hhYmJhamV0LXN1Ym1pdC1idXR0b24uY3NzXCJdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgSGFiYmFqZXRTdWJtaXRCdXR0b25Db21wb25lbnQge1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHZhbGlkYXRpb25TZXJ2aWNlOiBWYWxpZGF0aW9uU2VydmljZSkge31cclxuXHJcbiAgICBuZ09uSW5pdCgpe31cclxuXHJcbiAgICBwdWJsaWMgb25TdWJtaXRUYXAoKSB7XHJcbiAgICAgICAgdGhpcy52YWxpZGF0aW9uU2VydmljZS5zdWJtaXQoKTtcclxuICAgIH1cclxufSJdfQ==