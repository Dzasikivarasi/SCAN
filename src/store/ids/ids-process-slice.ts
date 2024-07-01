import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchObjectsIDs } from "./ids-process-api";

interface ObjectsIDsState {
  ids: string[];
  loading: boolean;
}

const initialState: ObjectsIDsState = {
  ids: [],
  loading: false,
};

const objectsIDsSlice = createSlice({
  name: "objectsIDs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchObjectsIDs.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchObjectsIDs.fulfilled,
        (state, action: PayloadAction<string[]>) => {
          state.loading = false;
          state.ids = action.payload;
        }
      )
      .addCase(fetchObjectsIDs.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default objectsIDsSlice.reducer;
