import axios from "axios";

const api_url = "https://mobilesale-be-staging.herokuapp.com/api";

export function callApiLogin(body) {
  return axios({
    method: "POST",
    url: `${api_url}/authentication`,
    data: {
      email: body.username,
      password: body.password,
      strategy: body.strategy
    }
  });
}

export function callApiRegister(body) {
  let strategy = "customers";

  return axios({
    method: "POST",
    url: `${api_url}/${strategy}`,
    data: {
      username: body.username,
      password: body.password,
      phone: `${body.prefix}${body.phone}`,
      fullname: body.fullname,
      email: body.email,
      avatar: body.update,
      birthDate: body.birthDate,
      sex: body.sex
    }
  });
}

export const callApiGetCategories = () =>
  axios({
    method: "GET",
    url: `${api_url}/categories`
  });

export const callApiGetProducts = () =>
  axios({
    method: "GET",
    url: `${api_url}/products?$select=name&$select=category&&$select=images&$select=price`
  });

export const callApiGetProductDetail = id =>
  axios({
    method: "GET",
    url: `${api_url}/products/${id}`
  });
