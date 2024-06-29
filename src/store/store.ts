import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userProcessSlice";
import histogramReducer from "./histogramProcessSlice";
import objectsIDsReducer from "./objectsProcessSlice";
import documentsReducer from "./documentsProcessSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    histogram: histogramReducer,
    objectsIDs: objectsIDsReducer,
    documents: documentsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
