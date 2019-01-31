import { Injectable } from '@angular/core';
import { frameCounts } from '../frame-counts';
import { frameRates } from '../frame-rates';

export const checkboxImagePrefix = '~/images/checkboxes/';
const ONE_SECOND = 1000;

export class ImageState {
    public frame: number;
    public action: string;
    public imageUrl: string;
    public rate: number;

    constructor(public state: number, public color: string) {
        this.state = state;
        this.frame = 0;
        this.action = 'i';
        this.refreshImageUrl();
    }

    public refreshImageUrl() {
        this.imageUrl = '~/images/habbajets/' + this.color + '/' + this.action + this.state + '-' + this.frame + '.png';
    }
}

@Injectable()
export class ImageService {
    private numActionTypes;

    constructor() {
        this.numActionTypes = 2;
    }

    public async animate(imageState: ImageState) {
        this.nextState(imageState);
        while (true) {
            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    this.nextState(imageState);
                    resolve();
                }, ONE_SECOND / imageState.rate);
            });
        }

    }

    public nextState(imageState: ImageState) {
        imageState.frame++;
        const numFrames = frameCounts(imageState.action + imageState.state);

        if (numFrames <= imageState.frame) {
            imageState.frame = 0;
            imageState.action = 'i';
            imageState.rate = frameRates(imageState.action + imageState.state);
        }

        imageState.refreshImageUrl();
    }

    public evolve(imageState: ImageState) {
        if (imageState.action !== 't') {
            imageState.action = 't';
            imageState.frame = -1;
            imageState.state = (imageState.state + 1) % 7;
            imageState.rate = frameRates(imageState.action + imageState.state);
        }
    }

    public reset(imageState: ImageState) {
        if (imageState.action !== 't') {
            imageState.action = 't';
            imageState.frame = -1;
            imageState.state = 0;
            imageState.rate = frameRates(imageState.action + imageState.state);
        }
    }

    public action(imageState: ImageState) {
        const randActionNum = Math.round(Math.random() * this.numActionTypes);
        let action = 'a';
        switch (randActionNum) {
            case 0: action = 'a'; break;
            case 1: action = 'b'; break;
        }

        if (frameCounts(action + imageState.state) > 0 && imageState.action !== 't') {
            imageState.action = action;
            imageState.frame = -1;
            imageState.rate = frameRates(imageState.action + imageState.state);
        }
    }
}
