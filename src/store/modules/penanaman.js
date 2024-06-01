import axios from "axios";

const kategori = {
  namespaced: true,
  state: {
    data: [],
  },
  getters: {
    getKategori: (state) => state.data,
  },
  actions: {
    async fetchKategori({ commit }) {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/v1/kategori"
        );
        const data = response.data.data;

        commit("SET_KATEGORI", data);
        return data;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    async addKategori({ commit }, data) {
      try {
        const response = await axios.post(
          "http://localhost:8080/api/v1/kategori",
          data
        );
        return response.data;
      } catch (error) {
        console.error("Error adding data:", error);
      }
    },
  },
  mutations: {
    SET_KATEGORI(state, data) {
      state.data = data;
    },
    ADD_TANAMAN(state, data) {
      state.data = data;
    },
  },
};

export default kategori;
