export default function useUser() {
  return localStorage.getItem("token") && true;
}
