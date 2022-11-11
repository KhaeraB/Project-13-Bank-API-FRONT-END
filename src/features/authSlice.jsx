import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  PROFILE_SUCCESS,
  PROFILE_FAIL,
  PROFILE_RESET,
  PROFILE_UPDATE,
} from "../actions/type";

//init token from local storage
const token = localStorage.getItem('token') ? localStorage.getItem("token") : null
//console.log(token)

const intialState = {
  isLogged: false,
  token,
  success: false, 
  firstName: '', 
  lastName: '' 
};

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



export const user_reducer = (state = intialState, action) => {
  switch (action.type) {
    case PROFILE_SUCCESS:
      return {
        firstName: action.payload.body.firstName,
        lastName: action.payload.body.lastName,
      }
    case PROFILE_UPDATE:
      return {
        success: true,
        firstName: action.payload.body.firstName,
        lastName: action.payload.body.lastName,
      }
    case PROFILE_FAIL:
      return { error: action.payload }
    case PROFILE_RESET:
      return {
        firstName: null,
        lastName: null,
      }
    default:
      return state
  }
}

