import store from "../store";
export function state(name) {
    return function (target, propKey) {
        return {
            get: function () {
                return store.state[name];
            }
        };
    };
}
export function getter(name) {
    return function (target, propKey) {
        return {
            get: function () {
                return store.getters[name || propKey];
            }
        };
    };
}
export function mutation(name) {
    return function (target, propKey, descriptor) {
        descriptor.value = function (...args) {
            store.commit(name || propKey, ...args);
        };
    };
}
export function action(name) {
    return function (target, propKey, descriptor) {
        descriptor.value = function (...args) {
            store.dispatch(name || propKey, ...args);
        };
    };
}
//# sourceMappingURL=storeDecorators.js.map