
import axios from "axios";


const axiosPublic = axios.create({
  baseURL: "https://antopolis1.vercel.app/", 
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default axiosPublic;
