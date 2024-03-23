const logoutBEServer = async (accessToken) => {
    const res = await fetch('https://api.techschool.id.vn/api/auth/logout', {
        credentials: 'include',
        mode: 'cors',
        method: 'POST',
        headers: {
            "Content-Type" : "application/json",
            Authorization: `Bearer ${accessToken}`
        }
    }).then(res => res.json());
    return res;
}
const logoutNextServer = async() => {
    const res = await fetch('/api/auth/logout', {
        method: 'POST',
        headers: {
            "Content-Type" : "application/json",
        }
    }).then(res => res.json());
    return res;
}

const setAccessToken = async() => {
    const res = await fetch('/api/auth', {
        method: 'POST',
        body: JSON.stringify(res),
        headers: {
            "Content-Type" : "application/json"
        }
    }).then(res => res.json());
    return res;
}

export {
    logoutBEServer,
    logoutNextServer,
    setAccessToken
}
