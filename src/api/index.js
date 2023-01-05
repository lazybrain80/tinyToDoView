import axios from "axios";
import { apiHost } from "../config";

let apiServer = null;

const todoAPI = {
  initialize() {
    apiServer = axios.create({
      baseURL: apiHost + "/",
    });
  },
  getBetween(from, to) {
    return apiServer.get("/todo", {
      params: {
        from,
        to,
      },
    });
  },
};

export default todoAPI;
