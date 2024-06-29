import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "./store";
import { HistogramRequestData, ObjectsIDsResponse } from "../types";
import { BACKEND_URL, OBJECTSEARCH_ENDPOINT } from "../constants";

interface ObjectsIDsState {
  ids: string[];
  loading: boolean;
}

const initialState: ObjectsIDsState = {
  ids: [],
  loading: false,
};

export const fetchObjectsIDs = createAsyncThunk<string[], HistogramRequestData>(
  "objectsIDs/fetchObjectsIDs",
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
    };

    const response = await axios.post<ObjectsIDsResponse>(
      `${BACKEND_URL}${OBJECTSEARCH_ENDPOINT}`,
      requestData,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response.data);

    return response.data.items.map((item) => item.encodedId);
  }
);

const objectsIDsSlice = createSlice({
  name: "objectsIDs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchObjectsIDs.pending, (state) => {
        state.loading = true;
        console.log("fetchObjectsIDs pending");
      })
      .addCase(
        fetchObjectsIDs.fulfilled,
        (state, action: PayloadAction<string[]>) => {
          state.loading = false;
          state.ids = action.payload;
          console.log("fetchObjectsIDs fulfilled", action.payload);
        }
      )
      .addCase(fetchObjectsIDs.rejected, (state) => {
        state.loading = false;
        console.log("fetchObjectsIDs rejected");
      });
  },
});

export default objectsIDsSlice.reducer;
