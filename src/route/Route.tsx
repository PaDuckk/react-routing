import React from "react";

type Props = {
  path: string;
  children?: React.ReactNode;
};

const Route = ({ path, children }: Props) => {
  console.log({ path, pn: window.location.pathname });

  if (path !== window.location.pathname) {
    return <></>;
  }

  console.log("rendered", { path });
  return <>{children}</>;
};

export default Route;
