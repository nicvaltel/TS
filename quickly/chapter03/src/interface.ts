interface Product {
    id: number;
    description: string;
}

interface IProductService {
    getProducts() : Product[];
    getProductById(id: number): Product;
}

class MockProductService implements IProductService {
    getProducts(): Product[] {
        return [];
    }
    getProductById(id: number): Product {
        return {id: 0 , description : `mock product`};
    }
}

class ProductService implements IProductService {
    getProducts(): Product[] {
        return [];
    }
    getProductById(id: number): Product {
        return {id: 0 , description : `mock product`};
    }
}


function getProductService(isProduction : boolean) : IProductService{
    if(isProduction){
        return new ProductService();
    } else {
        return new MockProductService();
    }
}