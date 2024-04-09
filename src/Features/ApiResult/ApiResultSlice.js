import {
  createAsyncThunk,
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
} from "@reduxjs/toolkit";
import getData from "@/API/Api";

const initialState = {
  apiResponse: [],
  page: 1,
  num_pages: 1,
  isLoading: true,
};

export const callApi = createAsyncThunk(
  "jobs/fetchJobs",
  // async (name, thunkApi) => getData(thunkApi.)
  async (name, thunkAPi) => {
    console.log("Some Thing Detectdd");
    const formSlice = thunkAPi.getState().formSlice;
    console.log("formSlice:\t", formSlice);
    const query = formSlice[0].requiredParameters.inputText;
    let date_posted = formSlice[1].optionalParameters.date_posted.defaultValue;
    let { employment_types } = formSlice[1].optionalParameters;
    let { job_requirements } = formSlice[1].optionalParameters;
    let { remote_jobs_only } = formSlice[1].optionalParameters;

    const { page, num_pages } = thunkAPi.getState().apiResponse;

    date_posted = `&date_posted=${date_posted}`;
    employment_types =
      employment_types !== "" ? `&employment_types=${employment_types}` : "";

    job_requirements =
      job_requirements !== "" ? `&job_requirements=${job_requirements}` : "";
    remote_jobs_only =
      remote_jobs_only !== "" ? `&remote_jobs_only=${remote_jobs_only}` : "";

    const filters =
      `&page=${page}` +
      `&num_pages=${num_pages}` +
      date_posted +
      employment_types +
      job_requirements +
      remote_jobs_only;

    return getData(query, filters);
  }
);

const apiResultSlice = createSlice({
  name: "apiResult",
  initialState,
  reducers: {
    incrementPage: (state, action) => {
      state.page = state.page + 1;
    },
    resetPageCount: (state, action) => {
      state.page = 1;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(isPending, (state, action) => {
      state.apiResponse = null;
      state.apiResponse = [];
      state.isLoading = true;
    });
    builder.addMatcher(isFulfilled, (state, { payload }) => {
      const temp = [...state.apiResponse];

      if (payload.data.length == 0) {
        alert("No result found");
      }
      state.apiResponse = [...temp, ...payload.data];
      state.isLoading = false;
    });
    builder.addMatcher(isRejected, (state, action) => {
      alert("Something Went Wrong");
    });
  },
});

export const { incrementPage, resetPageCount } = apiResultSlice.actions;
export default apiResultSlice.reducer;
