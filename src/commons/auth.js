import decode from "jwt-decode";

const JWT = "store_token_id";

const setToken = (token) => {
  localStorage.setItem(JWT, token);
};

const getToken = () => {
  return localStorage.getItem(JWT);
};

const isLogin = () => {
  const jwtoken = getToken();
  return !!jwtoken && isTokenExpired(jwtoken);
};

const isTokenExpired = (token) => {
  try {
    const _info = decode(token);
    if (_info.exp < Date.now() / 1000) {
      return true;
    }
    return false;
  } catch (err) {
    console.log(err);
    return false;
  }
};

const getUser = () => {
  const jwtoken = getToken();
  if (isLogin()) {
    const user = decode(jwtoken);
    return user;
  } else {
    return null;
  }
};

global.auth = {
  setToken,
  getToken,
  getUser,
};
