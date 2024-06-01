import axios from "axios";

const tanaman = {
  namespaced: true,
  state: {
    data: [],
    selectedTanaman: null,
  },
  getters: {
    getTanaman: (state) => state.data,
    getTanamanBySlug: (state) => (slug) => {
      return state.data.find((tanaman) => tanaman.slug === slug);
    },
  },
  actions: {
    async fetchTanaman({ commit }) {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/v1/tanaman"
        );
        const data = response.data.data;

        commit("SET_TANAMAN", data);
        return data;
      } catch (error) {
        console.error("Error fetching data:", error);
      } 
    },
    async addTanaman({ commit }, data) {
      try {
        const response = await axios.post(
          "http://localhost:8080/api/v1/tanaman",
          data
        );
        return response.data;
      } catch (error) {
        console.error("Error adding tanaman:", error);
        throw error;
      }
    },
    async deleteTanaman({ commit }, tanamanId) {
      try {
        const response = await axios.delete(
          `http://localhost:8080/api/v1/tanaman/${tanamanId}`
        );
        commit("DELETE_TANAMAN", tanamanId);
        return response.data;
      } catch (error) {
        console.error("Error deleting tanaman:", error);
        throw error;
      }
    },
    async editTanaman({ commit }, data) {
      try {
        const response = await axios.put(
          `http://localhost:8080/api/v1/tanaman/${data.id}`,
          data
        );
        commit("EDIT_TANAMAN", data);
        return response.data;
      } catch (error) {
        console.error("Error editing tanaman:", error);
        throw error;
      }
    },
  },
  mutations: {
    SET_TANAMAN(state, data) {
      state.data = data;
    },
    ADD_TANAMAN(state, data) {
      state.data.push(data);
    },
    EDIT_TANAMAN(state, editedTanaman) {
      const index = state.data.findIndex(
        (tanaman) => tanaman.id === editedTanaman.id
      );
      if (index !== -1) {
        state.data.splice(index, 1, editedTanaman);
      }
    },
    DELETE_TANAMAN(state, tanamanId) {
      state.data = state.data.filter((tanaman) => tanaman.id !== tanamanId);
    },
  },
};

export default tanaman;
