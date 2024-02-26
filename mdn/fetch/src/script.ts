const verseChoose = document.querySelector("select")!;
const poemDisplay = document.querySelector("pre")!;

verseChoose.onchange = () => updateDisplay(verseChoose.value, poemDisplay);

function updateDisplay(verse: string, poemDisplay : HTMLPreElement):void{
    const url = verse.replace(" ","").toLowerCase() + ".txt";

    fetch(url).then((response: Response) => {
        response.text().then((text: string) => poemDisplay.textContent = text)
    });

    // myFetch(url)((txt: string) => poemDisplay.textContent = txt);

}

// function myFetch(url: string): (func:(txt: string) => void) => void{
//     const request = new XMLHttpRequest();
//     request.open("GET", url);
//     request.responseType = "text";

//     return (fn:(txt: string) => void) => {
//         request.onload = () => fn(request.response);
//         request.send();
//     };
// }

// function myFetch(url: string): (func:(txt: string) => void) => void {
//     return curry(myFetch2, url);
// }

// function myFetch2(url: string, fn:(txt: string) => void):  void{
//     const request = new XMLHttpRequest();
//     request.open("GET", url);
//     request.responseType = "text";
//     request.onload = () => fn(request.response);
//     request.send();
// }

function curry<A,B,C>(fn:(a:A, b:B)=> C, a: A): (b:B) => C{
    return (b: B) => fn(a,b);
}

updateDisplay("Verse 1", poemDisplay);
verseChoose.value = "Verse 1";