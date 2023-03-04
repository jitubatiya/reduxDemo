
const initalState = {
    people: [],
    data: null,
    cartData: [],
    cartCount:0
}
const reducer = (state = initalState, action) => {
    switch (action.type) {
        case "data_change":
            return {
                ...state,
                data: action.payload
            }
        case "addCart":
            return {
                ...state,
                cartData: action.payload
            }
        case "addCartCount":
            return {
                ...state,
                cartCount: action.payload
            }
        default:
            return state
    }
}
export default reducer;
