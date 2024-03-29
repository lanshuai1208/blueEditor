import { IObject } from "../types/editor";

export function deepMerge(fromObj: IObject, toObj: IObject) {
  const res: object = {};

  return Array.from(
    new Set([...Object.keys(fromObj), ...Object.keys(toObj)]),
  ).reduce((prev, key) => {
    const fromHasKey = key in fromObj;
    const toHasKey = key in toObj;

    if (fromHasKey !== toHasKey) {
      prev[key] = fromHasKey ? fromObj[key] : toObj[key];
    } else {
      prev[key] = deepMerge(fromObj[key], toObj[key]);
    }

    return prev;
  }, {} as IObject);
}
