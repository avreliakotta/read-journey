import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer,FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from 'redux-persist';
import storage from 'redux-persist/lib/storage' 
import {authReducer} from "./auth/auth-slice";

const persistConfig = {
    key: 'users',
    storage,
    whitelist: ["token"],
  }
  const persistedAuthReducer = persistReducer(persistConfig, authReducer);
 export const store = configureStore({
    reducer:{
        users: persistedAuthReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
});

export const persistor = persistStore(store);