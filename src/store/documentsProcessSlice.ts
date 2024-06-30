// src/store/documentsSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "./store";
import {
  DocumentRequestData,
  DocumentResponseItem,
  DocumentResponse,
} from "../types";
import { BACKEND_URL, DOCUMENT_ENDPOINT } from "../constants";

interface DocumentsState {
  documents: DocumentResponseItem[];
  loading: boolean;
}

const initialState: DocumentsState = {
  documents: [],
  loading: false,
};

export const fetchDocuments = createAsyncThunk<
  DocumentResponseItem[],
  string[]
>("documents/fetchDocuments", async (ids: string[], { getState }) => {
  const state = getState() as RootState;
  const token = state.user.accessToken;

  const requestData: DocumentRequestData = {
    ids: ids,
  };

  const response = await axios.post<DocumentResponse>(
    `${BACKEND_URL}${DOCUMENT_ENDPOINT}`,
    requestData,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  console.log(response.data);
  return response.data;
});

const documentsSlice = createSlice({
  name: "documents",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDocuments.pending, (state) => {
        state.loading = true;
        console.log("fetchDocuments pending");
      })
      .addCase(
        fetchDocuments.fulfilled,
        (state, action: PayloadAction<DocumentResponseItem[]>) => {
          state.loading = false;
          state.documents = action.payload;
          console.log("fetchDocuments fulfilled", action.payload);
        }
      )
      .addCase(fetchDocuments.rejected, (state) => {
        state.loading = false;
        console.log("fetchDocuments rejected");
      });
  },
});

export default documentsSlice.reducer;
