'use client'
import axios from "axios";

// nico@linkchar.com
// #Desafio2023
// Token a047c54abb449b4abe53544136358b1d662414bf

 export const axiosGetStories = async () => {
  return await axios.get('https://sd-2396737-h00023.ferozo.net/api/stories');
}

export const axiosGetMyStories = async () => {
  return await axios.get('https://sd-2396737-h00023.ferozo.net/api/stories/me/');
}

export const axiosUploadStory = async (story: any) => {
  return await axios.post('https://sd-2396737-h00023.ferozo.net/api/stories/', story);
}

axios.interceptors.request.use(
  (config) => {
    const userlog = localStorage.getItem("token") as string;
    if (userlog) {
      config.headers.Authorization = `Token ${userlog}`;
    }
    return config;
  },
  (error) => {
    console.error("axios", error);
    return Promise.reject(error);
  }
);
