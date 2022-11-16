import axios from "axios";
import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  USER_SUCCESS,
  USER_FAIL,
  USER_RESET,
  USER_UPDATE,
} from "../../app/actions/actions"

const BASE_URL = "http://localhost:3001/api/v1/user/";

/**
 *  Login action
 *  To Post Email Pwd to API to access user profile page 
 * @name API
 * @param {any} email
 * @param {any} password
 * @returns {data}
 */
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



/**
 * User's profile action
 * Access to profile page from login page with Post submit to API
 * @name API
 * @param {any} token
 * @returns {data}
 */
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


/**
 * User's update profile action 
 * @param {any} token
 * @param {any} editedFirstName
 * @param {any} editedLastName
 * @returns {any}
 */
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

/**
 * Logout action
 * @returns {dispatch:Type}
 */
export const logout = () => async (dispatch) => {
  dispatch({ type: LOGOUT })
  dispatch({ type: USER_RESET })
}