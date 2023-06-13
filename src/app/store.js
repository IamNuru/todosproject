import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import todoListReducer from "../features/todo/slices/todoListSlice";
import { todoListApi } from "../features/todo/slices/todoListApi";

export const store = configureStore({
  reducer: {
    todolist: todoListReducer,
    [todoListApi.reducerPath]: todoListApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([todoListApi.middleware]),
});

setupListeners(store.dispatch);
