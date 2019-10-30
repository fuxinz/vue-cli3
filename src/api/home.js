import axios from "axios";
import qs from "qs";

const Home = {};

Home.getUser = params => {
  return axios.post("query", qs.stringify(params));
};
//图片上传
Home.uploadFile = formData => {
  return axios.post(
    {
      method: "post",
      url: "/upload",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" }
    },
    formData
  );
};

export default Home;
