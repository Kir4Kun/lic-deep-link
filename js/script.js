const APP_STORE_LINK = "https://online.licmf.com/";
const PLAY_STORE_LINK =
  "https://online.licmf.com/E";

const WEB_LINK = "https://online.licmf.com/";

const APP_SCHEME = "lic-investor://";

const launchApp = (deepLink = "", fallBack = WEB_LINK) => {
  setTimeout(function () {
    window.location.replace(fallBack);
  }, 2000);

  window.open(deepLink);
};

const getDeviceOs = () => platform.os.family.toLowerCase();

const getAppInstallLink = () => {
  const deviceOs = String(platform.os.family).toLowerCase();

  if (deviceOs.includes("ios")) {
    return APP_STORE_LINK;
  }

  if (deviceOs.includes("android")) {
    return PRAY_STORE_LINK;
  }

  return WEB_LINK;
};

window.addEventListener("load", (event) => {
  const storeLink = getAppInstallLink();
  const path = window.location.pathname
  const queryString = window.location.search;

  const deepLink = APP_SCHEME + pathname + queryString;

  return launchApp(deepLink, storeLink);
});
