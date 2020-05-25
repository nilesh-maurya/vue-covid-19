import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://covid19.mathdro.id/api",
  withCredentials: false
});

const getGlobalCases = () => {
  return apiClient.get("/");
};

const getCountries = () => {
  return apiClient
    .get("/countries")
    .then(res => {
      return res.data.countries;
    })
    .catch(err => {
      console.log("Country case error", err);
    });
};

const getIpCountryCase = countries => {
  return fetch("https://ipapi.co/country")
    .then(response => {
      return response.text();
    })
    .then(async countryCode => {
      const { data: countryCases } = await apiClient.get(
        `/countries/${countryCode}`
      );

      const countryName = countries.find(country => {
        return country.iso2 === countryCode;
      });

      return { countryCases, countryName: countryName.name };
    })
    .catch(error => {
      console.log(error);
    });
};

const getCountryCase = async countryCode => {
  const { data: countryCases } = await apiClient.get(
    `/countries/${countryCode}`
  );

  return countryCases;
};

export { getGlobalCases, getCountries, getIpCountryCase, getCountryCase };
