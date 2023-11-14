"use client";

export default function useUser() {
  if (typeof window !== 'undefined') {
    return localStorage.getItem("token") && true;
  }
}
