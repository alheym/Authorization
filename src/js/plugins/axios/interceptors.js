const lsTokenKey = 'app_token';

function setToken(req) {
    const isAuthUrl = req.url.includes('auth');
     
    if(!isAuthUrl) {
        const token = localStorage.getItem(lsTokenKey);
        req.headers['x-access-token'] = token; //заголовок к конкретному серверу
    }
    return req;
}

function setTokenOnLogin(res) {
    const isLoginUrl = res.config.url.includes('login');

    if (isLoginUrl) {
        const token = res.data.token;
        localStorage.setItem(lsTokenKey, token);
    }

    return res;
}

function getClearResponce(res) {
    return res.data;
}

function onError(err) {
    console.dir(err);
    return Promise.reject(err);
}

export default function(axios) {
    axios.interceptors.request.use(setToken);
    axios.interceptors.response.use(setTokenOnLogin);
    axios.interceptors.response.use(getClearResponce, onError);
}