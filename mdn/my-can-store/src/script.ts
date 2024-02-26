const productsUrl = 'assets/products.json';

type Product = {
    name: string;
    price: number;
    image: string;
    type: string;
}

enum Category {
    All = "all",
    Vegetables = "vegetables",
    Meat = "meat",
    Soup = "soup",
}

type LastFilter = {
    lastFilterCategory: Category;
    lastFilterQuery: string;
}

type IO<A> = {
    io: A;
}


function fillProductsSection(products: Product[]): IO<{}> {
    const category: HTMLSelectElement = document.querySelector('#category')!;
    const searchTerm: HTMLInputElement = document.querySelector('#searchTerm')!;
    const filterButton: HTMLButtonElement = document.querySelector('button')!;

    let lastCategoryQuery = Category.All;
    let lastSearchTermQuery = '';

    filterButton.onclick = applyProductFilter;

    function applyProductFilter(ev: MouseEvent): IO<{}> {
        ev.preventDefault();

        const searchTermQuery = searchTerm.value.trim().toLowerCase();
        const categoryQuery: Category = category.value.toLowerCase() as Category;
        if (categoryQuery === lastCategoryQuery && searchTermQuery === lastSearchTermQuery) {
            return { io: {} }
        } else {
            const filteredProducts = filterSeatchTerm(filterCategory(products, categoryQuery), searchTermQuery);
            lastCategoryQuery = categoryQuery;
            lastSearchTermQuery = searchTermQuery;
            return displayProducts(filteredProducts);
        }
    }
    return displayProducts(products);
}



function filterCategory(products: Product[], categoryQuery: Category): Product[] {
    if (categoryQuery === Category.All) {
        return products;
    } else {
        return products.filter(p => p.type === categoryQuery);
    }
}

function filterSeatchTerm(products: Product[], searchTermQuery: string): Product[] {
    if (searchTermQuery === '') {
        return products;
    } else {
    return products.filter(p => p.name.includes(searchTermQuery));
    }
}

function displayProducts(products: Product[]): IO<{}> {
    const main = document.querySelector('main')!;
    const para = document.createElement('p');

    clearElement(main);

    if (products.length === 0) {
        para.textContent = 'No results to display!';
        main.appendChild(para);
    } else {
        for (const product of products) {
            fetchBlob(product, main);
        }
    }
    return { io: {} };
}

function clearElement(elem: HTMLElement): IO<{}> {
    while (elem.firstChild) {
        elem.removeChild(elem.firstChild);
    }
    return { io: {} };
}

function fetchBlob(product: Product, main: HTMLElement): IO<{}> {
    const url = 'assets/images/' + product.image;

    const request = new XMLHttpRequest();
    request.open("GET",url);
    request.responseType = "blob";
    request.onload = () => {
        showProduct(request.response, product, main);
    }
    request.send();
    return { io: {} };
}

function showProduct(blob: Blob, product: Product, main: HTMLElement): IO<{}> {
    const objectURL = URL.createObjectURL(blob);
    const section = document.createElement('section');
    const heading = document.createElement('h2');
    const para = document.createElement('p');
    const image = document.createElement('img');

    section.setAttribute('class', product.type);
    image.src = objectURL;
    image.alt = product.name;
    heading.textContent = product.name.replace(product.name.charAt(0), product.name.charAt(0).toUpperCase());
    para.textContent = product.price.toFixed(2) as string;

    section.appendChild(heading);
    section.appendChild(para);
    section.appendChild(image);
    main.appendChild(section);

    return { io: {} };
}


function runScript(): IO<{}>{
    const request = new XMLHttpRequest();
    request.open("GET",productsUrl);
    request.responseType = "json";
    request.onload = () => {
        if(request.status === 200) {
            fillProductsSection(request.response);
        } else{
            console.error(`Fetch error: ${productsUrl} ${request.statusText}`);
        }
    }
    request.send();
    return {io: {}};
}

runScript();