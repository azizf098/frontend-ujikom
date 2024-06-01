<template>
  <div class="flex w-screen flex-wrap text-slate-800">
    <div class="pointer-events-none relative hidden h-screen select-none bg-black md:block md:w-1/2">
      <img class="-z-1 absolute top-0 h-full w-full object-cover opacity-90" src="../../assets/taman.jpg" />
    </div>
    <div class="flex w-full flex-col md:w-1/2">
      <div class="flex justify-center pt-12 md:justify-start md:pl-12">
        <a href="#" class="border-b-green-500 border-b-4 pb-2 text-2xl font-bold text-green-700"> GreenThumb . </a>
      </div>
      <div class="my-auto mx-auto flex flex-col justify-center px-6 pt-8 md:justify-start lg:w-[28rem]">
        <p class="text-center text-3xl font-bold md:text-left md:leading-tight">Buat akun anda!</p>
        <p class="mt-6 text-center font-medium md:text-left">
          Sudah memiliki akun?
          <a href="login" class="whitespace-nowrap font-semibold text-blue-700">Login disini</a>
        </p>
        <form class="flex flex-col items-stretch pt-3 md:pt-8" @submit.prevent="performRegister">
          <div class="flex flex-col pt-4">
            <div
              class="relative flex overflow-hidden rounded-lg border focus-within:border-transparent focus-within:ring-2 transition focus-within:ring-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" class="width-8 h-11">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
              <input type="text" v-model="name"
                class="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                placeholder="Name" />
            </div>
          </div>
          <div class="flex flex-col pt-4">
            <div
              class="relative flex overflow-hidden rounded-lg border focus-within:border-transparent focus-within:ring-2 transition focus-within:ring-blue-600">
              <span
                class="inline-flex items-center border-r border-gray-300 bg-white px-3 text-sm text-gray-500 shadow-sm">
                <svg width="15" height="18" fill="currentColor" viewBox="0 0 1792 1792"
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
                <svg width="15" height="18" fill="currentColor" viewBox="0 0 1792 1792"
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
          <div class="block">
            <input
              class="mr-2 h-5 w-5 appearance-none rounded border border-gray-300 bg-contain bg-no-repeat align-top text-black shadow checked:bg-green-600 focus:border-green-600 focus:shadow"
              type="checkbox" id="remember-me"
              style="background-image: url(&quot;data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M6 10l3 3l6-6'/%3e%3c/svg%3e&quot;)"
              checked />
            <label class="inline-block" for="remember-me"> Saya setuju dengan segala ketentuan</label>
          </div>
          <button type="submit"
            class="mt-6 rounded-lg bg-green-600 px-4 py-2 text-center text-base font-semibold text-white shadow-md outline-none ring-green-500 ring-offset-2 transition hover:bg-green-700 focus:ring-2 md:w-32">Daftar
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
import Swal from 'sweetalert2'

export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      role:'member',
    };
  },
  methods: {
    ...mapActions('auth', ['register']),
    async performRegister() {
      const credentials = {
        name: this.name,
        email: this.email,
        password: this.password,
        role: 'member',

      };

      const success = await this.register(credentials);

       if (success) {
        this.$router.push("/login");
        Swal.fire({
          title: 'Berhasil',
          text: 'Akun Berhasil Dibuat',
          icon: 'success',
          confirmButtonText: 'OK',
        });
      } else {
        Swal.fire({
          title: 'Gagal',
          text: 'Gagal Membuat Akun',
          icon: 'error',
        });
      }
    },
  },
};
</script>