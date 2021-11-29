import axios from "axios";

const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

export const YOUTUBE_API_URL =
  "https://www.googleapis.com/auth/youtube.force-ssl";

export const request = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    key: YOUTUBE_API_KEY,
  },
});
