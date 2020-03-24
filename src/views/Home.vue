<template>
  <div class="home">
    <div class="global-case">
      <h2>Global Case</h2>
      <p class="last-updated">Last Updated: {{ GlobalLastUpdated || "" }}</p>
      <box-wrapper :report="globalCase"></box-wrapper>
    </div>
    <div class="ip__country">
      <h2>{{ countryName }}</h2>
      <p class="last-updated">Last Updated: {{ IpLastUpdated || "" }}</p>
      <box-wrapper :report="ipCountryCase"></box-wrapper>
    </div>
  </div>
</template>

<script>
import BoxWrapper from "../components/BoxWrapper.vue";
import {
  getGlobalCases,
  getIpCountryCase,
  getCountryName
} from "../Services/ApiService";

export default {
  name: "Home",
  data() {
    return {
      globalCase: {},
      ipCountryCase: {},
      countryCode: "",
      countryName: ""
    };
  },
  computed: {
    GlobalLastUpdated() {
      const date = new Date(this.globalCase.lastUpdate);
      if (date instanceof Date && !isNaN(date)) {
        return date.toDateString() + " " + date.toLocaleTimeString();
      }
      return "";
    },
    IpLastUpdated() {
      const date = new Date(this.ipCountryCase.lastUpdate);
      if (date instanceof Date && !isNaN(date)) {
        return date.toDateString() + " " + date.toLocaleTimeString();
      }
      return "";
    }
  },
  components: {
    BoxWrapper
  },
  async created() {
    const response = await getGlobalCases();
    this.globalCase = response.data;

    const ipResponse = await getIpCountryCase();
    this.countryCode = ipResponse.countryCode;
    this.ipCountryCase = ipResponse.data;

    const countryNamesResponse = await getCountryName();
    const countries = countryNamesResponse.data.countries;
    const countryName = Object.keys(countries).find(country => {
      return countries[country].iso2 === this.countryCode;
    });
    this.countryName = countries[countryName].name;
  }
};
</script>

<style scoped>
.global-case {
  margin-bottom: 2rem;
}
.global-case h2 {
  padding-top: 1.5rem;
}

.last-updated {
  padding: 0 0 1rem 0;
  font-size: 0.8rem;
  color: #42b983;
}
</style>
