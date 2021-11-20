import Axios from "axios";
const protocol = document.location.protocol;
const hostname = document.location.hostname;
const port = 4600;
const urls = {
    products: `${protocol}//${hostname}:${port}/products`,
    orders: `${protocol}//${hostname}:${port}/orders`
};
export class HttpHandler {
    loadProducts() {
        return Axios.get(urls.products).then(response => response.data);
    }
    storeOrder(order) {
        let orderData = {
            lines: [...order.orderLines.values()].map(ol => ({
                productId: ol.product.id,
                productName: ol.product.name,
                quantity: ol.quantity
            }))
        };
        return Axios.post(urls.orders, orderData)
            .then(response => response.data.id);
    }
}
//# sourceMappingURL=httpHandler.js.map