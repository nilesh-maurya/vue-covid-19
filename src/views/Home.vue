<template>
  <div class="home">
    <div class="global-case">
      <h2>Global Case</h2>
      <p class="last-updated">Last Updated: {{ GlobalLastUpdated || "" }}</p>
      <box-wrapper
        :loading="isGlobalCasesLoading"
        :report="globalCase"
      ></box-wrapper>
    </div>
    <div class="ip__country">
      <!-- <h2>{{ countryName }}</h2> -->
      <select class="select" name="country" @change="handleChange">
        <option
          v-for="(country, i) in countries"
          :key="i"
          :value="country.iso2"
          :selected="country.name === countryName"
        >
          {{ country.name }}
        </option>
      </select>
      <p class="last-updated">Last Updated: {{ IpLastUpdated || "" }}</p>
      <box-wrapper
        :loading="isIpCountryCasesLoading"
        :report="ipCountryCase"
      ></box-wrapper>
    </div>
  </div>
</template>

<script>
import BoxWrapper from "../components/BoxWrapper.vue";
import {
  getGlobalCases,
  getCountries,
  getIpCountryCase,
  getCountryCase
} from "../Services/ApiService";

export default {
  name: "Home",
  data() {
    return {
      isGlobalCasesLoading: true,
      isIpCountryCasesLoading: true,
      globalCase: {},
      ipCountryCase: {},
      countryCode: "",
      countries: [],
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
  methods: {
    async handleChange(e) {
      const countryCode = e.target.value;
      this.isIpCountryCasesLoading = true;

      const countryCase = await getCountryCase(countryCode);

      this.ipCountryCase = countryCase;
      this.isIpCountryCasesLoading = false;
    }
  },
  async created() {
    const [response, countries] = await Promise.all([
      getGlobalCases(),
      getCountries()
    ]);

    this.globalCase = response.data;
    this.isGlobalCasesLoading = false;

    this.countries = countries;
    console.log(countries);

    const ipResponse = await getIpCountryCase(countries);
    this.ipCountryCase = ipResponse.countryCases;
    this.countryName = ipResponse.countryName;
    this.isIpCountryCasesLoading = false;
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
  color: var(--primary);
}

.select {
  width: 200px;
  text-align: center;
  border: 2px solid #2c3e50;
  margin-bottom: 15px;
  padding: 5px 0;
}

.select:focus,
.select::-moz-focus-inner,
.select::-moz-focus-outer {
  outline: none;
}

* {
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0) !important;
  -webkit-focus-ring-color: rgba(255, 255, 255, 0) !important;
  outline: none !important;
}
</style>
