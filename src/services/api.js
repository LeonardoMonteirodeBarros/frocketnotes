import axios from "axios"

export const api = axios.create({
  baseURL: "https://brocketnotes-1.onrender.com",
})

