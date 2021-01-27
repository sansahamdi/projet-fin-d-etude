import {
  USER_CREATE_FAILED,
  USER_CREATE_REQUEST,
  USER_CREATE_SUCCESS,
} from './types';
import axios from 'axios';

export const createUser = (user) => async (dispatch) => {
  try {
    dispatch({
      type: USER_CREATE_REQUEST,
    });

    const config = {
      headers: {
        'Content-type': 'application/json',
      },
    };

    const { data } = await axios.post('/api/prof', user, config);

    dispatch({
      type: USER_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_CREATE_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
