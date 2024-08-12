import axios from "axios";
import { useState } from "react";
import { BsLightningChargeFill } from "react-icons/bs";
import {
  FaCaretDown,
  FaEye,
  FaImage,
  FaRegSmile,
  FaUserMinus,
} from "react-icons/fa";
import { IoMdCode } from "react-icons/io";
import { IoLinkSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { TbSquareLetterA } from "react-icons/tb";

function CustomMail({ threadId, onClose }: any) {
  const [replyData, setReplyData] = useState({
    to: "",
    from: "",
    subject: "",
    body: "",
  });

  const handleSendReply = async () => {
    const token = localStorage.getItem("token");
    try {
      await axios.post(
        `https://hiring.reachinbox.xyz/api/v1/onebox/reply/${threadId}`,
        {
          to: replyData.to,
          from: replyData.from,
          subject: replyData.subject,
          body: replyData.body,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      console.log("Reply sent successfully");
      onClose();
    } catch {
      console.log("Error sending reply");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setReplyData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setReplyData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="fixed top-0 left-0 flex justify-center items-center h-full w-full z-20 bg-black bg-opacity-50">
      <div className="bg-white dark:bg-[#1B1B1B] w-1/2 h-4/5 rounded-lg border border-gray-300 dark:border-[#41464B]">
        <div className="flex justify-between items-center px-4 bg-gray-100 dark:bg-[#2C2C2C] rounded-t-lg py-2 border-b border-gray-300 dark:border-[#41464B]">
          <div className="pl-4 text-sm text-gray-800 dark:text-gray-300">
            Reply
          </div>
          <div onClick={onClose}>
            <RxCross2 className="text-xl cursor-pointer text-gray-800 dark:text-gray-300" />
          </div>
        </div>
        <div className="flex text-sm py-2 border-b border-gray-300 dark:border-[#41464B] pl-8 dark:bg-[#1A1A1A]">
          <div className="text-gray-600 dark:text-[#BAB9BD]">To :</div>
          <input
            className="bg-transparent ml-4 text-gray-800 dark:text-gray-300 focus:outline-none focus:border-transparent"
            placeholder="Recipient's Email"
            name="to"
            value={replyData.to}
            onChange={handleInputChange}
          />
        </div>

        <div className="flex text-sm py-2 border-b border-gray-300 dark:border-[#41464B] pl-8 dark:bg-[#1A1A1A]">
          <div className="text-gray-600 dark:text-[#BAB9BD]">From :</div>
          <input
            className="bg-transparent ml-4 text-gray-800 dark:text-gray-300 focus:outline-none focus:border-transparent"
            placeholder="Your Email"
            name="from"
            value={replyData.from}
            onChange={handleInputChange}
          />
        </div>

        <div className="flex text-sm py-2 border-b border-gray-300 dark:border-[#41464B] pl-8 dark:bg-[#1A1A1A]">
          <div className="text-gray-600 dark:text-[#BAB9BD]">Subject :</div>
          <input
            className="bg-transparent ml-4 text-gray-800 dark:text-gray-300 focus:outline-none focus:border-transparent"
            placeholder="Subject"
            name="subject"
            value={replyData.subject}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex text-sm py-2 border-b border-gray-300 dark:border-[#41464B] px-4 pr-8 pt-8 h-2/3 dark:bg-[#1A1A1A]">
          <textarea
            className="bg-transparent ml-4 w-full h-full text-gray-800 dark:text-gray-300 focus:outline-none focus:border-transparent"
            placeholder="Message Body"
            name="body"
            value={replyData.body}
            onChange={handleTextAreaChange}
          />
        </div>

        <div className="flex space-x-6 items-center h-12 ml-8">
          <div
            className="bg-gradient-to-r from-[#4B63DD] to-[#0524BFFC] px-4 py-1 rounded-md flex items-center cursor-pointer text-white text-sm"
            onClick={handleSendReply}
          >
            Send <FaCaretDown className="ml-2" />
          </div>
          <div className="flex items-center text-gray-600 dark:text-[#ADADAD] text-sm">
            <BsLightningChargeFill className="mr-2" />
            Variables
          </div>
          <div className="flex items-center text-gray-600 dark:text-[#ADADAD] text-sm">
            <FaEye className="mr-2" />
            Preview Email
          </div>
          <div className="flex space-x-3 text-lg text-gray-600 dark:text-[#ADADAD]">
            <div>
              <TbSquareLetterA />
            </div>
            <div>
              <IoLinkSharp />
            </div>
            <div>
              <FaImage />
            </div>
            <div>
              <FaRegSmile />
            </div>
            <div>
              <FaUserMinus />
            </div>
            <div>
              <IoMdCode />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomMail;
