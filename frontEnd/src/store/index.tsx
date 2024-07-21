import { combineReducers, configureStore } from "@reduxjs/toolkit"
import category from "./category/categorySlice"
import product from "./product/productSlice"
import cart from "./cart/cartSlice"
import wishlist from "./wishlist/wishlistSlice"
import auth from './auth/authSlice'
import  order from './order/orderSlice'
import storage from "redux-persist/lib/storage";
import {persistReducer ,persistStore ,  FLUSH, REHYDRATE, PAUSE, PERSIST,  PURGE, REGISTER,} from "redux-persist"

const cartPersistConfig = {
    key : "cart",
    storage,
    whitelist:["items"]
}


const authPersistConfig = {
  key : "auth",
  storage,
  whitelist:["user", "accessToken"],
}



const rootReducer = combineReducers({
    category,
    product,
    cart : persistReducer(cartPersistConfig,cart),
    wishlist,
    auth:persistReducer(authPersistConfig,auth),
    order,
})


const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
 
})

export const persistor = persistStore(store)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;


