const verseChoose = document.querySelector("select")!;
const poemDisplay = document.querySelector("pre")!;

verseChoose.onchange = () => updateDisplay(verseChoose.value);

function updateDisplay(verse: string):void{
    const url = verse.replace(" ","").toLowerCase() + ".txt";
    const request = new XMLHttpRequest();
    
    request.open("GET", url);
    request.responseType = "text";
    request.onload = function() {
        poemDisplay.textContent = request.response;
    }
    request.send();
}

updateDisplay("Verse 1");
verseChoose.value = "Verse 1";