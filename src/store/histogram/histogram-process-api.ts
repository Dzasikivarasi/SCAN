import axios from "axios";
import { BACKEND_URL, HISTOGRAMS_ENDPOINT } from "../../constants";
import { HistogramRequestData, HistogramResponse } from "../../types";
import { RootState } from "../store";
import { createAsyncThunk } from "@reduxjs/toolkit";

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
    return response.data;
  }
);
