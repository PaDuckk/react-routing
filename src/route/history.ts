export const historyPush = (path: string) => {
  window.history.pushState({ a: 1 }, "Title of the page", path);
};
