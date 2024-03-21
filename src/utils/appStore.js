import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import gptReducer from "./gptSlice";
import soundReducer from "./soundSlice";
import langReducer from "./langSlice";

const appStore = configureStore(
    {
        reducer: {
            user: userReducer,
            movies: moviesReducer,
            gpt: gptReducer,
            sound: soundReducer,
            language: langReducer,
        }
    }
)

export default appStore;