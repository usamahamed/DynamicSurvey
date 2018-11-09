import { LOCAL_STORAGE_KEY } from './constants';

export const loadState = () => {
  try {
    const savedState = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedState === null) {
      return undefined;
    }
    return JSON.parse(savedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(LOCAL_STORAGE_KEY, serializedState);
  } catch (err) {}
};
