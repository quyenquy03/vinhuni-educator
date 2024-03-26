import ACTION_TYPE from "@/constants/actionType";

const account = {
    accessToken:'',
    currentUser: {},
};

const accountReducer = (state = account, action) => {
    switch(action.type) {
        case ACTION_TYPE.SET_ACCESS_TOKEN:
            return {
                ...state,
                accessToken: action.value
            }
        case ACTION_TYPE.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.value
            }

        default:
            return state;
    }
}

export default accountReducer