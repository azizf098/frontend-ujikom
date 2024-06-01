<template>
    <header class="text-black relative mx-auto flex flex-col overflow-hidden px-5 py-5 lg:flex-row lg:items-center">
        <a href="#" class="flex items-center whitespace-nowrap text-2xl font-bold ">
            <span class="mr-16 w-10">
                <img src="" alt="" />
            </span>
            GreenThumb
        </a>
        <input type="checkbox" class="peer hidden" id="navbar-open" />
        <label class="absolute top-5 right-5 cursor-pointer lg:hidden" for="navbar-open">
            <svg class="h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16">
                </path>
            </svg>
        </label>
        <nav aria-label="Header Navigation"
            class="peer-checked:pt-8 peer-checked:max-h-60 flex max-h-0 w-full flex-col items-center overflow-hidden transition-all lg:ml-24 lg:max-h-full lg:flex-row">
            <ul class="flex w-full flex-col items-center space-y-2 lg:flex-row lg:justify-center lg:space-y-0">
                <li class="lg:mr-12">
                    <router-link to="/">Home</router-link>
                </li>
                <li class="lg:mr-12">
                    <router-link to="/tanaman">Tanaman</router-link>
                </li>
                <li class="lg:mr-12">
                    <router-link to="/perawatann">Perawatan</router-link>
                </li>
                <li class="lg:mr-12">
                    <router-link to="/kontak">Kontak</router-link>
                </li>
            </ul>
            <span class="inline-flex justify-center items-center ml-5">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1">
                    </path>
                </svg>
            </span>
            <div v-if="isAuthenticated">
                <button @click="handleLogout">Logout</button>
            </div>
            <div v-else>
                <a href="/login">Login</a>
            </div>
        </nav>
    </header>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

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
    computed: {
        ...mapGetters('auth', ['isAuthenticated'])
    }
};
</script>

<style scoped>
header {
    position: sticky;
    top: 0;
    z-index: 1000;
    background-color: #19d351;
}
</style>
