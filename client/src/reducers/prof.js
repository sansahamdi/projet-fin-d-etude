import {
  USER_CREATE_FAILED,
  USER_CREATE_REQUEST,
  USER_CREATE_SUCCESS,
} from '../actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case USER_CREATE_REQUEST:
      return { loading: true };
    case USER_CREATE_SUCCESS:
      return { loading: false, success: true, user: action.payload };
    case USER_CREATE_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}
