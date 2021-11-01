const getFromLocalStorage = function (key, defaultValue) {
  const localStorageData = JSON.parse(localStorage.getItem(key));

  if (!localStorageData) {
    return defaultValue;
  } else {
    return localStorageData;
  }
};

const onReady = () => {
  const searchOptions = getFromLocalStorage("favourites", []);
};

$(document).ready(onReady);
