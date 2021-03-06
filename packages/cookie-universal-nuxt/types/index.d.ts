import { CookieSerializeOptions } from "cookie";

// augment typings of Vue.js
import "./vue";

type CookieValue = any;

interface GetOptions {
  fromRes?: boolean;
  parseJSON?: boolean;
}

interface RemoveOptions {
  path: string;
}

interface SetParams {
  name: string;
  value: CookieValue;
  opts?: CookieSerializeOptions;
}

export interface NuxtCookies {
  set: (
    name: string,
    value: CookieValue,
    opts?: CookieSerializeOptions
  ) => void;
  setAll: (cookieArray: SetParams[]) => void;
  get: (name: string, opts?: GetOptions) => CookieValue;
  getAll: (opts?: GetOptions) => CookieValue[];
  remove: (name: string, opts?: RemoveOptions) => void;
  removeAll: () => void;
}
