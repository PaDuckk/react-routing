import React, { useState, useEffect, Children } from "react";

const RouteContext = React.createContext({
  tick: 0,
  historyPush: (path: string) => {},
});

const RouteProvider = ({ children }: { children: React.ReactNode }) => {
  const [tick, setTick] = useState(0);

  useEffect(() => {}, [tick]);

  const historyPush = (path: string) => {
    window.history.pushState("data to be passed", "Title of the page", path);
    console.log(path);
    setTick((before) => before + 1);
  };

  return (
    <RouteContext.Provider value={{ tick, historyPush }}>
      {children}
    </RouteContext.Provider>
  );
};

export { RouteContext, RouteProvider };
