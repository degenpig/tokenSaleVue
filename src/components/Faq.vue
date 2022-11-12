<template>
    <section class="py-20 lg:bg-contain bg-top bg-no-repeat">
      <div class="container mx-auto px-4">
        <div class="max-w-lg mx-auto mb-12 text-center" >
          <h2 class="mb-4 text-4xl md:text-5xl font-bold font-heading">Frequently Asked&nbsp;Questions</h2>
          <p class="py-12 text-2xl leading-loose text-blueGray-400">
            Can’t find the answer you’re looking for? Write out to our
            <a class="text-yellow-300 hover:text-yellow-500" href="mailto:nextshib@protonmail.com">customer support team.</a>
          </p>
        </div>
        <div class="max-w-6xl mx-auto text-black">
          <ul class="space-y-4">
            <li class="px-6 py-4 bg-white rounded shadow">
              <button
                  class="w-full flex justify-between items-center text-left font-bold font-heading hover:text-blueGray-700"
                  @click="selected !== 10 ? selected = 10 : selected = null"
              >
                <span class="text-black">Can I only buy once?</span>
                <svg class="w-4 h-4 ml-2 text-blueGray-300" fill="none" stroke="currentColor"
                     viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <p class="text-black mt-2 text-blueGray-800 text-left font-normal leading-loose relative overflow-hidden transition-all max-h-0 duration-700"
                 ref="container1"
                 v-bind:style="selected == 10 ? 'max-height: ' + $refs.container1.scrollHeight + 'px' : ''"
              >
                NEXTSHIB likes fair sales. Therefore, it is only possible to buy $NEXTSHIB once per account, all other purchase transactions that follow will fail. If you want to buy $NEXTSHIB, consider not making a test or small purchase.</p>
            </li>
            <li class="px-6 py-4 bg-white rounded shadow">
              <button
                  class="w-full flex justify-between items-center text-left font-bold font-heading hover:text-blueGray-700"
                  @click="selected !== 1 ? selected = 1 : selected = null"
              >
                <span class="text-black">When does the token sale end?</span>
                <svg class="w-4 h-4 ml-2 text-blueGray-300" fill="none" stroke="currentColor"
                     viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <p class="text-black mt-2 text-blueGray-400 text-left font-normal leading-loose relative overflow-hidden transition-all max-h-0 duration-700"
                ref="container1"
                v-bind:style="selected == 1 ? 'max-height: ' + $refs.container1.scrollHeight + 'px' : ''"
              >
                The NEXTSHIB token sale will have 2 rounds. The first round is for whitelisted participants. The public token sale will be for everyone. After the public sale, the token sale ends, participants can claim the token.</p>
            </li>
            <li class="px-6 py-4 bg-white rounded shadow">
              <button class="w-full flex justify-between items-center text-left font-bold font-heading "
                @click="selected !== 2 ? selected = 2 : selected = null"
              >
                <span>How much can I contribute?</span>
                <svg class="w-4 h-4 ml-2 text-blueGray-500" fill="none" stroke="currentColor"
                     viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <p class="mt-2 text-left font-normal leading-loose relative overflow-hidden transition-all max-h-0 duration-700"
                ref="container2"
                v-bind:style="selected == 2 ? 'max-height: ' + $refs.container2.scrollHeight + 'px' : ''"
              >
                You can send a maximum of 1 ETH and 5 BNB.
               </p>
            </li>
            <li class="px-6 py-4 bg-white rounded shadow">
              <button
                  class="w-full flex justify-between items-center text-left font-bold font-heading hover:text-blueGray-700"
                  @click="selected !== 3 ? selected = 3 : selected = null"
                >
                <span>Is there a minimum contribution?</span>
                <svg class="w-4 h-4 ml-2 text-blueGray-300" fill="none" stroke="currentColor"
                     viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <p class=" mt-2 text-blueGray-400 text-left font-normal leading-loose relative overflow-hidden transition-all max-h-0 duration-700"
                ref="container3"
                v-bind:style="selected == 3 ? 'max-height: ' + $refs.container3.scrollHeight + 'px' : ''"
              >
                Yes, 0.01 ETH or 0.01 BNB.</p>
            </li>
            <li class="px-6 py-4 bg-white rounded shadow">
              <button class="w-full flex justify-between items-center text-left font-bold font-heading hover:text-blueGray-700"
                @click="selected !== 4 ? selected = 4 : selected = null"
              >
                <span>What happens if I send more than the maximum amount?</span>
                <svg class="w-4 h-4 ml-2 text-blueGray-300" fill="none" stroke="currentColor"
                     viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <p class="mt-2  text-left text-blueGray-400 font-normal leading-loose relative overflow-hidden transition-all max-h-0 duration-700"
                ref="container4"
                v-bind:style="selected == 4 ? 'max-height: ' + $refs.container4.scrollHeight + 'px' : ''"
              >
                If you send more, the transaction will fail and the funds are returned to your wallet.</p>
            </li>
            <li class="px-6 py-4 bg-white rounded shadow">
              <button class="w-full flex justify-between items-center text-left font-bold font-heading hover:text-blueGray-700"
                @click="selected !== 5 ? selected = 5 : selected = null"
              >
                <span>Can I send money from an exchange wallet like Coinbase?</span>
                <svg class="w-4 h-4 ml-2 text-blueGray-300" fill="none" stroke="currentColor"
                     viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <p class="mt-2 text-left text-blueGray-400 font-normal leading-loose relative overflow-hidden transition-all max-h-0 duration-700"
                ref="container5"
                v-bind:style="selected == 5 ? 'max-height: ' + $refs.container5.scrollHeight + 'px' : ''"
              >
                No, do not send money from an exchange wallet. If, for any reason, we need to return funds to your wallet, funds that were originally sent from an exchange wallet will be lost, and you will not be able to receive the tokens you purchase.</p>
            </li>
            <li class="px-6 py-4 bg-white rounded shadow">
              <button class="w-full flex justify-between items-center text-left font-bold font-heading hover:text-blueGray-700"
                @click="selected !== 6 ? selected = 6 : selected = null"
              >
                <span>When will I receive my tokens?</span>
                <svg class="w-4 h-4 ml-2 text-blueGray-300" fill="none" stroke="currentColor"
                     viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <p class="mt-2 text-left text-blueGray-400 font-normal leading-loose relative overflow-hidden transition-all max-h-0 duration-700"
                ref="container6"
                v-bind:style="selected == 6 ? 'max-height: ' + $refs.container6.scrollHeight + 'px' : ''"
              >
                Immediately after the token sale ends.</p>
            </li>
            <li class="px-6 py-4 bg-white rounded shadow">
              <button class="w-full flex justify-between items-center text-left font-bold font-heading hover:text-blueGray-700"
                @click="selected !== 7 ? selected = 7 : selected = null"
              >
                <span>How do I know that my contribution was successfully accepted?</span>
                <svg class="w-4 h-4 ml-2 text-blueGray-300" fill="none" stroke="currentColor"
                     viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <p class="mt-2 text-left text-blueGray-400 font-normal leading-loose relative overflow-hidden transition-all max-h-0 duration-700"
                ref="container7"
                v-bind:style="selected == 7 ? 'max-height: ' + $refs.container7.scrollHeight + 'px' : ''"
              >
                Just check your transaction in metamask after purchase. If the transactions are successful, you have bought tokens.</p>
            </li>
            <li class="px-6 py-4 bg-white rounded shadow">
              <button class="w-full flex justify-between items-center text-left font-bold font-heading hover:text-blueGray-700"
                @click="selected !== 8 ? selected = 8 : selected = null"
              >
                <span>How can I trust I am sending to the official address?</span>
                <svg class="w-4 h-4 ml-2 text-blueGray-300" fill="none" stroke="currentColor"
                     viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <p class="mt-2 text-left text-blueGray-400 font-normal leading-loose relative overflow-hidden transition-all max-h-0 duration-700"
                ref="container8"
                v-bind:style="selected == 8 ? 'max-height: ' + $refs.container8.scrollHeight + 'px' : ''"
              >
                Always double check that you are on the official tokensale.nextshib.com URL.</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
</template>

<script>
export default {
    data(){
        return {
            selected:null
        }
    }
}
</script>

<style>

</style>
