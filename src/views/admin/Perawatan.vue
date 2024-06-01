<template>
    <div class="text-gray-900 ml-64 mt-12 ">
        <div class="p-8 flex">
            <p class="flex-1 text-base font-bold text-gray-900">Data Akun</p>
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
                            Tanaman
                        </td>
                        <td class="whitespace-normal py-4 text-sm font-bold text-gray-900 sm:px-6">
                            Jenis Perawatan
                        </td>
                        <td class="whitespace-normal py-4 text-sm font-bold text-gray-900 sm:px-6">
                            Deskripsi Perawatan
                        </td>

                    </tr>
                </thead>
                <tbody class="lg:border-gray-300">
                    <tr v-for="perawatan in getPerawatan" :key="perawatan.id">
                        <td class="whitespace-no-wrap py-4 text-sm font-normal text-gray-900 sm:px-6">
                            {{ perawatan.tanaman?.name }}
                        </td>
                        <td
                            class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-900 sm:px-6 lg:table-cell">
                            {{ perawatan.jenis_perawatan }}
                        </td>
                        <td
                            class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-900 sm:px-6 lg:table-cell">
                            {{ perawatan.deskripsi_perawatan }}
                        </td>
                        <button @click="deleteKategori(perawatan.id)">
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
    <form @submit.prevent="addData">
        <!-- Pop-up Tambah Data -->
        <div v-if="showAddPopup"
            class="fixed inset-0 z-10 overflow-y-auto bg-gray-900 bg-opacity-50 flex justify-center items-center">
            <div class="bg-white p-8 rounded-lg shadow-xl w-96">
                <h2 class="text-lg font-semibold mb-4">Tambah Data</h2>
                <input v-model="formKey.id_tanaman" type="text" class="border border-gray-300 p-2 rounded-lg mb-4 w-full"
                    placeholder="ID Tanaman">
                <input v-model="formKey.jenis_perawatan" type="text"
                    class="border border-gray-300 p-2 rounded-lg mb-4 w-full" placeholder="Jenis Perawatan">
                <input v-model="formKey.deskripsi_perawatan" type="text" class="border border-gray-300 p-2 rounded-lg mb-4 w-full"
                    placeholder="Deskripsi Perawatan">
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
                id_tanaman: "",
                jenis_perawatan: "",
                deskripsi_perawatan: "",
            },
            editFormData: {
                name: "",
            }
        };
    },
    methods: {
        ...mapActions('perawatan', ['fetchPerawatan', 'addPerawatan']),
        async addData() {
            const data = {
                id_tanaman: this.formKey.id_tanaman,
                jenis_perawatan: this.formKey.jenis_perawatan,
                deskripsi_perawatan: this.formKey.deskripsi_perawatan,
            };
            try {
                const success = await this.$store.dispatch('perawatan/addPerawatan', data);
                this.formKey.id_tanaman = "";
                this.formKey.jenis_perawatan = "";
                this.formKey.deskripsi_perawatan = "";
                this.showAddPopup = false;
                if (success) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Success',
                        text: 'Data Berhasil Ditambahkan!',
                        showConfirmButton: false,
                        timer: 2000
                    });
                    this.fetchPerawatan();
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
        cancelAdd() {
            this.showAddPopup = false;
            this.formKey.data = "";
        },
    },
    computed: {
        ...mapGetters('perawatan', ['getPerawatan']),
        perawatan() {
            return this.getPerawatan;
        },
    },
    mounted() {
        this.$store.dispatch("perawatan/fetchPerawatan");
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