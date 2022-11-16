import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import { login_reducer, user_reducer } from '../../features/auth/authSlice'
import storage from 'redux-persist/lib/storage'

/**
 * Allows to keep the data in the Redux datastore so that it persists over time. 
 * The user will then find his data each time he reloads his page. 
 * It will persist as long as the user doesn't logout. 
 */
const persistConfig = {
  key: 'root',
  storage,
}

const reducers = combineReducers({
  userDataLogin: login_reducer,
  userDataProfile: user_reducer,
})


/**
 * The redux-persist library provides ways to store redux 
 * state tree into some sorts of storage, and rehydrate 
 * when app is re-opened.
 * @param {any} persistConfig
 * @param {any} reducers
 * @returns {any}
 */
const persistedReducer = persistReducer(persistConfig, reducers)

const middleware = [thunk]

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middleware))
)

export const persistor = persistStore(store)
export default store