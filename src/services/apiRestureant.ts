import axios from "axios";

const BASE_URL = "http://localhost:9000";

const getMenu = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/pizza`).then((res) => {
      return res.data;
    });
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export { getMenu };
