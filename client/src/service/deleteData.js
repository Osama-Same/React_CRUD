import axios from "axios";
import { toast } from "react-toastify";
const url = "https://outstanding-hare-sweater.cyclic.app/";

export async function _deleteUser(id) {
  const res = await axios.delete(url + `users/${id}`);
  if (res.data) {
    toast(`Delete Account`);
    return res.data;
  } else {
    toast.error(`Error server`);
  }
}
