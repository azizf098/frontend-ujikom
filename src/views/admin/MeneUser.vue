<template>
  <div class="text-gray-900 ml-64 mt-12 ">
    <div class="p-8 flex">
      <p class="flex-1 text-base font-bold text-gray-900">Data Akun</p>
    </div>
    <div class="overflow-hidden rounded-xl border shadow" style="margin-left: 0.5%;">
      <table class="min-w-full border-separate border-spacing-y-2 border-spacing-x-2">
        <thead class="hidden border-b lg:table-header-group">
          <tr class="">
            <td class="whitespace-normal py-4 text-sm font-bold text-gray-900 sm:px-6">
              Nama
            </td>
            <td class="whitespace-normal py-4 text-sm font-bold text-gray-900 sm:px-6">
              Email
            </td>
            <td class="whitespace-normal py-4 text-sm font-bold text-gray-900 sm:px-6">
              Role
            </td>
          </tr>
        </thead>
        <tbody class="lg:border-gray-300">
          <tr v-for="user in getUser" :key="user.id">
            <td class="whitespace-no-wrap py-4 text-sm font-normal text-gray-900 sm:px-6">
              {{ user.name }}
            </td>
            <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-900 sm:px-6 lg:table-cell">
              {{ user.email }}
            </td>
            <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-900 sm:px-6 lg:table-cell">
              {{ user.role }}
            </td>
            <button @click="deleteUser(user.id)">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                class="w-6 h-6 text-red-600 ">
                <path fill-rule="evenodd"
                  d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                  clip-rule="evenodd" />
              </svg>
            </button>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";


export default {
  computed: {
    ...mapGetters("user", ["getUser"]),
    user() {
      return this.getUser;
    },
  },
  methods: {
    ...mapActions("user", ["fetchUser", "deleteUser"]),

  },
  mounted() {
    this.$store.dispatch("user/fetchUser");
  }
};
</script>