type Product = {
    "name" : string;
    "price" : number;
    "image" : string;
    "type" : string
  }

fetch('products.json')
    .then((response:Response) => {
        if(!response.ok){
            throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
    })
    .then(json => initialize(json))
    .catch( err => console.error(`Fetch problem: ${err.message}`));

function initialize(products: Product[]){
    const category: HTMLSelectElement = document.querySelector('#category')!;
    const searchTerm: HTMLInputElement = document.querySelector('#searchTerm')!;
    const searchButton = document.querySelector('button')!;
    const main = document.querySelector('main')!;

    let lastCategory = category.value;
    let lastSearch = '';

    
    let finalGroup: Product[] = products;
    var categoryGroup : Product[];
    updateDisplay();

    categoryGroup = [];
    finalGroup = [];

    // searchButton.addEventListener('click', selectCategory);
    searchButton.onclick = (ev) => selectCategory(ev);

    function selectCategory(ev : MouseEvent){
        ev.preventDefault();

        categoryGroup = [];
        finalGroup = [];

        if (category.value === lastCategory && searchTerm.value.trim() === lastSearch){
            return;
        } else {
            lastCategory = category.value;
            lastSearch = searchTerm.value.trim();
            if(category.value === 'All'){
                categoryGroup = products;
                selectProducts();
            } else {
                const lowerCaseType = category.value.toLowerCase();
                categoryGroup = products.filter(product => product.type === lowerCaseType);
                selectProducts();
            }
        }
    }

    function selectProducts(){
        if(searchTerm.value.trim() === ''){
            finalGroup = categoryGroup;
        } else{
            const lowerCaseSearchTerm = searchTerm.value.trim().toLocaleLowerCase();
            finalGroup = categoryGroup.filter(product => product.name.includes(lowerCaseSearchTerm))
        }
        updateDisplay();
    }



    function updateDisplay(){
        while(main.firstChild){
            main.removeChild(main.firstChild);
        }

        if (finalGroup.length === 0){
            const para = document.createElement('p');
            para.textContent = 'No results to display!';
            main.appendChild(para);
        } else{
            for(const product of finalGroup){
                fetchBlob(product);
            }
        }
    }

    function fetchBlob(product: Product){
        const url = `images/${product.image}`;
        fetch(url)
            .then(response => {
                if(!response.ok){
                    throw new Error(`HTTP error: ${response.status}`);
                }
                return response.blob();
            })
            .then(blob => showProduct(blob, product))
            .catch( err => console.error(`Fetch problem: ${err.message}`));
    }

    function showProduct(blob : Blob, product: Product){
        const objectURL = URL.createObjectURL(blob);
        const section = document.createElement('section');
        const heading = document.createElement('h2');
        const para = document.createElement('p');
        const image = document.createElement('img');

        section.setAttribute('class',product.type);
        heading.textContent = product.name.replace(product.name.charAt(0), product.name.charAt(0).toUpperCase());
        para.textContent = `$${product.price.toFixed(2)}`;

        image.src = objectURL;
        image.alt = product.name;

        main.appendChild(section);
        section.appendChild(heading);
        section.appendChild(para);
        section.appendChild(image);
    }
}