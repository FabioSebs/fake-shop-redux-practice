// STATE
const initialState = {
    products: [],
};

//REDUCER 
export const productReducer = (state = initialState, action) => {
    //OUR ACTION OBJECTS DEPEND WHAT WERE GONNA DO WITH THE STATE
    switch (action.type) {
        //FOR THE RETURN WE CAN SPREAD THE INITIAL STATE AND THEN ADD THE GLOBAL STATE IN THE STORE
        case "SET PRODUCTS":
            return { ...state, products: action.payload };

        case "SELECT PRODUCTS":
            return state;

        case "REMOVE PRODUCTS":
            return state;

        default:
            return state;
    }
}