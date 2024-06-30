import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "./store";
import { HistogramRequestData, HistogramResponse } from "../types";
import { BACKEND_URL, HISTOGRAMS_ENDPOINT } from "../constants";

interface HistogramState {
  histogramData: HistogramResponse;
  loading: boolean;
}

const initialState: HistogramState = {
  histogramData: { data: [] },
  loading: false,
};

export const fetchHistograms = createAsyncThunk(
  "histograms/fetchHistograms",
  async (searchData: HistogramRequestData, { getState }) => {
    const state = getState() as RootState;
    const token = state.user.accessToken;

    const requestData = {
      issueDateInterval: {
        startDate: searchData.dateFrom,
        endDate: searchData.dateTo,
      },
      searchContext: {
        targetSearchEntitiesContext: {
          targetSearchEntities: [
            {
              type: "company",
              sparkId: null,
              entityId: null,
              inn: searchData.inn.trim(),
              maxFullness: true,
              inBusinessNews: null,
            },
          ],
          onlyMainRole: true,
          tonality: searchData.tonality,
          onlyWithRiskFactors: false,
          riskFactors: {
            and: [],
            or: [],
            not: [],
          },
          themes: {
            and: [],
            or: [],
            not: [],
          },
        },
        themesFilter: {
          and: [],
          or: [],
          not: [],
        },
      },
      searchArea: {
        includedSources: [],
        excludedSources: [],
        includedSourceGroups: [],
        excludedSourceGroups: [],
      },
      attributeFilters: {
        excludeTechNews: true,
        excludeAnnouncements: true,
        excludeDigests: true,
      },
      similarMode: "duplicates",
      limit: searchData.results,
      sortType: "sourceInfluence",
      sortDirectionType: "desc",
      intervalType: "month",
      histogramTypes: ["totalDocuments", "riskFactors"],
    };

    const response = await axios.post<HistogramResponse>(
      `${BACKEND_URL}${HISTOGRAMS_ENDPOINT}`,
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
  }
);

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
