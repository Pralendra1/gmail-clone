import API from "../services/api";
import { useState } from "react";
const useApi = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const call = async () => {
    try {
      let res = await API();
      setResponse(res.data);
    } catch (err) {
      setError(err.message);
    }
  };
};
