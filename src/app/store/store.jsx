import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import { login_reducer, user_reducer } from '../../features/auth/authSlice'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
  key: 'root',
  storage,
}

const reducers = combineReducers({
  userDataLogin: login_reducer,
  userDataProfile: user_reducer,
})


const persistedReducer = persistReducer(persistConfig, reducers)

const middleware = [thunk]

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middleware))
)

export const persistor = persistStore(store)
export default store