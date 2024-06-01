<template>
    <div class="text-gray-900 ml-64 mt-12 ">
        <div class="p-8 flex">
            <p class="flex-1 text-base font-bold text-gray-900">Data Tanaman</p>
        </div>
        <div class="flex items-center justify-center sm:justify-start" style="margin-left: 90%;">
            <button type="button" @click="showAddPopup = true"
                class="inline-flex cursor-pointer items-center rounded-lg border border-gray-400 bg-white py-2 px-3 text-center text-sm font-medium text-gray-800 shadow hover:bg-gray-100 focus:shadow">
                <svg class="mr-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        class=""></path>
                </svg>
                ADD
            </button>
        </div>
        <br>
        <div class="overflow-hidden rounded-xl border shadow" style="margin-left: 0.5%;">
            <table class="min-w-full border-separate border-spacing-y-2 border-spacing-x-2">
                <thead class="hidden border-b lg:table-header-group">
                    <tr class="">
                        <td class="whitespace-normal py-4 text-sm font-bold text-gray-900 sm:px-6">
                            Nama Tanaman
                        </td>
                        <td class="whitespace-normal py-4 text-sm font-bold text-gray-900 sm:px-6">
                            Deskripsi
                        </td>
                        <td class="whitespace-normal py-4 text-sm font-bold text-gray-900 sm:px-6">
                            Kategori
                        </td>
                    </tr>
                </thead>
                <tbody class="lg:border-gray-300">
                    <tr v-for="tanaman in getTanaman" :key="tanaman.slug">
                        <td class="whitespace-no-wrap py-4 text-sm font-normal text-gray-900 sm:px-6">
                            {{ tanaman.name }}
                        </td>
                        <td
                            class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-900 sm:px-6 lg:table-cell">
                            {{ tanaman.deskripsi }}
                        </td>
                        <td
                            class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-900 sm:px-6 lg:table-cell">
                            {{ tanaman.Kategori.name }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <form @submit.prevent="addData">
        <!-- Pop-up Tambah Data -->
        <div v-if="showAddPopup"
            class="fixed inset-0 z-10 overflow-y-auto bg-gray-900 bg-opacity-50 flex justify-center items-center">
            <div class="bg-white p-8 rounded-lg shadow-xl w-96">
                <h2 class="text-lg font-semibold mb-4">Tambah Data</h2>
                <input v-model="formKey.name" type="text" class="border border-gray-300 p-2 rounded-lg mb-4 w-full"
                    placeholder="Nama Tanaman">
                <input v-model="formKey.deskripsi" type="text" class="border border-gray-300 p-2 rounded-lg mb-4 w-full"
                    placeholder="Deskripsi">
                <input v-model="formKey.id_kategori" type="text" class="border border-gray-300 p-2 rounded-lg mb-4 w-full"
                    placeholder="Kategori">
                <div class="flex justify-end">
                    <button class="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2">Add</button>
                    <button @click="cancelAdd" class="bg-red-500 text-white px-4 py-2 rounded-lg">Cancel</button>
                </div>
            </div>
        </div>
    </form>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Swal from 'sweetalert2';

export default {
    data() {
        return {
            showAddPopup: false,
            showEditPopupData: false,
            formKey: {
                name: "",
                deskripsi: "",
                id_kategori: "",
            },
            editFormData: {
                name: "",
            }
        };
    },
    methods: {
        ...mapActions('tanaman', ['fetchTanaman', 'addTanaman']),
        async addData() {
            const data = {
                name: this.formKey.name,
                deskripsi: this.formKey.deskripsi,
                id_kategori: this.formKey.id_kategori,
            };
            try {
                const success = await this.$store.dispatch('tanaman/addTanaman', data);
                this.formKey.name = "";
                this.formKey.deskripsi = "";
                this.formKey.id_kategori = "";
                this.showAddPopup = false;
                if (success) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Success',
                        text: 'Data Berhasil Ditambahkan!',
                        showConfirmButton: false,
                        timer: 2000
                    });
                    this.fetchTanaman();
                }
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Add Data failed! Please try again.',
                });
                console.error('Error adding data:', error);
            }
        },

        showEditPopup(tanaman) {
            this.editFormData.id = tanaman.id;
            this.editFormData.name = tanaman.name;
            this.editFormData.deskripsi = tanaman.deskripsi;
            this.editFormData.id_kategori = tanaman.id_kategori
            this.showEditPopupData = true;
        },
        cancelAdd() {
            this.showAddPopup = false;
            this.formKey.data = "";
        },

        cancelEdit() {
            this.showEditPopupData = false;
            this.editFormData.name = "";
        },
    },
    computed: {
        ...mapGetters('tanaman', ['getTanaman']),
        tanaman() {
            return this.getTanaman;
        },
    },
    mounted() {
        this.$store.dispatch("tanaman/fetchTanaman");
    }
}
</script>

<style scoped>
header {
    position: sticky;
    top: 0;
    z-index: 1000;
    background-color: #00ab66;
}
</style>