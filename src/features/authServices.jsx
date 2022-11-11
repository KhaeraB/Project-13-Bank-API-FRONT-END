import axios from "axios";
import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  PROFILE_FAIL,
  PROFILE_SUCCESS,
  LOGOUT,
  PROFILE_RESET,
} from "../actions/type";

// const BASE_URL = "http://localhost:3001/api/v1/user/";

export const login = (email, password) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      "http://localhost:3001/api/v1/user/login",
      { email, password }
    );

    dispatch({ type: LOGIN_SUCCESS, payload: data });
    dispatch(accessUserProfile(data.body.token));
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload:
        error.res && error.res.data.message
          ? error.res.data.message
          : error.message,
    });
  }
};

export const accessUserProfile = (token, newFirstName, newLastName) => async (dispatch, getState) => {
    try {
      token = getState().auth.token; 
      const configuration = {
        header: {
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.post(
        "http://localhost:3001/api/v1/user/profile",
        { firstName: newFirstName, lastName: newLastName },
        configuration
      );

      dispatch({ type: PROFILE_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: PROFILE_FAIL,
        payload:
          error.res && error.res.data.message
            ? error.res.data.message
            : error.message,
      });
    }
  };

const editDataUser = (editData, token) => async (dispatch) => {
  try {
    const configuration = {
      header: {
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.put(
      "http://localhost:3001/api/v1/user/profile",
      editData,
      configuration
    );

    dispatch({ type: PROFILE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PROFILE_FAIL,
      payload:
        error.res && error.res.data.message
          ? error.res.data.message
          : error.message,
    });
  }
};
export const logout = () => async (dispatch) => {
  dispatch({ type: LOGOUT });
  dispatch({ type: PROFILE_RESET });
};
const authService = { login, accessUserProfile, editDataUser, logout };

export default authService;
