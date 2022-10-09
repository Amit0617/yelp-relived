import axios from "axios";

export default axios.create({
  baseURL: "https://yelp-relived-backend.herokuapp.com/api/v1/restaurants",
});