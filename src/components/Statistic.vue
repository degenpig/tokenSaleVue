<template>
    <section class="bg-white py-12">
      <div class="max-w-6xl mx-auto">
        <div class="flex mb-2 items-center justify-between">
          <div>
            <span
                class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-red-600 bg-red-200">
              NEXTSHIB SOLD
            </span>
          </div>
          <div class="text-right">
            <span class="text-xs font-semibold inline-block text-red-600">
              {{this.soldPercent}}%
            </span>
          </div>
        </div>
        <div class="overflow-hidden h-4 mb-4 text-xs flex rounded bg-gray-50">
          <div style="width: 30%" class="shadow-none flex flex-col absolute top-0 h-4 rounded shim-red"></div>
        </div>
      </div>
    </section>
</template>

<script>
export default {
    name:"Statistic",
    props:{
      soldPercent:Number
    }
}
</script>

<style>

</style>
