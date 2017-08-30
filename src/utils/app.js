import MetaData from '../models/MetaData';
import {UserLogin} from '../modules/Proto/index';
import {Device, Language, Platform} from '../modules/Proto/Global_pb';
import {APP_BUILD_VERSION, APP_ID, APP_NAME, APP_VERSION} from '../constants/configs';
import {USER_LOGIN} from '../constants/methods/index';
import Api from '../modules/Api/index';

const META_USER_ID = 'userId';
const META_AUTHOR_HASH = 'authorHash';
const META_USER_TOKEN = 'userToken';

let _userId;
let _authorHash;
let _userToken;

export function getUserId() {
  return _userId;
}

export function setUserId(userId) {
  _userId = userId;
  MetaData.save(META_USER_ID, userId);
}

export async function loadUserId() {
  _userId = await MetaData.load(META_USER_ID);
}


export function getAuthorHash() {
  return _authorHash;
}

export function setAuthorHash(authorHash) {
  _authorHash = authorHash;
  MetaData.save(META_AUTHOR_HASH, authorHash);
}

export async function loadAuthorHash() {
  _authorHash = await MetaData.load(META_AUTHOR_HASH);
}


export function setUserToken(userToken) {
  MetaData.save(META_USER_TOKEN, userToken);
}

export async function loadUserToken() {
  return await MetaData.load(META_USER_TOKEN);
}


export async function login() {

  const token = await loadUserToken();

  const userLogin = new UserLogin();
  userLogin.setToken(token);
  userLogin.setAppName(APP_NAME);
  userLogin.setAppId(APP_ID);
  userLogin.setAppBuildVersion(APP_BUILD_VERSION);
  userLogin.setAppVersion(APP_VERSION);

  userLogin.setPlatform(Platform.UNKNOWN_PLATFORM);
  userLogin.setPlatformVersion('0');

  userLogin.setDevice(Device.UNKNOWN_DEVICE);
  userLogin.setDeviceName('UNKNOWN_DEVICE');
  userLogin.setLanguage(Language.FA_IR);

  return Api.invoke(USER_LOGIN, userLogin);
}