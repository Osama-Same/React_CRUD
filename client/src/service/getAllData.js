import axios from "axios";
import { toast } from "react-toastify";
const url = "https://outstanding-hare-sweater.cyclic.app/";

export async function _getAllUsers() {
  const res = await axios.get(url + "users");
  if (res.data) {
    return res.data;
  } else {
    toast.error("Error server");
  }
}

export async function _getAllOrders() {
  const res = await axios.get(url + "orders");
  if (res.data) {
    return res.data;
  } else {
    toast.error(`Error server`);
  }
}
