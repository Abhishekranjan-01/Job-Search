import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { requiredParameters: { inputText: "" } },
  {
    optionalParameters: {
      date_posted: { defaultValue: "all", isDefaultValueChanged: false },
      employment_types: "",
      job_requirements: "",
      remote_jobs_only: "",
    },
  },
];

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    addInputText: (state, { payload }) => {
      state[0].requiredParameters.inputText = payload;
    },
    addDatePosted: (state, { payload }) => {
      state[1].optionalParameters.date_posted.defaultValue = payload;
      state[1].optionalParameters.date_posted.isDefaultValueChanged = true;
      console.log("From FormSlice");
    },
    addEmploymentTypes: (state, { payload }) => {
      state[1].optionalParameters.employment_types = payload;
    },
    addjob_requirements: (state, { payload }) => {
      state[1].optionalParameters.job_requirements = payload;
    },
    addremote_jobs_only: (state, { payload }) => {
      state[1].optionalParameters.remote_jobs_only = payload;
    },
  },
});

export const {
  addInputText,
  addDatePosted,
  addEmploymentTypes,
  addjob_requirements,
  addremote_jobs_only,
} = formSlice.actions;

export default formSlice.reducer;
