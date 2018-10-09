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
var dialog_service_1 = require("../../../services/dialog.service");
var habbajet_service_1 = require("../../../services/habbajet.service");
var HabbajetInfoModalComponent = /** @class */ (function () {
    function HabbajetInfoModalComponent(dialogService, habbajetService) {
        this.dialogService = dialogService;
        this.habbajetService = habbajetService;
        var habbajetId = this.dialogService.activeHabbajetId;
        this.info = this.habbajetService.getHabbajetInfo(habbajetId);
        this.buttonClass = 'button ' + this.habbajetService.getHabbajetColor(habbajetId);
    }
    HabbajetInfoModalComponent.prototype.onEditTap = function () {
        this.dialogService.fadeOut();
    };
    HabbajetInfoModalComponent.prototype.onDeleteTap = function () {
        this.dialogService.deleteHabbajetDialog();
    };
    HabbajetInfoModalComponent = __decorate([
        core_1.Component({
            selector: 'habbajet-info-modal',
            templateUrl: 'views/modal/habbajet-info-modal/habbajet-info-modal.html',
            styleUrls: ['views/modal/habbajet-info-modal/habbajet-info-modal.css',
                'app.css'],
        }),
        __metadata("design:paramtypes", [dialog_service_1.DialogService, habbajet_service_1.HabbajetService])
    ], HabbajetInfoModalComponent);
    return HabbajetInfoModalComponent;
}());
exports.HabbajetInfoModalComponent = HabbajetInfoModalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFiYmFqZXQtaW5mby1tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJoYWJiYWpldC1pbmZvLW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUEwQztBQUUxQyxtRUFBaUU7QUFDakUsdUVBQW1GO0FBU25GO0lBSUksb0NBQW9CLGFBQTRCLEVBQVUsZUFBZ0M7UUFBdEUsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDdEYsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztRQUN2RCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDckYsQ0FBQztJQUVNLDhDQUFTLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBRU0sZ0RBQVcsR0FBbEI7UUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDOUMsQ0FBQztJQWhCUSwwQkFBMEI7UUFQdEMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxxQkFBcUI7WUFDL0IsV0FBVyxFQUFFLDBEQUEwRDtZQUN2RSxTQUFTLEVBQUUsQ0FBQyx5REFBeUQ7Z0JBQ3pELFNBQVMsQ0FBQztTQUN6QixDQUFDO3lDQU1xQyw4QkFBYSxFQUEyQixrQ0FBZTtPQUpqRiwwQkFBMEIsQ0FpQnRDO0lBQUQsaUNBQUM7Q0FBQSxBQWpCRCxJQWlCQztBQWpCWSxnRUFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvZGlhbG9nLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBIYWJiYWpldEluZm8sIEhhYmJhamV0U2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2hhYmJhamV0LnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2hhYmJhamV0LWluZm8tbW9kYWwnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9tb2RhbC9oYWJiYWpldC1pbmZvLW1vZGFsL2hhYmJhamV0LWluZm8tbW9kYWwuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsndmlld3MvbW9kYWwvaGFiYmFqZXQtaW5mby1tb2RhbC9oYWJiYWpldC1pbmZvLW1vZGFsLmNzcycsXHJcbiAgICAgICAgICAgICAgICAnYXBwLmNzcyddLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEhhYmJhamV0SW5mb01vZGFsQ29tcG9uZW50IHtcclxuICAgIHB1YmxpYyBpbmZvOiBIYWJiYWpldEluZm87XHJcbiAgICBwdWJsaWMgYnV0dG9uQ2xhc3M6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRpYWxvZ1NlcnZpY2U6IERpYWxvZ1NlcnZpY2UsIHByaXZhdGUgaGFiYmFqZXRTZXJ2aWNlOiBIYWJiYWpldFNlcnZpY2UpIHtcclxuICAgICAgICBjb25zdCBoYWJiYWpldElkID0gdGhpcy5kaWFsb2dTZXJ2aWNlLmFjdGl2ZUhhYmJhamV0SWQ7XHJcbiAgICAgICAgdGhpcy5pbmZvID0gdGhpcy5oYWJiYWpldFNlcnZpY2UuZ2V0SGFiYmFqZXRJbmZvKGhhYmJhamV0SWQpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uQ2xhc3MgPSAnYnV0dG9uICcgKyB0aGlzLmhhYmJhamV0U2VydmljZS5nZXRIYWJiYWpldENvbG9yKGhhYmJhamV0SWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkVkaXRUYXAoKSB7XHJcbiAgICAgICAgdGhpcy5kaWFsb2dTZXJ2aWNlLmZhZGVPdXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25EZWxldGVUYXAoKSB7XHJcbiAgICAgICAgdGhpcy5kaWFsb2dTZXJ2aWNlLmRlbGV0ZUhhYmJhamV0RGlhbG9nKCk7XHJcbiAgICB9XHJcbn1cclxuIl19