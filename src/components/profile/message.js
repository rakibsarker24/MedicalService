import React, { useState } from "react";
import { json, useParams } from "react-router-dom";
import { useEffect } from "react";
import {
  FaDownload,
  FaFileAlt,
  FaPaperclip,
  FaTimesCircle,
} from "react-icons/fa";
import { IMAGE_URL, authUser, route } from "../../config";
import { isValidUrl } from "../../utils";

const initialState = {
  attachment: "",
  body: "",
};

const Message = ({ history, data, totalCount }) => {
  const params = useParams();
  const [messages, setMessages] = useState([]);

  const auth = authUser() ?? {};
  const [inputs, setInputs] = useState(initialState);

  const handelChange = (e) => {
    e.preventDefault();
    const { name, value, files } = e.target;
    setInputs((prevState) => ({
      ...prevState,
      [name]: files?.length ? files[0] : value,
    }));
  };

  const fetchMessages = async () => {
    try {
      const q = `fromId=${auth?.id}&toId=${params?.doctorId}`;
      const response = await route.get(`messages?${q}`);
      console.log(response, "res");
      response?.data && setMessages(response?.data?.rows);
    } catch (error) {
      console.log(error, "error");
    }
  };

  const submitForm = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("fromId", auth.id);
    formData.append("toId", params?.doctorId);
    formData.append("body", inputs?.body);
    formData.append("attachment", inputs?.attachment);
    // console.log(e.keyCode, 'e')
    if (e.keyCode === 13) {
      console.log(
        auth.id,
        params?.doctorId,
        inputs?.body,
        inputs?.attachment,
        "input"
      );
      try {
        let response = await route.post("messages", formData);
        console.log(response, "response");
        setInputs({ ...initialState });

        setTimeout(() => {
          fetchMessages();
        }, 500);
      } catch (error) {
        console.log(error, "error");
      }
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <>
      <div className="">
        <div className="overflow-x-auto">
          {/* <div className="flex justify-between items-center py-3 pl-2">
                        <h1 className='text-xl font-bold text-gray-600'>Messages</h1>
                    </div> */}

          <div className="p-1.5 w-100 d-inline-block align-middle">
            <div className="overflow-hidden border rounded-2">
              <div className="d-flex flex-row justify-content-between bg-white">
                <div className="w-100 px-5 d-flex flex-column justify-between">
                  <div
                    className="border d-flex flex-column-reverse mt-5 overflow-auto p-2 rounded-2"
                    style={{
                      maxHeight: "450px",
                    }}
                  >
                    {/* {JSON.stringify(messages)} */}
                    {messages &&
                      messages?.length > 0 &&
                      messages?.map((message) => (
                        <>
                          {message?.fromId === auth?.id &&
                            message?.toId === parseInt(params?.doctorId) && (
                              <div className="d-flex justify-content-end mb-4">
                                <div>
                                  <div
                                    style={{
                                      backgroundColor: "rgba(56 189 248)",
                                      borderBottomLeftRadius: "5px",
                                      borderTopLeftRadius: "5px",
                                      borderTopRightRadius: "5px",
                                    }}
                                    className="mr-2 py-3 px-4 text-white"
                                  >
                                    {isValidUrl(message?.body) ? (
                                      <a
                                        rel="noreferrer"
                                        target="_blank"
                                        href={message?.body}
                                      >
                                        {message?.body}
                                      </a>
                                    ) : (
                                      message?.body
                                    )}
                                  </div>

                                  {message?.attachment && (
                                    <div className="mt-3 flex gap-2 items-center">
                                      {["png", "jpg", "jpeg"].indexOf(
                                        message?.attachment?.split(".")[1]
                                      ) > -1 ? (
                                        <img
                                          src={`${IMAGE_URL}/messages/${message?.attachment}`}
                                          width="100"
                                          className="ml-3 rounded"
                                          alt=""
                                        />
                                      ) : (
                                        <FaFileAlt
                                          className="cursor-pointer"
                                          size="4em"
                                          color="rgb(187 191 197)"
                                        />
                                      )}
                                      <a
                                        rel="noreferrer"
                                        target="_blank"
                                        href={`${IMAGE_URL}/messages/${message?.attachment}`}
                                        download
                                      >
                                        <FaDownload
                                          className="cursor-pointer"
                                          size="1.3em"
                                          color="rgb(187 191 197)"
                                        />
                                      </a>
                                    </div>
                                  )}
                                </div>
                              </div>
                            )}

                          {message?.fromId === parseInt(params?.doctorId) &&
                            message?.toId === auth?.id && (
                              <div className="d-flex justify-content-start mb-4">
                                <div>
                                  <div 
                                  style={{
                                    backgroundColor: "rgba(156 163 175)",
                                    borderBottomRightRadius: "5px",
                                    borderTopLeftRadius: "5px",
                                    borderTopRightRadius: "5px",
                                  }}
                                  className="ml-2 py-3 px-4 text-white">
                                    {message?.body}
                                  </div>
                                  {message?.attachment && (
                                    <div className="mt-3 flex gap-2 items-center">
                                      {["png", "jpg", "jpeg"].indexOf(
                                        message?.attachment?.split(".")[1]
                                      ) > -1 ? (
                                        <img
                                          src={`${IMAGE_URL}/messages/${message?.attachment}`}
                                          width="100"
                                          className="ml-3 rounded"
                                          alt=""
                                        />
                                      ) : (
                                        <FaFileAlt
                                          className="cursor-pointer"
                                          size="4em"
                                          color="rgb(187 191 197)"
                                        />
                                      )}
                                      <a
                                        rel="noreferrer"
                                        target="_blank"
                                        href={`${IMAGE_URL}/messages/${message?.attachment}`}
                                        download
                                      >
                                        <FaDownload
                                          className="cursor-pointer"
                                          size="1.3em"
                                          color="rgb(187 191 197)"
                                        />
                                      </a>
                                    </div>
                                  )}
                                </div>
                              </div>
                            )}
                        </>
                      ))}
                  </div>

                  {inputs?.attachment && (
                    <div className="mb-3">
                      <div className="d-flex align-items-center gap-2">
                        {inputs?.attachment?.type?.split("/")[0] === "image" ? (
                          <img
                            width={80}
                            src={URL.createObjectURL(inputs?.attachment)}
                            alt="attachment"
                          />
                        ) : (
                          <FaFileAlt
                            className="cursor-pointer"
                            size="4em"
                            color="rgb(187 191 197)"
                          />
                        )}

                        <FaTimesCircle
                          onClick={() =>
                            setInputs((prevState) => ({
                              ...prevState,
                              attachment: "",
                            }))
                          }
                          className="cursor-pointer"
                          size="1.3em"
                          color="rgb(187 191 197)"
                        />
                      </div>
                    </div>
                  )}
                  <div className="py-5 d-flex align-items-center gap-3">
                    <input
                      style={{ backgroundColor: "rgb(243 244 246" }}
                      className="w-100 border py-3 px-3 rounded-2"
                      type="text"
                      name="body"
                      onChange={handelChange}
                      onKeyUp={submitForm}
                      placeholder="type your message here..."
                      value={inputs?.body}
                    />
                    <div>
                      <label htmlFor="attachment">
                        <FaPaperclip size="1.3em" color="rgb(187 191 197)" />
                      </label>
                      <input
                        id="attachment"
                        className="d-none"
                        type="file"
                        name="attachment"
                        onChange={handelChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Message;
