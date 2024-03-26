class HttpError extends Error {
    status
    payload
    constructor({status, payload}) {
        super('Http Error')
        this.status = status
        this.payload = payload
    }
}
const BACKEND_ENDPOINT = process.env.BACKEND_ENDPOINT;

const request = async(method, url, options) => {
    const body = options.body ? JSON.stringify(options.body) : undefined;
    const baseHeader = {
        "Content-Type" : "application/json",
    }
    const baseUrl = options?.baseUrl === undefined ? BACKEND_ENDPOINT : options.baseUrl ;
    const fullUrl = url.startsWith('/') ? `${baseUrl}${url}` : `${baseUrl}/${url}`;

    const res = await fetch(fullUrl, {
        ...options,
        headers: {
            ...baseHeader,
            ...options?.headers
        },
        body,
        method
    })
    const data = await res.json();
    // if(!res.ok) {
    //     throw data;
    // }
    return data;
}

const http = {
    get(url, options) {
        return request('GET', url, options);
    },
    post(url, body, options) {
        return request('POST', url, {...options, body});
    },
    put(url, body, options) {
        return request('PUT', url, {...options, body});
    },
    delete(url, body, options) {
        return request('DELETE', url, {...options, body});
    },
}
export default http