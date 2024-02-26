"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.co = exports.curry = exports.foldr = exports.foldl = exports.flip = exports.reverse = exports.map = exports.fromList = exports.toList = exports.lenght = exports.concat = exports.tail = exports.head = exports.add = exports.singleton = exports.empty = exports.id = void 0;
function id(f) {
    return f;
}
exports.id = id;
// const isNode<A> = (object: any): object is List<A> => "address" in object;
function empty() {
    return {};
}
exports.empty = empty;
function singleton(element) {
    return {
        elem: element,
        next: {}
    };
}
exports.singleton = singleton;
function add(element, list) {
    return {
        elem: element,
        next: list
    };
}
exports.add = add;
function head(list) {
    if ("elem" in list) {
        return list.elem;
    }
    else {
        throw new Error(`head error: list is empty`);
    }
}
exports.head = head;
function tail(list) {
    if ("next" in list) {
        return list.next;
    }
    else {
        throw new Error(`tail error: list is empty`);
    }
}
exports.tail = tail;
function concat(list0, list1) {
    if ("next" in list0) {
        return add(list0.elem, concat(list0.next, list1));
    }
    else {
        return list1;
    }
}
exports.concat = concat;
function lenght(list) {
    if ("next" in list) {
        return 1 + lenght(list.next);
    }
    else {
        return 0;
    }
}
exports.lenght = lenght;
function toList(arr) {
    let list = {};
    for (let i = arr.length - 1; i >= 0; --i) {
        list = add(arr[i], list);
    }
    return list;
}
exports.toList = toList;
function fromList(list) {
    if (!("next" in list)) {
        return [];
    }
    else {
        var arr = new Array(lenght(list));
        let lst = list;
        let i = 0;
        while ("next" in lst) {
            arr[i] = lst.elem;
            i++;
            lst = lst.next;
        }
        return arr;
    }
}
exports.fromList = fromList;
// type mapFn = (x: number) => string;
function map(f, list) {
    if ("next" in list) {
        return add(f(list.elem), map(f, list.next));
    }
    else {
        return list;
    }
}
exports.map = map;
function reverse(list) {
    if ("next" in list) {
        return concat(reverse(list.next), singleton(list.elem));
    }
    else {
        return list;
    }
}
exports.reverse = reverse;
function flip(f) {
    return (b, a) => f(a, b);
}
exports.flip = flip;
function foldl(f, acc0, list) {
    if ("next" in list) {
        return foldl(f, f(acc0, list.elem), list.next);
    }
    else {
        return acc0;
    }
}
exports.foldl = foldl;
function foldr(f, acc0, list) {
    return foldl(flip(f), acc0, reverse(list));
}
exports.foldr = foldr;
function curry(f, a) {
    function fn(b1) {
        return f(a, b1);
    }
    return fn;
}
exports.curry = curry;
function co(g, f) {
    return (a) => g(f(a));
}
exports.co = co;
// function fromList<A>(list : List<A>): [A]{
// }
// export {List, empty, singleton, head, tail, add, concat, map, reverse, curry, co, flip, foldl, foldr, id}
// const s0 = singleton(7);
// const s1 = add(8,s0);
// const s2 = add(12,s1);
// console.log(s2);
// console.log(head(s2));
// const s3 : List<number> = {}
// // console.log(head(s3));
// const s4 : List<number> = {}
// // console.log(tail(s3));
// console.log(concat(singleton(1),singleton(2)));
// console.log(map((x) => (x*2).toString(), s2));
// const actions = map((x) => console.log(x), reverse(s2));
// console.log(concat(s1,s2));
// console.log(flip(concat)(s1,s2));
// console.log(co((x:number) => x.toString(),(x:number)=> x*2)(2));
