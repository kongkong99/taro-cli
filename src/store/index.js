import demo from './demo';

const store = {
  demo
};

export default store;

window.getStore = (name) => store[name] || store;

export const useStore = (name) => store[name] || store;