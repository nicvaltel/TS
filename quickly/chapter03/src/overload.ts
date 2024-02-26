class Product {
    id: number;
    description: string;

    constructor();
    constructor(id: number);
    constructor(id: number, description: string);
    constructor(id?: number, description?: string){
        if (typeof id === 'number') {
            this.id = id;
        } else {
            this.id = 0;
        }

        if (typeof description === 'string') {
            this.description = description;
        } else {
            this.description = "";
        }
    }
}