<template>
  <section class="py-12 mx-4 lg:mx-12">
    <div class="max-w-6xl mx-auto">
      <div class="flex mb-2 items-center justify-between">
        <div>
            <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-yellow-900 bg-yellow-400">

              {{ Number((soldAmount).toFixed(0)) }} NEXTSHIB SOLD
            </span>
        </div>
        <div class="text-right">
            <span class="text-xs font-semibold inline-block text-yellow-300">
              {{ Number((this.soldPercentage).toFixed(2)) }}%
            </span>
        </div>
      </div>
      <div class="w-full bg-yellow-100 rounded-full">
        <div class="bg-yellow-400 text-xxs text-black text-center p-0.5 leading-none rounded-l-full" :style="{ width: this.soldPercentage + '%' }"> {{ Number((this.soldPercentage).toFixed(2)) }}%</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Tokensale',
  props: ['soldAmount', 'soldPercentage'],

  created: function () {

  }

}
</script>

<style>

</style>
