import { useContext } from "react";
import { RouteContext } from "./routeContext";

export const useHistoryPush = () => {
  const { historyPush } = useContext(RouteContext);
  return historyPush;
};
