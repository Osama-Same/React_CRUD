import axios from "axios";
import { toast } from "react-toastify";
const url = "https://outstanding-hare-sweater.cyclic.app/";

export async function _insertUser(user) {
    const res = await axios.post(url + "users", user);
    if (res.data.error) {
      toast.error(`${res.data.error}`);
      return res.data.error;
    } else if (res.data.err) {
      toast.error(`${res.data.err}`);
      return res.data.err;
    } else {
      toast(`${res.data.result}`);
      return res.data.result;
    }
  }