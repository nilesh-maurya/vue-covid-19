import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://covid19.mathdro.id/api",
  withCredentials: false
});

const getGlobalCases = () => {
  return apiClient.get("/");
};

const getIpCountryCase = () => {
  return fetch("https://ipapi.co/country")
    .then(response => {
      return response.text();
    })
    .then(async countryCode => {
      const countryCasesPromise = apiClient.get(`/countries/${countryCode}`);
      const countryNamePromise = apiClient.get("/countries");

      const [
        { data: countryCases },
        { data: countryNames }
      ] = await Promise.all([countryCasesPromise, countryNamePromise]);

      const countryName = countryNames.countries.find(country => {
        return country.iso2 === countryCode;
      });

      return { countryCases, countryName: countryName.name };
    })
    .catch(error => {
      console.log(error);
    });
};

export { getGlobalCases, getIpCountryCase };
