import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postMessageChat } from "../../js/action/ChatAction";
import Modal from "react-modal";

const SendMessageProf = ({ profId }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const profChat = useSelector((state) => state.userChat.profChat);
  const [form, setForm] = useState({
    text: "",
  });

  const dispatch = useDispatch();
  const chatId = "000000000000000000000000";
  const onSubmit = (e) => {
    e.preventDefault();
    if (profChat.length > 0) {
      profChat.forEach((chat) => {
        dispatch(postMessageChat(chat._id, profId, form));
      });
    } else {
      dispatch(postMessageChat(chatId, profId, form));
    }
    setForm({
      text: "",
    });
    setModalIsOpen(false);
  };

  return (
    <div>
      <i
        className="fas fa-envelope link-msg"
        onClick={() => setModalIsOpen(true)}
      ></i>
      <Modal
        isOpen={modalIsOpen}
        shouldCloseOnOverlayClick={false}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: { backgroundColor: "rgba(0,0,0,0.2)" },
          content: {
            width: "50%",
            height: "50%",
            margin: "0 auto",
            marginTop: "50px",
          },
        }}
      >
        <form onSubmit={onSubmit}>
          <div>
            <div className="card gedf-card" style={{ padding: "2rem" }}>
              <div className="card-header">
                <ul className="nav nav-tabs card-header-tabs">
                  <li className="nav-item"></li>
                </ul>
              </div>
              <div className="card-body">
                <div className="tab-content">
                  <div className="tab-pane fade show active">
                    <div className="form-group">
                      <label className="sr-only" for="message">
                        post
                      </label>
                      <textarea
                        className="form-control"
                        id="message"
                        rows="3"
                        onChange={(e) =>
                          setForm({ ...form, text: e.target.value })
                        }
                        value={form.text}
                        placeholder="....."
                      ></textarea>
                    </div>
                  </div>
                  <div className="tab-pane fade">
                    <div className="form-group">
                      <div className="custom-file">
                        <input type="file" className="custom-file-input" />
                        <label className="custom-file-label" for="customFile">
                          Upload image
                        </label>
                      </div>
                    </div>
                    <div className="py-4"></div>
                  </div>
                </div>
                <div className="btn-toolbar justify-content-between">
                  <div className="btn-group">
                    <button type="submit" className="btn btn-primary btn-block">
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default SendMessageProf;
