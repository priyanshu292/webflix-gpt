import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import gptReducer from "./gptSlice";
import soundReducer from "./soundSlice";

const appStore = configureStore(
    {
        reducer: {
            user: userReducer,
            movies: moviesReducer,
            gpt: gptReducer,
            sound: soundReducer,
        }
    }
)

export default appStore;