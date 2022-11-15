import axios from "axios";
import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  USER_SUCCESS,
  USER_FAIL,
  USER_RESET,
  USER_UPDATE,
} from "../../actions/actions"

const BASE_URL = "http://localhost:3001/api/v1/user/";

// Login action

export const login = (email, password) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      BASE_URL + 'login',
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


// User's profile action

export const accessUserProfile = (token) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }

    const { data } = await axios.post(
      BASE_URL + 'profile',
      { token },
      config
    )

    dispatch({ type: USER_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: USER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

// User's update profile

export const editProfile = (token, editedFirstName, editedLastName) => async (dispatch) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }

      const { data } = await axios.put(
        BASE_URL + 'profile',
        { firstName: editedFirstName, lastName: editedLastName },
        config
      )

      dispatch({ type: USER_UPDATE, payload: data })
    } catch (error) {
      dispatch({
        type: USER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }

// Logout action

export const logout = () => async (dispatch) => {
  dispatch({ type: LOGOUT })
  dispatch({ type: USER_RESET })
}