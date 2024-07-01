import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DocumentResponseItem } from "../../types";
import { fetchDocuments } from "./documents-process-api";

interface DocumentsState {
  documents: DocumentResponseItem[];
  loading: boolean;
}

const initialState: DocumentsState = {
  documents: [],
  loading: false,
};

const documentsSlice = createSlice({
  name: "documents",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDocuments.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchDocuments.fulfilled,
        (state, action: PayloadAction<DocumentResponseItem[]>) => {
          state.loading = false;
          state.documents = action.payload;
        }
      )
      .addCase(fetchDocuments.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default documentsSlice.reducer;
