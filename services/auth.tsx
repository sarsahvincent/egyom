import Api from "./api";
import axios from "axios";
import * as Cookies from "js-cookie";
import jwt_decode from "jwt-decode";

const AUTH_TOKEN_KEY = "authToken";
const CURRENT_USER = "currentUser";
const SIGN_UP_USER = "signupUser";
const FORGOT_USER = "forgotUser";
const SET_USER_SKILL = "setUserskill";

export function loginUser(userData: any) {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve, reject) => {
    try {
      const res = await Api().post("/users/login/", userData);
      if (res.data) {
        setAuthToken(res.data.token);
        setCurrentUser(res.data);
        resolve(res);
      } else {
        reject(res);
      }
    } catch (error) {
      reject(error);
    }
  });
}

export function logoutUser() {
  clearAuthToken();
  clearCurrentUser();
}

export function setAuthToken(token: any) {
  Cookies.set(AUTH_TOKEN_KEY, token);
}

export function getAuthToken() {
  return Cookies.get(AUTH_TOKEN_KEY);
}

export function clearAuthToken() {
  axios.defaults.headers.common.Authorization = "";
  return Cookies.remove(AUTH_TOKEN_KEY);
}

export function isLoggedIn() {
  const authToken = getAuthToken();
  return !!(authToken && isTokenActive(authToken));
}
export function setCurrentUser(data: any) {
  Cookies.set(CURRENT_USER, JSON.stringify(data));
}
export function setForgotUser(data: any) {
  Cookies.set(FORGOT_USER, JSON.stringify(data));
}

export function setSignUpUser(data: any) {
  Cookies.set(SIGN_UP_USER, JSON.stringify(data));
}

export function setUserSkill(data: any) {
  Cookies.set(SET_USER_SKILL, JSON.stringify(data));
}
export function getCurrentUser() {
  return JSON.parse(Cookies.get(CURRENT_USER)!);
}

export function getSignUpUser() {
  return JSON.parse(Cookies.get(SIGN_UP_USER)!);
}

export function getForgotUser() {
  return JSON.parse(Cookies.get(FORGOT_USER)!);
}

export function clearCurrentUser() {
  return Cookies.remove(CURRENT_USER);
}
export function isSuperUser() {
  return isLoggedIn();
}
export function getUserType() {
  if (isLoggedIn()) {
    return getCurrentUser().user;
  } else {
    return [];
  }
}

function getTokenExpirationDate(encodedToken: any) {
  const token: any = jwt_decode(encodedToken);
  if (!token.exp) {
    return null;
  }
  return token.exp;
}
export function isTokenActive(token: any) {
  const expirationDate = getTokenExpirationDate(token);
  const now = Math.floor(Date.now() / 1000);
  return expirationDate > now;
}
