export class Product {
    constructor(id, name, description, category, price) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.category = category;
        this.price = price;
    }
}
export class OrderLine {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
        // no statements required
    }
    get total() {
        return this.product.price * this.quantity;
    }
}
export class Order {
    constructor(initialLines) {
        this.lines = [];
        if (initialLines) {
            this.lines.push(...initialLines);
        }
    }
    addProduct(prod, quantity) {
        let index = this.lines.findIndex(ol => ol.product.id === prod.id);
        if (index > -1) {
            if (quantity === 0) {
                this.removeProduct(prod.id);
            }
            else {
                this.lines[index].quantity += quantity;
            }
        }
        else {
            this.lines.push(new OrderLine(prod, quantity));
        }
    }
    removeProduct(id) {
        this.lines = this.lines.filter(ol => ol.product.id !== id);
    }
    get orderLines() {
        return this.lines;
    }
    get productCount() {
        return this.lines.reduce((total, ol) => total += ol.quantity, 0);
    }
    get total() {
        return this.lines.reduce((total, ol) => total += ol.total, 0);
    }
}
//# sourceMappingURL=entities.js.map