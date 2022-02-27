export const historyPush = (path: string) => {
  window.history.pushState("data to be passed", "Title of the page", path);
};
