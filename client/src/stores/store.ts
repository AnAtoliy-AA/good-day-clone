import React from "react";
import { AuthStore } from "./AuthStore";

export const stores = Object.freeze({
  authStore: new AuthStore()
});

export const storesContext = React.createContext(stores);
export const StoresProvider = storesContext.Provider;