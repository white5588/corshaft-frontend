import axios from "axios";



const URL: string = "";

export const registerUser = async (data: any) => {
  try {
    return await axios.post(`${URL}/api/register`, data).then((res: any) => {
      return res.data?.data;
    });
  } catch (error) {
    console.log(error);
  }
};


export const signinUser = async (data: any) => {
    try {
      return await axios.post(`${URL}/api/sign-in`, data).then((res: any) => {
        return res.data?.data;
      });
    } catch (error) {
      console.log(error);
    }
  };