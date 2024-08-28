import axiosInstance from "@/configs/axios";
import { toast } from "react-toastify";


export const totalData = () => {
    return async (dispatch) => {
      try {
        // Retrieve token from local storage
        const token = localStorage.getItem('token');
        // Make an actual API request to your backend
        const response = await axiosInstance.get('/user/total',{
            headers: {
              Authorization: `Bearer ${token}`, // Add token to the headers
            },
          }
        );
        console.log("🚀 ~ return ~ response:", response)
     
        dispatch({
          type: 'TOTAL_COUNT',
          payload: response.data, // Assuming response contains the collection data
        });
  
        return true;
      } catch (error) {
        toast.error(error.response?.data?.message || "Something went wrong");
        return false;
      }
    };
  };