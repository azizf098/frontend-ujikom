import axios from "axios";

const user = {
    namespaced: true,
    state: {
        userData: [],
    },
    getters:{
        getUser: (state) => state.userData,
    },
    actions: {
        async fetchUser({ commit }) {
            try {
                const data = await axios.get('http://localhost:8080/api/v1/user/',
                {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem("token")}`
                    }
                }
                );
                console.log(data.data)
                commit("SET_USER", data.data['data']);
        } catch (error) {
            alert(error);
            console.log(error);
        }
    },
    async fetchUseme({ commit }) {
        try {
            const data = await axios.get('http://localhost:8080/api/v1/user/me',
            {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
            }
            );
            console.log(data.data)
            commit("SET_USER_ME", data.data['data']);
    } catch (error) {
        alert(error);
        console.log(error);
    }
},
},
 mutations: {
    SET_USER(state, user) {
        state.userData = user;
    },
    SET_USER_ME(state, user) {
        state.userData = user;
    },
 },
};
export default user;