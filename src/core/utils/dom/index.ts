import nanoQuery from "./nanoQuery";

(function (global: any) {
  global.$ = global.nanoQuery = nanoQuery;
})(typeof window !== "undefined" ? window : this);
