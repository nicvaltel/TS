"use strict";
const productsUrl = 'assets/products.json';
var Category;
(function (Category) {
    Category["All"] = "all";
    Category["Vegetables"] = "vegetables";
    Category["Meat"] = "meat";
    Category["Soup"] = "soup";
})(Category || (Category = {}));
function fillProductsSection(products) {
    const category = document.querySelector('#category');
    const searchTerm = document.querySelector('#searchTerm');
    const filterButton = document.querySelector('button');
    let lastCategoryQuery = Category.All;
    let lastSearchTermQuery = '';
    filterButton.onclick = applyProductFilter;
    function applyProductFilter(ev) {
        ev.preventDefault();
        const searchTermQuery = searchTerm.value.trim().toLowerCase();
        const categoryQuery = category.value.toLowerCase();
        if (categoryQuery === lastCategoryQuery && searchTermQuery === lastSearchTermQuery) {
            return { io: {} };
        }
        else {
            const filteredProducts = filterSeatchTerm(filterCategory(products, categoryQuery), searchTermQuery);
            lastCategoryQuery = categoryQuery;
            lastSearchTermQuery = searchTermQuery;
            return displayProducts(filteredProducts);
        }
    }
    return displayProducts(products);
}
function filterCategory(products, categoryQuery) {
    if (categoryQuery === Category.All) {
        return products;
    }
    else {
        return products.filter(p => p.type === categoryQuery);
    }
}
function filterSeatchTerm(products, searchTermQuery) {
    if (searchTermQuery === '') {
        return products;
    }
    else {
        return products.filter(p => p.name.includes(searchTermQuery));
    }
}
function displayProducts(products) {
    const main = document.querySelector('main');
    const para = document.createElement('p');
    clearElement(main);
    if (products.length === 0) {
        para.textContent = 'No results to display!';
        main.appendChild(para);
    }
    else {
        for (const product of products) {
            fetchBlob(product, main);
        }
    }
    return { io: {} };
}
function clearElement(elem) {
    while (elem.firstChild) {
        elem.removeChild(elem.firstChild);
    }
    return { io: {} };
}
function fetchBlob(product, main) {
    const url = 'assets/images/' + product.image;
    const request = new XMLHttpRequest();
    request.open("GET", url);
    request.responseType = "blob";
    request.onload = () => {
        showProduct(request.response, product, main);
    };
    request.send();
    return { io: {} };
}
function showProduct(blob, product, main) {
    const objectURL = URL.createObjectURL(blob);
    const section = document.createElement('section');
    const heading = document.createElement('h2');
    const para = document.createElement('p');
    const image = document.createElement('img');
    section.setAttribute('class', product.type);
    image.src = objectURL;
    image.alt = product.name;
    heading.textContent = product.name.replace(product.name.charAt(0), product.name.charAt(0).toUpperCase());
    para.textContent = product.price.toFixed(2);
    section.appendChild(heading);
    section.appendChild(para);
    section.appendChild(image);
    main.appendChild(section);
    return { io: {} };
}
function runScript() {
    const request = new XMLHttpRequest();
    request.open("GET", productsUrl);
    request.responseType = "json";
    request.onload = () => {
        if (request.status === 200) {
            fillProductsSection(request.response);
        }
        else {
            console.error(`Fetch error: ${productsUrl} ${request.statusText}`);
        }
    };
    request.send();
    return { io: {} };
}
runScript();
