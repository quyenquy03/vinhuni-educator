const counter = {
    number: 1
};

const counterReducer = (state = counter, action) => {
    switch(action.type) {
        case "UP" :
            return {
                ...state,
                number: state.number + 1,
            };
        case "DOWN":
            return {
                ...state,
                number: state.number - 1,
            };
        default:
            return state;
    }
}
export default counterReducer