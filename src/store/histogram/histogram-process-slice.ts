import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HistogramResponse } from "../../types";
import { fetchHistograms } from "./histogram-process-api";

interface HistogramState {
  histogramData: HistogramResponse;
  loading: boolean;
}

const initialState: HistogramState = {
  histogramData: { data: [] },
  loading: false,
};

const histogramsSlice = createSlice({
  name: "histograms",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHistograms.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchHistograms.fulfilled,
        (state, action: PayloadAction<HistogramResponse>) => {
          state.loading = false;
          state.histogramData = action.payload;
        }
      )
      .addCase(fetchHistograms.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default histogramsSlice.reducer;
