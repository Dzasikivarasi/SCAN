import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  DocumentRequestData,
  DocumentResponse,
  DocumentResponseItem,
} from "../../types";
import { RootState } from "../store";
import axios from "axios";
import { BACKEND_URL, DOCUMENT_ENDPOINT } from "../../constants";

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
  return response.data;
});
