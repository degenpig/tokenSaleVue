<template>
  <div>

  <div class="top-0 inset-x-0 pb-4">
    <div v-if="alertOpen" class="max-w-8xl mx-auto px-2 sm:px-6 ">
      <div class="p-1 rounded-b-lg bg-yellow-200 shadow-md sm:p-1">
        <div class="flex items-center justify-between flex-wrap">
          <div class="w-0 flex-1 flex items-center">
          <span class="flex p-2 rounded-lg bg-yellow-200">
            <svg class="h-6 w-6 text-yellow-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
            </svg>
          </span>
            <p class="ml-3 font-medium text-yellow-800 truncate">
            <span class="md:hidden">
              Make sure the URL is <a href="https://nextshib.com" class="text-yellow-700 underline">https://nextshib.com</a>
            </span>
              <span class="hidden md:inline">
              Please make sure that the URL is <a href="https://nextshib.com" class="text-yellow-700 underline">https://nextshib.com</a> before doing any purchase.
            </span>
            </p>
          </div>

          <div class="order-2 flex-shrink-0 sm:order-3 sm:ml-2">
            <button v-on:click="closeAlert()" type="button" class="-mr-1 flex p-2 rounded-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-white">
              <span class="sr-only">Dismiss</span>
              <svg class="h-6 w-6 text-yellow-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>



  </div>
</template>

<script>
export default {
  name:"Toptext",
  data() {
    return {
      alertOpen: true
    }
  },
  methods: {
    closeAlert: function(){
      this.alertOpen = false;
    }
  }
}
</script>

<style>

</style>
