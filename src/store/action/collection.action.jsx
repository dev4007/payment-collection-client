import axiosInstance from "@/configs/axios";
import { toast } from "react-toastify";

export const userData = () => {
    return async (dispatch) => {
      try {
        // Retrieve token from local storage
        const token = localStorage.getItem('token');
        // Make an actual API request to your backend
        const response = await axiosInstance.get('/collected-data/get-user',{
            headers: {
              Authorization: `Bearer ${token}`, // Add token to the headers
            },
          }
        );

        dispatch({
          type: 'USER_LIST',
          payload: response.data, // Assuming response contains the collection data
        });
  
        return true;
      } catch (error) {
        toast.error(error.response?.data?.message || "Something went wrong");
        return false;
      }
    };
  };
  

export const collection = (amount, date, customerName) => {
  return async (dispatch) => {
    try {
      // Retrieve token from local storage
      const token = localStorage.getItem('token');

      // Make an actual API request to your backend
      const response = await axiosInstance.post(
        '/collected-data/data',
        { amount, date, customerName },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Add token to the headers
          },
        }
      );

      dispatch({
        type: 'ADD_COLLECTION',
        payload: response.data, // Assuming response contains the collection data
      });
      toast.success('Data Submitted successful!');

      return true;
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
      return false;
    }
  };
};
