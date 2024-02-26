"use strict";
class AppState {
    constructor() {
        this.counter = 0;
    }
    static getInstance() {
        if (AppState.interfaceRef === undefined) {
            AppState.interfaceRef = new AppState();
        }
        return AppState.interfaceRef;
    }
}
// const appState = new AppState();
const appState1 = AppState.getInstance();
const appState2 = AppState.getInstance();
appState1.counter++;
appState2.counter++;
console.log(appState1);
console.log(appState2);
