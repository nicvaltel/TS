import * as p from "./prelude"


type Gangsta = {
    gangstaName: string;
}

type GangstasParadise = {
    bullets: number;
    gangstars: p.List<Gangsta>;
    messages: p.List<string>;
}

function emptyGangstasParadise(bullets: number): GangstasParadise {
    return {
        bullets: bullets,
        gangstars: p.empty,
        messages: p.empty
    }
}

function addGangsta(g: Gangsta, gp: GangstasParadise): GangstasParadise {
    return {
        bullets: gp.bullets,
        gangstars: p.add(g, gp.gangstars),
        messages: gp.messages
    }
}

function shot(g: Gangsta, gp: GangstasParadise): GangstasParadise {
    if (gp.bullets > 0) {
        return {
            bullets: gp.bullets - 1,
            gangstars: gp.gangstars,
            messages: p.add(`${g} shot \t Bullets left: ${gp.bullets - 1} `, gp.messages)
        }
    } else {
        return {
            bullets: 0,
            gangstars: gp.gangstars,
            messages: p.add("no more bullets", gp.messages)
        }
    }
}


const g1: Gangsta = { gangstaName: "Bob" };
const g2: Gangsta = { gangstaName: "Jimmy" };
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
]


// function ffn(gparAct: (gp : GangstasParadise) => GangstasParadise, acc : GangstasParadise): GangstasParadise{
//     return gparAct(acc);
// }
// let actions = p.foldr(ffn ,gp0, gangstarsActions);

let applyActions = p.foldl((acc : GangstasParadise, gparAct: (gp : GangstasParadise) => GangstasParadise) => gparAct(acc) ,gp0, p.toList(gangstarsActions));
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