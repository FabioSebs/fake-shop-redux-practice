
// ACTIONS
export const setProducts = (products) => {
    return {
        type: "SET PRODUCTS",
        payload: products,
    }
}

export const selectedProduct = (products) => {
    return {
        type: "SELECT PRODUCTS",
        payload: products,
    }
}