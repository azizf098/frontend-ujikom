<template>
    <div class="mx-auto max-w-screen-lg px-4 py-12">
        <div class="text-center">
            <div class="text-3xl sm:text-5xl">Area Tanaman</div>
            <p>Berisi tentang segala tanaman dan jenisnya.</p>
        </div>
        <div class="mt-10 grid grid-cols-1 gap-1 sm:grid-cols-3 sm:gap-2 lg:mt-2">
            <div v-for="tanaman in getTanaman" :key="tanaman.id">
                <section class="bg-white py-12 text-gray-700 sm:py-16 lg:py-20">
                    <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                        <article class="relative flex flex-col overflow-hidden rounded-lg border">
                            <div class="aspect-square overflow-hidden">
                                <img class="h-full w-700 object-cover transition-all duration-300 group-hover:scale-125"
                                    src="../../assets/tanaman.jpg" alt="" />
                            </div>
                            <div class="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
                                <div class="mb-2 flex">
                                    <p class="mr-3 text-xl ">{{ tanaman.Kategori.name }}</p>
                                </div>
                                <h3 class="mb-2 text-2xl font-bold">{{ tanaman.name }}</h3>
                            </div>
                        </article>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    methods: {
        ...mapActions('tanaman', ['fetchTanaman']),
    },
    computed: {
        ...mapGetters('tanaman', ['getTanaman']),
    },
    mounted() {
        this.$store.dispatch('tanaman/fetchTanaman');
    },
};
</script>
