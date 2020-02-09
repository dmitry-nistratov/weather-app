export const saveToLocalStorage = (item, key) => {
  const options = JSON.parse(localStorage.getItem(key)) || [];

  if (!options.find(el => el === item)) {
    localStorage.setItem(key, JSON.stringify([...options, item]));
  }
};
