import { httpService } from "./http.service";

const sendMessageToNuncareSupport = (name, email, phone, message) => {
  const body = {
    name,
    email,
    message,
    phone,
  };

  return httpService.Axios.post("/resources/send-message-to-support", body);
};

const downloadApk = (email) => {
  const body = {
    email,
  };
  return httpService.Axios.post("/resources/download-apk", body);
};

export const appService = {
  sendMessageToNuncareSupport,
  downloadApk,
};
