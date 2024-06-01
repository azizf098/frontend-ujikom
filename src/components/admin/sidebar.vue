<template>
  <nav class="fixed top-0 z-50 w-full bg-green-600 border-b border-green-600 dark:bg-gray-800 dark:border-gray-700">
    <div class="px-3 py-3 lg:px-5 lg:pl-3">
      <div class="flex items-center justify-between">
        <div class="flex items-center justify-start rtl:justify-end">
          <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar"
            type="button"
            class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <span class="sr-only">Open sidebar</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path clip-rule="evenodd" fill-rule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z">
              </path>
            </svg>
          </button>
          <span class="">
            <span
              class="mr-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-green-400 align-bottom text-white text-2xl font-bold">G</span>
            <span class="text-xl text-white">reenThumb</span>
          </span>
        </div>
        <div class="flex items-center">
          <div class="flex items-center ms-3">
            <div>
              <button type="button"
                class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                aria-expanded="false" data-dropdown-toggle="dropdown-user">
                <span class="sr-only">Open user menu</span>
              </button>
            </div>
            <div
              class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
              id="dropdown-user"></div>
          </div>
        </div>
      </div>
    </div>
  </nav>

  <!-- component -->
  <div class="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800">
    <div class="fixed flex flex-col top-0 left-0 w-64 bg-green-800 h-full border-r">
      <div class="flex items-center justify-center h-14 border-b">
        <div>Sidebar Navigation By iAmine</div>
      </div>
      <div class="overflow-y-auto overflow-x-hidden flex-grow">
        <ul class="flex flex-col py-4 space-y-1">
          <!-- Sidebar menu items -->
          <li>
            <router-link to="/admin">
              <a
                class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-green-800 text-gray-300 hover:text-gray-300 border-l-4 border-transparent hover:border-green-800 pr-6">
                <span class="inline-flex justify-center items-center ml-4">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6">
                    </path>
                  </svg>
                </span>
                <span class="ml-2 text-sm tracking-wide truncate">Dashboard</span>
              </a>
            </router-link>
          </li>
          <li class="px-5">
            <div class="flex flex-row items-center h-8">
              <div
                class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-green-800 text-gray-300 hover:text-gray-300 border-l-4 border-transparent hover:border-green-800 pr-6">
                List Data
              </div>
            </div>
          </li>
          <div class="relative transition">
            <input class="peer hidden" type="checkbox" id="menu-1" checked />
            <button
              class="flex peer relative w-full items-center border-l-green-600 py-3 px-4 text-sm font-medium text-gray-300 outline-none transition-all duration-100 ease-in-out hover:border-l-4">
              <span class="flex mr-5 w-5"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </span>
              Data
              <label for="menu-1" class="absolute inset-0 h-full w-full cursor-pointer"></label>
            </button>
            <svg xmlns="http://www.w3.org/2000/svg"
              class="absolute right-0 top-4 ml-auto mr-5 h-4 text-gray-300 transition peer-checked:rotate-180 peer-hover:text-green-600"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
            <ul
              class="duration-400 flex m-2 max-h-0 flex-col overflow-hidden rounded-xl bg-green-700 font-medium transition-all duration-300 peer-checked:max-h-96">
              <li>
                <router-link to="/admin/meneuser">
                  <a
                    class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-green-800 text-gray-300 hover:text-gray-300 border-l-4 border-transparent hover:border-green-800 pr-6">
                    <span class="inline-flex justify-center items-center ml-4">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M12 4.354a4 4 0 11-8 0 4 4 0 018 0zM15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z">
                        </path>
                      </svg>
                    </span>
                    <span class="ml-2 text-sm tracking-wide truncate">Data Users</span>
                  </a>
                </router-link>
              </li>
              <li>
                <router-link to="/admin/kategorii">
                  <a
                    class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-green-800 text-gray-300 hover:text-gray-300 border-l-4 border-transparent hover:border-green-800 pr-6">
                    <span class="inline-flex justify-center items-center ml-4">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M12 4.354a4 4 0 11-8 0 4 4 0 018 0zM15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z">
                        </path>
                      </svg>
                    </span>
                    <span class="ml-2 text-sm tracking-wide truncate">Data Kategori</span>
                  </a>
                </router-link>
              </li>
              <li>
                <router-link to="/admin/tanamann">
                  <a
                    class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-green-800 text-gray-300 hover:text-gray-300 border-l-4 border-transparent hover:border-green-800 pr-6">
                    <span class="inline-flex justify-center items-center ml-4">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M12 4.354a4 4 0 11-8 0 4 4 0 018 0zM15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z">
                        </path>
                      </svg>
                    </span>
                    <span class="ml-2 text-sm tracking-wide truncate">Data Tanaman</span>
                  </a>
                </router-link>
              </li>
              <li>
                <router-link to="/admin/perawatan">
                  <a
                    class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-green-800 text-gray-300 hover:text-gray-300 border-l-4 border-transparent hover:border-green-800 pr-6">
                    <span class="inline-flex justify-center items-center ml-4">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M12 4.354a4 4 0 11-8 0 4 4 0 018 0zM15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z">
                        </path>
                      </svg>
                    </span>
                    <span class="ml-2 text-sm tracking-wide truncate">Data Perawatan</span>
                  </a>
                </router-link>
              </li>
            </ul>
          </div>

          <li>
            <router-link to="/admin/profile">
              <a
                class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-green-800 text-gray-300 hover:text-gray-300 border-l-4 border-transparent hover:border-green-800 pr-6">
                <span class="inline-flex justify-center items-center ml-4">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                </span>
                <span class="ml-2 text-sm tracking-wide truncate">Profile</span>
              </a>
            </router-link>
          </li>

          <!-- Logout Button -->
          <li>
            <a href="#" @click="handleLogout"
              class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-green-800 text-gray-300 hover:text-gray-300 border-l-4 border-transparent hover:border-green-800 pr-6">
              <span class="inline-flex justify-center items-center ml-4">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1">
                  </path>
                </svg>
              </span>
              Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions("auth", ["logout"]), // Memetakan action logout dari modul auth

    async handleLogout() {
      try {
        // Panggil action logout
        await this.logout();

        // Setelah logout berhasil, lakukan navigasi ke halaman login atau halaman lain yang sesuai
        this.$router.push("/login");
      } catch (error) {
        console.error("Error logging out:", error.message);
      }
    },
  },
};
</script>
