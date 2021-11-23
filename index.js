export const triggerListener = (event, detail, target = window) => {
  target.dispatchEvent(new CustomEvent(event, { detail }))
};

export const addListener = (event, callback, target = window) => {
  target.addEventListener(event, ({ detail }) => callback(detail))
};
