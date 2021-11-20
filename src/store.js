import Vue from 'vue';
import Vuex from 'vuex';
import { Order } from './data/entities';
Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        products: [],
        order: new Order(),
        selectedCategory: "All",
        storedId: -1
    },
    mutations: {
        selectCategory(currentState, category) {
            currentState.selectedCategory = category;
        },
        addToOrder(currentState, selection) {
            currentState.order.addProduct(selection.product, selection.quantity);
        },
        addProducts(currentState, products) {
            currentState.products = products;
        },
        setOrderId(currentState, id) {
            currentState.storedId = id;
        },
        resetOrder(currentState) {
            currentState.order = new Order();
        }
    },
    getters: {
        categories(state) {
            return ["All", ...new Set(state.products.map(p => p.category))];
        },
        filteredProducts(state) {
            return state.products.filter(p => state.selectedCategory === "All"
                || state.selectedCategory === p.category);
        }
    },
    actions: {
        async loadProducts(context, task) {
            let data = await task();
            context.commit("addProducts", data);
        },
        async storeOrder(context, task) {
            context.commit("setOrderId", await task(context.state.order));
            context.commit("resetOrder");
        }
    }
});
//# sourceMappingURL=store.js.map