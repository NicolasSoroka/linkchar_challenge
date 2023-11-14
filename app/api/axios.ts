"use client";
import axios from "axios";

const BASE_URL = "https://sd-2396737-h00023.ferozo.net/api/stories";

// nico@linkchar.com
// #Desafio2023
// Token a047c54abb449b4abe53544136358b1d662414bf

export const axiosGetStories = async () => {
  return await axios.get(BASE_URL);
};

export const axiosGetMyStories = async () => {
  return await axios.get(`${BASE_URL}/me`);
};

export const axiosUploadStory = async (story: any) => {
  return await axios.post(BASE_URL, story, {
    // headers: { "Content-Type": "multipart/form-data" },
  });
};

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
