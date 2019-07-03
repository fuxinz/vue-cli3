import axios from "axios";
const Home = {};

Home.getUser = () => {
  return axios.get("query");
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
