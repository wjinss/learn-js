/* global axios */

// ------------------------------------
// ajax 라이브러리 -axios
// ------------------------------------

// axios.get(url[, config])
() => {
  const GITHUB_API = "https://api.github.com/users/yamoo9/repos";

  // axios.get(GITHUB_API)
  // axios.get(`${GITHUB_API}?per_page=3&sort=pushed`)
  axios
    .get(GITHUB_API, {
      params: {
        per_page: 6,
        sort: "created",
      },
    })
    .then(({ data }) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
};

// axios.post(url[, data[, config]])
(() => {
  const API_ENDPOINT = "https://dummyjson.com/products";

  const newProduct = {
    title: "더블링 소세지",
    price: 6800,
  };

  // 상품 생성 POST 요청
  axios
    .post(`${API_ENDPOINT}/add`, newProduct)
    .then(({ data }) => {
      console.log(data);
    })
    .catch(console.error);

  // vs. fetch()

  fetch(`${API_ENDPOINT}/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newProduct),
  })
    .then((response) => {
      return response.json().then((body) => {
        if (!response.ok) return Promise.reject(body);
        return body;
      });
    })
    .then(console.log)
    .catch(console.error);
})();
