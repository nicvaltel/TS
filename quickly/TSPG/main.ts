import * as dev from "./devices.js"
import {SmartWatch, Salam} from "./smartwatch.js";
// import Salam from "./smartwatch.js";

let iphone : dev.Phone = new dev.Phone("iPhone X");
dev.makeCall(iphone);

let watch : SmartWatch = new SmartWatch("Apple Watch 2");
watch.printModel();

let salam : Salam = new Salam("Aleykhum!");
salam.printModel();