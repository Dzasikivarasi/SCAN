import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/user-process-slice";
import histogramReducer from "./histogram/histogram-process-slice";
import objectsIDsReducer from "./ids/ids-process-slice";
import documentsReducer from "./documents/documents-process-slice";

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
