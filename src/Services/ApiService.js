import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://covid19.mathdro.id/api",
  withCredentials: false
});

const getGlobalCases = () => {
  return apiClient.get("/");
};

const getCountryName = () => {
  return apiClient.get("/countries");
};

const getIpCountryCase = () => {
  const result = {};
  return fetch("https://ipapi.co/country")
    .then(response => {
      return response.text();
    })
    .then(country => {
      result.countryCode = country;
      return apiClient.get(`/countries/${country}`);
    })
    .then(response => {
      result.data = response.data;
      return result;
    })
    .catch(error => {
      console.log(error);
    });
};

export { getGlobalCases, getIpCountryCase, getCountryName };
