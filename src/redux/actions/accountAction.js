import ACTION_TYPE from "@/constants/actionType"
const setAccessToken = (value) => {
    return {
        type: ACTION_TYPE.SET_ACCESS_TOKEN,
        value: value
    }
}
const setCurrentUser = (value) => {
    return {
        type: ACTION_TYPE.SET_CURRENT_USER,
        value
    }
}
const getUserInfo = () => {
    
}
export {
    setAccessToken,
    setCurrentUser,
    getUserInfo
}