import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.chiaki.vn/api/',
    headers: {
        'Content-Type': 'application/json',

    },
    timeout: 5000
}
);

//handle truoc request
// api.interceptors.request.use(async (config) => {
//     const token = await getAccessToken();
//     try {
//         if (token) {
//             config.headers.Authorization = token ? `Bearer ${token}` : '';
//         }
//     } catch (e) {
//         throw new Error("Config Error", e);
//     }
//     return config;
// });

//handle sau request
api.interceptors.response.use(
    async response => {
        console.info(response);
        return response;
    },
    async error => {
        return Promise.reject(error);
    },
);

const _get = async (path) => {
    const response = await api.get(path);
    return response.data;
}

const _post = async (path, body) => {
    const response = await api.post(path, body);
    return response.data;
}
// const createSuffixParam = (prefix, params) => {//tạo paramater list cho api get
//     let suffix = prefix + '?'
//     if (typeof params == 'object') {
//         Object.keys(params).forEach(item => {
//             suffix = suffix + item + '=' + params[item] + '&';
//         })
//         suffix = suffix.substring(0, suffix.length - 1);
//         // console.log("Suffix api: " + suffix)
//         return suffix
//     } else return ''
// }

export { _get, _post, api }
//note: khong bao gio export cac ham tu 1 file index.js !!!