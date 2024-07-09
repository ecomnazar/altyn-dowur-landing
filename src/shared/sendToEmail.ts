import emailjs from "@emailjs/browser";
import { AxiosError } from "axios";

interface Props {
  subject: string;
  message: string;
  to_email: string;
}

export const sendToEmail = async (data: Props) => {
  emailjs.init(process.env.NEXT_PUBLIC_EMAIL_USER_ID!);
  await emailjs
    .send(
      process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID!,
      {
        to_email: data.to_email,
        subject: data.subject,
        message: data.message,
      }
    )
    .then((res) => {
      console.log(res);
    })
    .catch((error: AxiosError) => {
      console.log(error);
    });
};
