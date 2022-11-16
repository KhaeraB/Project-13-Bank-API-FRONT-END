import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  USER_SUCCESS,
  USER_FAIL,
  USER_RESET,
  USER_UPDATE,
} from "../../app/actions/actions";

//init state
const intialState = {
  isLogged: false,
  token : null,
  isSuccess: false, 
  firstName: '', 
  lastName: '' 
};

/**
 * Reducer for LoginUser With Actions 
 * @param {any} state=intialState
 * @param {any} action
 * @returns {any}
 */
export const login_reducer = (state = intialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { isLogged: true, token: action.payload.body.token };
    case LOGIN_FAIL:
      return { isLogged: false, token: null, error: action.payload };
    case LOGOUT:
      return { isLogged: false, token: null };
    default:
      return state;
  }
}



/**
 * Reducers for User Profile With Actions 
 * @param {any} state=intialState
 * @param {any} action
 * @returns {any}
 */
export const user_reducer = (state = intialState, action) => {
  switch (action.type) {
    case USER_SUCCESS:
      return {
        firstName: action.payload.body.firstName,
        lastName: action.payload.body.lastName,
      }
    case USER_UPDATE:
      return {
        isSuccess: true,
        firstName: action.payload.body.firstName,
        lastName: action.payload.body.lastName,
      }
    case USER_FAIL:
      return { error: action.payload }
    case USER_RESET:
      return {
        firstName: null,
        lastName: null,
      }
    default:
      return state
  }
}