import axios from "axios";

export const sendToTelegram = async (message: string) => {
  const TOKEN = process.env.NEXT_PUBLIC_TOKEN;
  const CHAT_ID = process.env.NEXT_PUBLIC_CHAT_ID;
  const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  await axios.post(URI_API, {
    chat_id: CHAT_ID,
    parse_mode: "html",
    text: message,
  });
};
