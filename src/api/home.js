import axios from "axios"
const Home = {};

Home.getUser = () => {
  return axios.get("query");
};

export default Home;
