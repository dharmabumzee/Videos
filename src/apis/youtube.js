import axios from "axios";

const KEY = your_youtube_api_key;

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: "5",
    key: KEY,
  },
});
