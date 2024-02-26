const input = document.querySelector("input");
const button = document.querySelector("button");
const ul = document.querySelector("ul");

function addElement(input: HTMLInputElement, ul: HTMLUListElement): void {
        const name = input.value;
        input.value = '';

        const li = document.createElement("li");
        const span = document.createElement("span");
        span.textContent = name;
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        deleteButton.onclick = () => {
            ul.removeChild(li);
            input.focus();    
        }

        li.appendChild(span);
        li.appendChild(deleteButton);
        ul.appendChild(li);        
        input.focus();
}


button!.onclick = () => addElement(input!, ul!);

input!.onkeydown = (e) => {
    if( e.key === 'Enter'){
        addElement(input!, ul!);
    }
}