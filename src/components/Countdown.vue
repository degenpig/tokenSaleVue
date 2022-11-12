<template>
    <section class="text-black py-6 overflow-auto">

      <div class="text-6xl text-center flex w-full items-center justify-center pb-6">

        <div class="w-24 mx-1 p-2 bg-black text-white rounded-lg">
          <div class="font-mono leading-none">{{days}}</div>
          <div class="font-mono uppercase text-sm leading-none">Days</div>
        </div>
        <div class="w-24 mx-1 p-2 bg-black text-white rounded-lg">
          <div class="font-mono leading-none">{{hours}}</div>
          <div class="font-mono uppercase text-sm leading-none">Hours</div>
        </div>
        <div class="w-24 mx-1 p-2 bg-black text-white rounded-lg">
          <div class="font-mono leading-none">{{minutes}}</div>
          <div class="font-mono uppercase text-sm leading-none">Minutes</div>
        </div>
        <div class="text-2xl text-white mx-1 font-extralight">and</div>
        <div class="w-24 mx-1 p-2 bg-black text-white rounded-lg">
          <div class="font-mono leading-none">{{seconds}}</div>
          <div class="font-mono uppercase text-sm leading-none">Seconds</div>
        </div>
      </div>
    </section>
</template>

<script>
export default {
    name:"Countdown",
    data(){
        return{
            countTime:new Date('Dec 18, 2021 18:00:00').getTime(),
            days:"00",
            hours:"00",
            minutes:"00",
            seconds:"00",
        }
    },
    created(){
        this.startCountDown()
    },
    methods:{
        startCountDown: function () {
            setInterval(() => {
                this.now = new Date().getTime()
                this.distance = this.countTime - this.now;
                this.days = this.padNum(Math.floor(this.distance / (1000 * 60 * 60 * 24)));
                this.hours = this.padNum(Math.floor((this.distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
                this.minutes = this.padNum(Math.floor((this.distance % (1000 * 60 * 60)) / (1000 * 60)));
                this.seconds = this.padNum(Math.floor((this.distance % (1000 * 60)) / 1000));
                if (this.distance < 0) {
                    clearInterval(this.countdown);
                    this.days = '00';
                    this.hours = '00';
                    this.minutes = '00';
                    this.seconds = '00';
                }
            }, 1000);
        },
        padNum: function (num) {
            var zero = '';
            for (var i = 0; i < 2; i++) {
                zero += '0';
            }
            return (zero + num).slice(-2);
        },
    }
}
</script>

<style>

</style>
