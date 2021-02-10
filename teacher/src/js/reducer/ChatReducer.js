import {
  CHAT_FAIL,
  CHAT_SUCCES,
  POST_MSG,
  CHAT_PROF_SUCCES,
  CHAT_PROF_FAIL,
} from "../action/Type";

const initialState = {
  chats: [],
  loading: true,
  profChat: null,
  counter:0,
};

const reducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case CHAT_SUCCES:
      return { ...state, chats: payload, loading: false };
    case CHAT_FAIL:
      return { ...state, chats: null, loading: false };

    case POST_MSG:
      return {
        ...state,
        chats: state.chats.map((chats) =>
          chats._id === payload.chatId ? { ...chats, msg: payload.msg } : chats
        ),

        loading: false,
      };
    case "GETMESSAGES":
      return {
        ...state,
        chats: state.chats.map((chats) =>
          (chats.owner._id===payload.owner ||chats.to._id===payload.owner  ) &&
          (chats.to._id === payload.to || chats.owner._id === payload.to)
            ? { ...chats, msg: [...chats.msg, payload] }
            : chats
        ),
        loading: false,
        counter:state.counter+1
      };
    case CHAT_PROF_SUCCES:
      return { ...state, profChat: payload };
    case CHAT_PROF_FAIL:
      return { ...state, profChat: [] };
    default:
      return state;
  }
};

export default reducer;
