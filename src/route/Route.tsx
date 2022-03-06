import React from "react";

type Props = {
  path: string;
  children?: React.ReactNode;
};

const Route = ({ path, children }: Props) => {
  if (path !== window.location.pathname) {
    return <></>;
  }

  return <>{children}</>;
};

export default Route;
