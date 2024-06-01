import { createStore } from 'vuex';
import auth from './modules/auth';
import user from './modules/users';
import tanaman from './modules/tanaman';
import kategori from './modules/kategori';
import perawatan from './modules/perawatan';


const store = createStore({
  state: {
    isLoading: true,
  },
  modules: {
    auth,
    user,
    tanaman,
    kategori,
    perawatan
  },
});

export default store;