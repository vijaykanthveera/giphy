import axios from "axios";
const API_URL =
  "https://api.giphy.com/v1/gifs/search?api_key=tVaJe9QRTL6VZp9xhBkogbNWFTI9hYnJ&q=";


export const getResults = async (keyword) =>{
    const response = await axios.get(
        API_URL + keyword + "&limit=1000&offset=0&rating=g&lang=en"
      );
      return response;
}
