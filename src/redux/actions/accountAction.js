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
const fetchUserAvatar = (value) => {
    return {
        type: ACTION_TYPE.UPDATE_USER_AVATAR,
        value
    }
}
export {
    setAccessToken,
    setCurrentUser,
    fetchUserAvatar
}