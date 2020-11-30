export default {
    // 基础url前缀
    baseURL: "http://localhost:3000",
    // 请求头信息
    headers: {
      "Content-Type": "application/json;charset=UTF-8"
    },
    // 设置超时时间
    timeout: 10000,
    // 携带凭证
    withCredentials: true,
    // 返回数据类型
    responseType: "json",
    // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
    transformResponse: [
      function(data) {
        // 对 data 进行任意转换处理
        return data;
      }
    ]
  };
  