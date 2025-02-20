import { useContext } from "react";
import { ComponentControllers } from "runner/reaction";
import { EmpertyControllers, ControllersContext } from "../contexts";

export function useControllers() {
  const schema = useContext<ComponentControllers>(ControllersContext) || EmpertyControllers
  return schema;
}