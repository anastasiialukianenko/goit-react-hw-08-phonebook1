import { configureStore } from "@reduxjs/toolkit";

import { appReducer } from "./appReducer";
import { authReducer } from "./authReducer";

import { persistStore, persistReducer, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, FLUSH } from 'redux-persist';
import storage from 'redux-persist/lib/storage';



const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
};

export const store = configureStore({
    reducer: {
        appState: appReducer,
        authState: persistReducer(authPersistConfig, authReducer),
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    })
});

export const persistedStore = persistStore(store);