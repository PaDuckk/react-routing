import React, { useEffect, useState } from "react";
import Account from "./page/Account";
import Root from "./page/Root";
import Route from "./route/Route";
import { useHistoryPush } from "./route/useRouteState";

function App() {
  const historyPush = useHistoryPush();

  const handleBtnClick = (path: string) => {
    historyPush(path);
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => handleBtnClick("/")}> go Root </button>
        <button
          onClick={() => {
            handleBtnClick("/account");
          }}
        >
          go AccountPage
        </button>
      </header>
      <Route path="/">
        <Root />
      </Route>
      <Route path="/account">
        <Account />
      </Route>
    </div>
  );
}

export default App;
