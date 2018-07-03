import { Injectable } from "@angular/core";
import * as saveObject from 'application-settings';
import { HabbajetService, HabbajetInfo } from "./habbajet.service";
import * as _ from 'lodash';
import { ImageState } from "./images.service";
import { HabbajetCheckbox, CheckboxService } from "./checkbox.service";
import { PurchaseRecord } from "./budget.service";
import * as Moment from "moment";

@Injectable()
export class SavingService {
    constructor(private checkboxService: CheckboxService) {}

    public saveHabbajetList(habbajetList: any[]) {
        _.each(habbajetList, (habbajet, index) => {
            if(habbajet !== undefined) {
                this.saveHabbajet(habbajet.name, habbajet.info, habbajet.image, habbajet.checkboxes, index);
            }
        });
    }

    public saveHabbajet(name: string, info: HabbajetInfo, image: ImageState, checkboxes: HabbajetCheckbox[], index: number) {
        saveObject.setString(`hName${index}`, name);
        saveObject.setNumber(`hState${index}`, image.state);
        saveObject.setString(`hColor${index}`, image.color);
        this.saveHabbajetInfo(info, index);
        this.saveHabbajetCheckboxes(checkboxes, index);
    }

    private saveHabbajetInfo(info: HabbajetInfo, index: number) {
        saveObject.setNumber(`hStreak${index}`, info.streak);
        saveObject.setNumber(`hValue${index}`, info.value);
        saveObject.setNumber(`hFactor${index}`, info.factor);
        saveObject.setNumber(`hSlack${index}`, info.slack);
    }

    private saveHabbajetCheckboxes(checkboxes: HabbajetCheckbox[], index: number) {
        _.each(checkboxes, (c, i) => {
            saveObject.setNumber(`hCheckbox${i}${index}`, c.checkmark);
        });
        saveObject.setString(`hWeekStart${index}`, checkboxes[0].moment.format('dddd Do MMM'));
    }

    public loadHabbajetList(habbajetService: HabbajetService) {
        let index = 0;
        while(saveObject.hasKey(`hName${index}`)) {
            const name = saveObject.getString(`hName${index}`);
            const state = saveObject.getNumber(`hState${index}`);
            const color = saveObject.getString(`hColor${index}`);
            const streak = saveObject.getNumber(`hStreak${index}`);
            const value = saveObject.getNumber(`hValue${index}`);
            const factor = saveObject.getNumber(`hFactor${index}`);
            const slack = saveObject.getNumber(`hSlack${index}`);

            const checkboxes = this.checkboxService.getCurrentWeek();
            _.each(checkboxes, (c, i) => {
                c.checkmark = saveObject.getNumber(`hCheckbox${i}${index}`);
            });
            const startOfWeek = saveObject.getString(`hWeekStart${index}`);
            
            habbajetService.newHabbajetFromSave(name, state, value, factor, slack, color, streak, checkboxes, startOfWeek);

            index++;
        }
    }

    public saveBudget(budget: number) {
        saveObject.setNumber('budget', budget);
    }

    public loadBudget(): number {
        if(saveObject.hasKey('budget')) {
            return saveObject.getNumber('budget');
        } else {
            return 0;
        }
    }

    public savePurchases(purchases: PurchaseRecord[]) {
        _.each(purchases, (purchase, index) => {
            saveObject.setString(`pName${index}`, purchase.name);
            saveObject.setString(`pCost${index}`, purchase.cost);
            saveObject.setNumber(`pDate${index}`, purchase.date);
        });
    }

    public loadPurchases(): PurchaseRecord[] {
        let index = 0;
        const purchases: PurchaseRecord[] = [];
        while(saveObject.hasKey(`pName${index}`)) {
            const date = saveObject.hasKey(`pDate${index}`) ? saveObject.getNumber(`pDate${index}`) : 0;
            purchases.push({
                name: saveObject.getString(`pName${index}`),
                cost: saveObject.getString(`pCost${index}`),
                date,
                dateString: date !== 0 ? Moment.unix(date).calendar() : '',
            });
            index++;
        }
        return purchases;
    }

}