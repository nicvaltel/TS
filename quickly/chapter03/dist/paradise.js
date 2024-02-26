"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const p = __importStar(require("./prelude"));
function emptyGangstasParadise(bullets) {
    return {
        bullets: bullets,
        gangstars: p.empty,
        messages: p.empty
    };
}
function addGangsta(g, gp) {
    return {
        bullets: gp.bullets,
        gangstars: p.add(g, gp.gangstars),
        messages: gp.messages
    };
}
function shot(g, gp) {
    if (gp.bullets > 0) {
        return {
            bullets: gp.bullets - 1,
            gangstars: gp.gangstars,
            messages: p.add(`${g} shot \t Bullets left: ${gp.bullets - 1} `, gp.messages)
        };
    }
    else {
        return {
            bullets: 0,
            gangstars: gp.gangstars,
            messages: p.add("no more bullets", gp.messages)
        };
    }
}
const g1 = { gangstaName: "Bob" };
const g2 = { gangstaName: "Jimmy" };
const gp0 = emptyGangstasParadise(100);
let gp1 = addGangsta(g1, gp0);
let gp2 = addGangsta(g2, gp1);
let gp3 = shot(g1, gp2);
let gp4 = shot(g2, gp3);
console.log(gp4);
const gangstarsActions = [
    p.curry(addGangsta, g1),
    p.curry(addGangsta, g2),
    p.curry(shot, g1),
    p.curry(shot, g2)
];
// function ffn(gparAct: (gp : GangstasParadise) => GangstasParadise, acc : GangstasParadise): GangstasParadise{
//     return gparAct(acc);
// }
// let actions = p.foldr(ffn ,gp0, gangstarsActions);
let applyActions = p.foldl((acc, gparAct) => gparAct(acc), gp0, p.toList(gangstarsActions));
console.log(applyActions);
console.log(gangstarsActions[0](gp0));
// routine :: IO ()
// routine = do
//   let g1 = Gangsta "Bob"
//   let g2 = Gangsta "Jimmy"
//   let gp0 = emptyGangstasParadise 100
//   let gangstarsActions =
//         [ addGangsta g1,
//           addGangsta g2,
//           shot g1,
//           shot g2
//         ]
// --   let gpFinal = foldl (\gp action -> action gp) gp0 gangstarsActions
//   let applyActions = foldr (flip (.)) id gangstarsActions
//   mapM_ putStrLn (reverse $ messsages (applyActions gp0))
