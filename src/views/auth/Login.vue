<template>
  <div class="flex flex-wrap">
    <div class="flex w-full flex-col md:w-1/2">
      <div class="flex justify-center pt-12 mt-2 md:-mb-24 md:justify-start md:pl-12">
        <a href="#" class="border-b-green-500 border-b-4 pb-2 text-2xl font-bold text-green-700"> GreenThumb . </a>
      </div>
      <div class="lg:w-[28rem] mx-auto my-auto flex flex-col justify-center md:justify-start md:px-6 md:pt-16">
        <p class="text-left mt-20 text-3xl font-bold">Selamat Datang!</p>
        <p class="mt-2 text-left text-gray-500">Selamat datang!, Silahkan login terlebih dahulu.</p>
        <form id="" class="flex flex-col pt-3 md:pt-8" @submit.prevent="performLogin">
          <div class="flex flex-col pt-4">
            <div
              class="relative flex overflow-hidden rounded-lg border focus-within:border-transparent focus-within:ring-2 transition focus-within:ring-blue-600">
              <span
                class="inline-flex items-center border-r border-gray-300 bg-white px-3 text-sm text-gray-500 shadow-sm">
                <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z">
                  </path>
                </svg>
              </span>
              <input type="email"
                class="w-full flex-1 appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400  focus:outline-none"
                id="email" v-model="email" placeholder="Email" autofocus="" required />
            </div>
          </div>
          <div class="mb-12 flex flex-col pt-4">
            <div
              class="relative flex overflow-hidden rounded-lg border focus-within:border-transparent focus-within:ring-2 transition focus-within:ring-blue-600">
              <span
                class="inline-flex items-center border-r border-gray-300 bg-white px-3 text-sm text-gray-500 shadow-sm">
                <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z">
                  </path>
                </svg>
              </span>
              <input type="password" id="password"
                class="w-full flex-1 appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400  focus:outline-none"
                v-model="password" placeholder="Password" />
            </div>
          </div>
          <button type="submit"
            class="w-full rounded-lg bg-green-500 px-4 py-2 text-center text-base font-semibold text-white shadow-md transition ease-in hover:bg-green-700 focus:outline-none focus:ring-2">
            <span class="w-full">Login</span>
          </button>
        </form>
        <div class="pt-12 pb-12 text-center">
          <p class="whitespace-nowrap">
            Belum memiliki akun?
            <a href="register" class="font-semibold text-blue-500 underline"> Register </a>
          </p>
        </div>
      </div>
    </div>
    <div class="pointer-events-none relative hidden h-screen select-none bg-black md:block md:w-1/2">
      <img class="-z-1 absolute top-0 h-full w-full object-cover opacity-90" src="../../assets/taman.jpg" />
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  computed: {
    ...mapGetters('auth', ['loginError', 'isAuthenticated']),
  },
  methods: {
    ...mapActions('auth', ['login']),
    async performLogin() {
      const credentials = {
        email: this.email,
        password: this.password,
      };

      const success = await this.login(credentials);

      if (success && this.isAuthenticated) {
        this.$router.push("/");
        Swal.fire({
          title: 'Berhasil',
          text: 'Berhasil Login',
          icon: 'success',
          confirmButtonText: 'OK',
        });
      } else {
        Swal.fire({
          title: 'Gagal',
          text: 'Login Gagal',
          icon: 'error',
        });
      }
    },
  },
};
</script>