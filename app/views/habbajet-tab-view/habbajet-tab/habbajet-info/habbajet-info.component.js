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
var frame = require("ui/frame");
var habbajet_service_1 = require("../../../../services/habbajet.service");
var dialogs = require("ui/dialogs");
var HabbajetInfoComponent = /** @class */ (function () {
    function HabbajetInfoComponent(habbajetService) {
        this.habbajetService = habbajetService;
    }
    ;
    HabbajetInfoComponent.prototype.ngOnInit = function () {
        this.info = this.habbajetService.getHabbajetInfo(this.habbajetIndex);
        this.info.expectedPayoutUpdateCallback = this.onExpectedPayoutUpdate;
    };
    HabbajetInfoComponent.prototype.onInfoTap = function () {
        var _this = this;
        dialogs.confirm({
            title: 'More Info',
            message: "\n                Value: " + this.info.value + "\n\n                Factor: " + this.info.factor + "\n\n                Slack: " + this.info.slack + "\n\n                Streak: " + this.info.streak + "\n\n                ",
            okButtonText: 'OK',
            cancelButtonText: 'Delete',
        }).then(function (result) {
            if (result === false) {
                _this.onDeleteTap();
            }
        });
    };
    HabbajetInfoComponent.prototype.onDeleteTap = function () {
        dialogs.alert('Not implemented yet');
    };
    HabbajetInfoComponent.prototype.onExpectedPayoutUpdate = function () {
        var page = frame.topmost().currentPage;
        var expectedPayoutLabel = page.getViewById('expectedPayout');
        if (expectedPayoutLabel) {
            var NUM_ITERATIONS_1 = 20;
            var colorToReturnTo_1 = expectedPayoutLabel.color;
            expectedPayoutLabel.color = new frame.Color('#db4848');
            var deltaR_1 = (expectedPayoutLabel.color.r - colorToReturnTo_1.r) / NUM_ITERATIONS_1;
            var deltaG_1 = (expectedPayoutLabel.color.g - colorToReturnTo_1.g) / NUM_ITERATIONS_1;
            var deltaB_1 = (expectedPayoutLabel.color.b - colorToReturnTo_1.b) / NUM_ITERATIONS_1;
            var iterations_1 = 0;
            var interval_1 = setInterval(function () {
                if (iterations_1 === NUM_ITERATIONS_1) {
                    expectedPayoutLabel.color = colorToReturnTo_1;
                    clearInterval(interval_1);
                }
                else {
                    expectedPayoutLabel.color = new frame.Color(expectedPayoutLabel.color.a, expectedPayoutLabel.color.r - deltaR_1, expectedPayoutLabel.color.g - deltaG_1, expectedPayoutLabel.color.b - deltaB_1);
                }
                iterations_1++;
            }, 50);
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], HabbajetInfoComponent.prototype, "habbajetIndex", void 0);
    HabbajetInfoComponent = __decorate([
        core_1.Component({
            selector: "habbajet-info",
            templateUrl: "views/habbajet-tab-view/habbajet-tab/habbajet-info/habbajet-info.html",
            styleUrls: ["views/habbajet-tab-view/habbajet-tab/habbajet-info/habbajet-info.css"]
        }),
        __metadata("design:paramtypes", [habbajet_service_1.HabbajetService])
    ], HabbajetInfoComponent);
    return HabbajetInfoComponent;
}());
exports.HabbajetInfoComponent = HabbajetInfoComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFiYmFqZXQtaW5mby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJoYWJiYWpldC1pbmZvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUFpRDtBQUNqRCxnQ0FBa0M7QUFDbEMsMEVBQXNGO0FBRXRGLG9DQUFzQztBQVF0QztJQUlJLCtCQUFvQixlQUFnQztRQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7SUFBRyxDQUFDO0lBQUEsQ0FBQztJQUV6RCx3Q0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLElBQUksQ0FBQyw0QkFBNEIsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUM7SUFDekUsQ0FBQztJQUVELHlDQUFTLEdBQVQ7UUFBQSxpQkFnQkM7UUFmRyxPQUFPLENBQUMsT0FBTyxDQUFDO1lBQ1IsS0FBSyxFQUFFLFdBQVc7WUFDbEIsT0FBTyxFQUFFLDhCQUNBLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxvQ0FDZCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sbUNBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxvQ0FDZCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0seUJBQ3pCO1lBQ0QsWUFBWSxFQUFFLElBQUk7WUFDbEIsZ0JBQWdCLEVBQUUsUUFBUTtTQUM3QixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsTUFBTTtZQUNYLEVBQUUsQ0FBQyxDQUFDLE1BQU0sS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUNuQixLQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDdkIsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELDJDQUFXLEdBQVg7UUFDSSxPQUFPLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELHNEQUFzQixHQUF0QjtRQUNJLElBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxXQUFXLENBQUM7UUFDekMsSUFBTSxtQkFBbUIsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFTLENBQUM7UUFDdkUsRUFBRSxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLElBQU0sZ0JBQWMsR0FBRyxFQUFFLENBQUM7WUFDMUIsSUFBTSxpQkFBZSxHQUFHLG1CQUFtQixDQUFDLEtBQUssQ0FBQztZQUNsRCxtQkFBbUIsQ0FBQyxLQUFLLEdBQUcsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3ZELElBQU0sUUFBTSxHQUFHLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxpQkFBZSxDQUFDLENBQUMsQ0FBQyxHQUFHLGdCQUFjLENBQUM7WUFDbEYsSUFBTSxRQUFNLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLGlCQUFlLENBQUMsQ0FBQyxDQUFDLEdBQUcsZ0JBQWMsQ0FBQztZQUNsRixJQUFNLFFBQU0sR0FBRyxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsaUJBQWUsQ0FBQyxDQUFDLENBQUMsR0FBRyxnQkFBYyxDQUFDO1lBRWxGLElBQUksWUFBVSxHQUFHLENBQUMsQ0FBQztZQUNuQixJQUFNLFVBQVEsR0FBRyxXQUFXLENBQUM7Z0JBQ3pCLEVBQUUsQ0FBQyxDQUFDLFlBQVUsS0FBSyxnQkFBYyxDQUFDLENBQUMsQ0FBQztvQkFDaEMsbUJBQW1CLENBQUMsS0FBSyxHQUFHLGlCQUFlLENBQUM7b0JBQzVDLGFBQWEsQ0FBQyxVQUFRLENBQUMsQ0FBQztnQkFDNUIsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDSixtQkFBbUIsQ0FBQyxLQUFLLEdBQUcsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUN2QyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUMzQixtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLFFBQU0sRUFDcEMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxRQUFNLEVBQ3BDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsUUFBTSxDQUN2QyxDQUFDO2dCQUNOLENBQUM7Z0JBQ0QsWUFBVSxFQUFFLENBQUM7WUFDakIsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ1gsQ0FBQztJQUNMLENBQUM7SUEzRFE7UUFBUixZQUFLLEVBQUU7O2dFQUF1QjtJQUR0QixxQkFBcUI7UUFOakMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFdBQVcsRUFBRSx1RUFBdUU7WUFDcEYsU0FBUyxFQUFFLENBQUMsc0VBQXNFLENBQUM7U0FDdEYsQ0FBQzt5Q0FNdUMsa0NBQWU7T0FKM0MscUJBQXFCLENBNkRqQztJQUFELDRCQUFDO0NBQUEsQUE3REQsSUE2REM7QUE3RFksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCAqIGFzIGZyYW1lIGZyb20gJ3VpL2ZyYW1lJztcclxuaW1wb3J0IHsgSGFiYmFqZXRJbmZvLCBIYWJiYWpldFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vLi4vc2VydmljZXMvaGFiYmFqZXQuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcInVpL2ZyYW1lXCI7XHJcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSAndWkvZGlhbG9ncyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImhhYmJhamV0LWluZm9cIixcclxuICAgIHRlbXBsYXRlVXJsOiBcInZpZXdzL2hhYmJhamV0LXRhYi12aWV3L2hhYmJhamV0LXRhYi9oYWJiYWpldC1pbmZvL2hhYmJhamV0LWluZm8uaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCJ2aWV3cy9oYWJiYWpldC10YWItdmlldy9oYWJiYWpldC10YWIvaGFiYmFqZXQtaW5mby9oYWJiYWpldC1pbmZvLmNzc1wiXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEhhYmJhamV0SW5mb0NvbXBvbmVudCB7XHJcbiAgICBASW5wdXQoKSBoYWJiYWpldEluZGV4OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgaW5mbzogSGFiYmFqZXRJbmZvO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaGFiYmFqZXRTZXJ2aWNlOiBIYWJiYWpldFNlcnZpY2UpIHt9O1xyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuaW5mbyA9IHRoaXMuaGFiYmFqZXRTZXJ2aWNlLmdldEhhYmJhamV0SW5mbyh0aGlzLmhhYmJhamV0SW5kZXgpO1xyXG4gICAgICAgIHRoaXMuaW5mby5leHBlY3RlZFBheW91dFVwZGF0ZUNhbGxiYWNrID0gdGhpcy5vbkV4cGVjdGVkUGF5b3V0VXBkYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIG9uSW5mb1RhcCgpIHtcclxuICAgICAgICBkaWFsb2dzLmNvbmZpcm0oe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdNb3JlIEluZm8nLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogYFxyXG4gICAgICAgICAgICAgICAgVmFsdWU6ICR7dGhpcy5pbmZvLnZhbHVlfVxcblxyXG4gICAgICAgICAgICAgICAgRmFjdG9yOiAke3RoaXMuaW5mby5mYWN0b3J9XFxuXHJcbiAgICAgICAgICAgICAgICBTbGFjazogJHt0aGlzLmluZm8uc2xhY2t9XFxuXHJcbiAgICAgICAgICAgICAgICBTdHJlYWs6ICR7dGhpcy5pbmZvLnN0cmVha31cXG5cclxuICAgICAgICAgICAgICAgIGAsXHJcbiAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6ICdPSycsXHJcbiAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiAnRGVsZXRlJyxcclxuICAgICAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0ID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25EZWxldGVUYXAoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EZWxldGVUYXAoKSB7XHJcbiAgICAgICAgZGlhbG9ncy5hbGVydCgnTm90IGltcGxlbWVudGVkIHlldCcpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRXhwZWN0ZWRQYXlvdXRVcGRhdGUoKSB7XHJcbiAgICAgICAgY29uc3QgcGFnZSA9IGZyYW1lLnRvcG1vc3QoKS5jdXJyZW50UGFnZTtcclxuICAgICAgICBjb25zdCBleHBlY3RlZFBheW91dExhYmVsID0gcGFnZS5nZXRWaWV3QnlJZCgnZXhwZWN0ZWRQYXlvdXQnKSBhcyBWaWV3O1xyXG4gICAgICAgIGlmIChleHBlY3RlZFBheW91dExhYmVsKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IE5VTV9JVEVSQVRJT05TID0gMjA7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yVG9SZXR1cm5UbyA9IGV4cGVjdGVkUGF5b3V0TGFiZWwuY29sb3I7XHJcbiAgICAgICAgICAgIGV4cGVjdGVkUGF5b3V0TGFiZWwuY29sb3IgPSBuZXcgZnJhbWUuQ29sb3IoJyNkYjQ4NDgnKTtcclxuICAgICAgICAgICAgY29uc3QgZGVsdGFSID0gKGV4cGVjdGVkUGF5b3V0TGFiZWwuY29sb3IuciAtIGNvbG9yVG9SZXR1cm5Uby5yKSAvIE5VTV9JVEVSQVRJT05TO1xyXG4gICAgICAgICAgICBjb25zdCBkZWx0YUcgPSAoZXhwZWN0ZWRQYXlvdXRMYWJlbC5jb2xvci5nIC0gY29sb3JUb1JldHVyblRvLmcpIC8gTlVNX0lURVJBVElPTlM7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlbHRhQiA9IChleHBlY3RlZFBheW91dExhYmVsLmNvbG9yLmIgLSBjb2xvclRvUmV0dXJuVG8uYikgLyBOVU1fSVRFUkFUSU9OUztcclxuXHJcbiAgICAgICAgICAgIGxldCBpdGVyYXRpb25zID0gMDtcclxuICAgICAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlcmF0aW9ucyA9PT0gTlVNX0lURVJBVElPTlMpIHtcclxuICAgICAgICAgICAgICAgICAgICBleHBlY3RlZFBheW91dExhYmVsLmNvbG9yID0gY29sb3JUb1JldHVyblRvO1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBleHBlY3RlZFBheW91dExhYmVsLmNvbG9yID0gbmV3IGZyYW1lLkNvbG9yKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZFBheW91dExhYmVsLmNvbG9yLmEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkUGF5b3V0TGFiZWwuY29sb3IuciAtIGRlbHRhUixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWRQYXlvdXRMYWJlbC5jb2xvci5nIC0gZGVsdGFHLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZFBheW91dExhYmVsLmNvbG9yLmIgLSBkZWx0YUIsXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGl0ZXJhdGlvbnMrKztcclxuICAgICAgICAgICAgfSwgNTApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==