import axios from "./ajax.js"; // 导入ajax

export const getData = params => {
    return axios({
      url: "/blog/getData",
      method: "get",
      params
    });
  };
  
