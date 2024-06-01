<template>
  <div class="flex min-h-screen w-screen">
    <div class="relative my-auto mx-auto flex flex-col px-3 sm:max-w-xl md:max-w-screen-xl md:flex-row">
      <!-- Left Column -->
      <div class="mx-auto flex w-full max-w-xl lg:max-w-screen-xl">
        <div class="mb-16 lg:my-auto lg:max-w-lg">
          <div class="mb-6 max-w-xl">
            <div>
              <p
                class="bg-teal-accent-400 mb-2 inline-block rounded-full bg-green-400 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-900">
              </p>
            </div>
            <h2 class="mb-6 max-w-lg text-3xl font-extrabold text-slate-700 sm:text-5xl sm:leading-snug">
              Selamat Datang!<br />

              <span
                class="rounded- abg-gradient-to-r inline-block bg-green-400 from-lime-400 to-green-400 px-2 font-bold text-white">GreenThumb</span>
            </h2>
            <p class="text-base text-gray-700 md:text-lg">Selamat datang di website ini. GreenThumb website terkait
              tanaman, jelajahi banyak tentang tanaman!.</p>
          </div>
          <div class="flex items-center">
            <a href="/tanaman"
              class="bg-sky-400a mr-6 inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-green-400 to-sky-500 px-8 font-medium tracking-wide text-white shadow-lg shadow-sky-200 outline-none transition duration-200 hover:scale-110 hover:bg-sky-500 focus:ring">
              Mulai </a>
          </div>
        </div>
      </div>
      <!-- /Left Column -->

      <!-- Right Column -->
      <div class="flex h-full w-full space-x-3 overflow-hidden md:justify-end">
        <!-- Col 2 -->
        <div class="hidden w-56 items-center space-y-3 lg:flex">
          <div class="overflow-hidden rounded-xl bg-yellow-400">
            <img class="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1544376798-89aa6b82c6cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt="" />
          </div>
        </div>
        <div class="w-full flex-col space-y-3 rounded-xl py-4 lg:flex lg:w-80">
          <div class="h-40 overflow-hidden rounded-xl bg-green-600/60">
            <img class="mx-auto h-full w-full object-cover" src="../../assets/taman.jpg" alt="" />
          </div>
          <div class="h-40 overflow-hidden rounded-xl bg-pink-600/60">
            <img class="mx-auto h-full w-full object-cover" src="../../assets/tanaman.jpg" alt="" />
          </div>
        </div>
      </div>
      <!-- /Right Column -->
    </div>
  </div>
  <section class="py-20">
    <h1 class="mb-12 text-center font-sans text-5xl font-bold text-gray-900">Segala Tentang Tanaman<span
        class="text-blue-600">.</span></h1>
    <div class="mx-auto grid max-w-screen-xl grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
      <article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl">
        <a href="#">
          <div class="relative flex items-end overflow-hidden rounded-xl">
            <img src="../../assets/tanaman.jpg" alt="Hotel Photo" />
          </div>

          <div class="mt-1 p-2">
            <h2 class="text-slate-700 font-bold">Jenis Tanaman</h2>

            <div class="mt-3 flex items-end justify-between">
              

              <div class="group inline-flex rounded-xl bg-blue-100 p-2 hover:bg-blue-200">
                <svg xmlns="http://www.w3.org/2000/svg" class="group-hover:text-blue-500 h-4 w-4 text-blue-400"
                  viewBox="0 0 20 20" fill="currentColor">
                  <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                </svg>
              </div>
            </div>
          </div>
        </a>
      </article>

      <article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl">
        <a href="#">
          <div class="relative flex items-end overflow-hidden rounded-xl">
            <img src="../../assets/taman.jpg" alt="Hotel Photo" />
          </div>

          <div class="mt-1 p-2">
            <h2 class="text-slate-700 font-bold">Panduan Perawatan</h2>

            <div class="mt-3 flex items-end justify-between">
              <div class="group inline-flex rounded-xl bg-blue-100 p-2 hover:bg-blue-200">
                <svg xmlns="http://www.w3.org/2000/svg" class="group-hover:text-blue-500 h-4 w-4 text-blue-400"
                  viewBox="0 0 20 20" fill="currentColor">
                  <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                </svg>
              </div>
            </div>
          </div>
        </a>
      </article>

      <article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl">
        <a href="#">
          <div class="relative flex items-end overflow-hidden rounded-xl">
            <img src="../../assets/bunga.jpg" alt="Hotel Photo" />
          </div>

          <div class="mt-1 p-2">
            <h2 class="text-slate-700 font-bold">Nama Tanaman</h2>
            <div class="mt-3 flex items-end justify-between">

              <div class="group inline-flex rounded-xl bg-blue-100 p-2 hover:bg-blue-200">
                <svg xmlns="http://www.w3.org/2000/svg" class="group-hover:text-blue-500 h-4 w-4 text-blue-400"
                  viewBox="0 0 20 20" fill="currentColor">
                  <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                </svg>
              </div>
            </div>
          </div>
        </a>
      </article>
    </div>
  </section>

</template>

<link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,300;0,400;0,600;0,900&display=swap"
  rel="stylesheet" />
<style>
* {
  font-family: 'Source Sans Pro';
}
</style>