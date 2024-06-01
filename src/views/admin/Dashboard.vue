<template>
  <br>
  <div class="mt-20 ml-72 grid gap-5 sm:grid-cols-3 mx-auto max-w-screen-lg">
    <div class="px-5 py-6 shadow-lg shadow-green-600">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-14 w-14 mt-4 rounded-xl bg-blue-400 p-4 text-white"
        viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd"
          d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
          clip-rule="evenodd" />
        <path fill-rule="evenodd"
          d="M16 5H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2zM5 9a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm0 4a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
          clip-rule="evenodd" />
      </svg>
      <router-link to="/admin/tanamann">
        <p class="mt-8 font-bold">Data Tanaman</p>
      </router-link>
    </div>
    <div class="px-4 py-6 shadow-lg shadow-green-600">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-14 w-14 mt-4 rounded-xl bg-green-600 p-4 text-white" fill="none"
        viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <router-link to="/admin/kategorii">
        <p class="mt-8 font-bold">Data Kategori</p>
      </router-link>
    </div>
    <div class="px-4 py-6 shadow-lg shadow-green-600">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-14 w-14 mt-4 rounded-xl bg-rose-400 p-4 text-white"
        viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
      </svg>
      <router-link to="/admin/meneuser">
        <p class="mt-8 font-bold">Data Users</p>
      </router-link>
    </div>
  </div>



</template>

<script>
import { mapGetters, mapActions } from "vuex";


export default {
  computed: {
    ...mapGetters("auth", ["getMe"]),
    ...mapGetters("folder", ["getFolder"])
  },
  methods: {
    ...mapActions("auth", ["fetchAllUsers"]),
    ...mapActions("folder", ["fetchFolder"]),
  },
  mounted() {
    this.fetchAllUsers();
    this.fetchFolder();
  }
};
</script>