
export function id<A,B>(f: (a:A) => B) : (a:A) => B{
    return f
}

type ListNode<A> ={
    elem : A;
    next: List<A>;
}

type EmptyNode<A> = {}

export type List<A> = ListNode<A> | EmptyNode<A>

// const isNode<A> = (object: any): object is List<A> => "address" in object;


export function empty<A>() : List<A>{
    return {};
}

export function singleton<A>(element: A): List<A>{
    return {
        elem : element,
        next: {}
    };
}


export function add<A>(element: A, list : List<A>): List<A> {
    return {
        elem: element,
        next: list
    };
}

export function head<A>(list : List<A>): A {
    if ("elem" in list) {
        return list.elem;
    } else {
        throw new Error(`head error: list is empty`);
    }
}

export function tail<A>(list : List<A>): List<A> {
    if ("next" in list) {
        return list.next;
    } else {
        throw new Error(`tail error: list is empty`);
    }
}

export function concat<A>(list0: List<A>, list1:List<A>) : List<A> {
    if ("next" in list0) {
        return add(list0.elem, concat(list0.next, list1));
    } else {
        return list1;
    }
}

export function lenght<A>(list: List<A>): number{
    if ("next" in list) {
        return 1 + lenght(list.next);
    } else {
        return 0;
    }
}

export function toList<A>(arr: A[]): List<A>{
    let list : List<A> = {};
    for (let i = arr.length - 1; i >= 0; --i) {
        list = add(arr[i],list);
      }
    return list;
}

export function fromList<A>(list: List<A>): A[]{
    if (!("next" in list)) {
        return [];
    } else {
        var arr:A[] = new Array(lenght(list));
        let lst : List<A> = list;
        let i = 0;
        while ("next" in lst){
            arr[i] = lst.elem;
            i++;
            lst = lst.next;
        }
        return arr;    
    }    
}

// type mapFn = (x: number) => string;
export function map<A,B>(f : (a:A) => B, list : List<A>): List<B> {
    if ("next" in list) {
        return add(f(list.elem), map(f,list.next));
    } else {
        return list;
    }
}

export function reverse<A>(list : List<A>): List<A>{
    if ("next" in list) {
        return concat(reverse(list.next), singleton(list.elem));
    } else {
        return list;
    }
}

export function flip<A,B,C>(f:(a: A, b: B) => C) : (b: B, a: A) => C {
    return (b: B, a: A) => f (a,b)
}

export function foldl<A,B>( f : (acc:B, x:A) => B , acc0 : B , list: List<A>) : B {
    if ("next" in list) {
        return foldl(f, f(acc0,list.elem),list.next);
    } else {
        return acc0;
    }
}

export function foldr<A,B>( f : (x:A,acc:B) => B , acc0 : B , list: List<A>) : B {
    return foldl(flip(f),acc0,reverse(list));
}

export function curry<A,B,C>(f:(a:A, b: B) => C, a : A) : (b:B) => C { 
    function fn(b1:B): C{
        return f(a,b1);
    }
    return fn;
}

export function co<A,B,C>(g: (b:B) => C, f: (a:A) => B): (a:A) => C  {
    return (a:A) => g(f(a));
}



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