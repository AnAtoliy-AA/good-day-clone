import { TasksStore } from './TaskArrayStore';
import React from "react";
import { AuthStore } from "./AuthStore";

export const stores = Object.freeze({
  authStore: new AuthStore(),
  tasksStore: new TasksStore()
});

export const storesContext = React.createContext(stores);
export const StoresProvider = storesContext.Provider;