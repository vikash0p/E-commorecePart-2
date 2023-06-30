import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import themeReducer from '../features/ThemeSlice'
import { productapi } from '../services/productApi'
import cartReducer  from '../features/CartSlice'
import storage from "redux-persist/lib/storage";
import  {persistReducer} from 'redux-persist'

const persistConfig={
    key: 'root',
    version: 1,
    storage
}

const reducer =combineReducers({
    theme : themeReducer,
    cart : cartReducer,
  
    [productapi.reducerPath]:productapi.reducer,
})

const persistedReducer=persistReducer(persistConfig,reducer)

export const store= configureStore({
    reducer :persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware( {
            serializableCheck: false
          }).concat(productapi.middleware),
    
 
});
setupListeners(store.dispatch)