import axios from "axios";

const perawatan = {
  namespaced: true,
  state: {
    data: [],
  },
  getters: {
    getPerawatan: (state) => state.data,
  },
  actions: {
    async fetchPerawatan({ commit }) {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/v1/perawatan"
        );
        const data = response.data.data;

        commit("SET_PERAWATAN", data);
        return data;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    async addPerawatan({ commit }, data) {
      try {
        const response = await axios.post(
          "http://localhost:8080/api/v1/perawatan",
          data
        );
        return response.data;
      } catch (error) {
        console.error("Error adding data:", error);
      }
    },
  },
  mutations: {
    SET_PERAWATAN(state, data) {
      state.data = data;
    },
    ADD_PERAWATAN(state, data) {
      state.data = data;
    },
  },
};

export default perawatan;
