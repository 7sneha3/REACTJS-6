import { configureStore } from "@reduxjs/toolkit";
import { audiusApi } from "./services/audiusApi";
import playerReducer from "./features/playerSlice";  

export const store = configureStore({
  reducer: {
    [audiusApi.reducerPath]: audiusApi.reducer,
    player: playerReducer, 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(audiusApi.middleware),
});



// errir ithun yetoe ig