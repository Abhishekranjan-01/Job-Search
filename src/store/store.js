import formSlice from "@/Features/formSlice/formSlice";
import { configureStore } from "@reduxjs/toolkit";
import apiResultSlice from "@/Features/ApiResult/ApiResultSlice";

export const store = configureStore({
  reducer: { formSlice, apiResponse: apiResultSlice },
});
