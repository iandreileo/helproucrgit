import axios from 'axios';
import { HOST, PORT } from '../utils/CONSTANTS';

export const getRequests = async () => {
    try {
      const res = await axios.get(`${HOST}:${PORT}/get-requests`);
      const data = res.data;
      console.log(data);
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  export const addRequest = async (data) => {
    // console.log("DATA " + data)
    try {
      const res = await axios.post(`${HOST}:${PORT}/add-request`, data);
      const dataResponse = res.data;
      return dataResponse;
    } catch (err) {
      console.log(err);
    }
  };