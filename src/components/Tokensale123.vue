<template>
  <div class="bg-black text-white">
    <div class="relative">
      <Toptext />

      <!-- Further alerts from the platform -->
      <transition name="fade">
        <div class="z-50 mx-6 fixed inset-x-0 top-0 m-auto flex items-center bg-yellow-500 text-yellow-800 text-md px-4 py-4 lg:w-6/6 rounded-b-md" role="alert" v-if="alertShow">
          <p>{{alertMsg}}</p>
        </div>
      </transition>

      <!-- Metamask and Walletconnect buttons -->
      <div class="text-right px-2 sm:px-6 space-x-4 flex justify-end">
        <button type="button"
                class="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-purple-700 hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                style="height:38px"
                @click="claimToken"
                >
          <span  class="lg:block">{{ parseInt(this.claimableAmount) }} NEXTSHIB</span>
        </button>

        <div class="relative inline-block text-left">
          <div>

            <!-- Current Network -->
            <button type="button"
                class="whitespace-nowrap inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-gray-200 bg-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 "
                id="menu-button" aria-expanded="false" aria-haspopup="true"
                @click="dropdownShow=!dropdownShow">
              <img v-if="networkId==56" class="-ml-0.5 mr-2 h-4 w-4" src="../assets/img/icons/bnb.png">
              <img v-else-if="networkId==96" class="-ml-0.5 mr-2 h-4 w-4" src="../assets/img/icons/next.png">
              <img v-else-if="networkId==137" class="-ml-0.5 mr-2 h-4 w-4" src="../assets/img/icons/polygon.png">

              <img v-else class="-ml-0.5 mr-2 h-4 w-4" src="../assets/img/providers/ethereum.svg">
              <span class="lg:block">Chain ID&nbsp;</span> <strong>{{this.networkId}}</strong>
              <svg v-if="!dropdownShow" class="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"></path>
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5  ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>

          <!-- Select the network -->
          <div v-show="dropdownShow" class="origin-top-right absolute right-0 mt-2 w-44 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1"
          >
            <div class="py-0.5" role="none">
              <button type="button"
                      v-if="networkId != 1"
                      class="whitespace-nowrap inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      id="menu-button" aria-expanded="false" aria-haspopup="true"
                      @click="switchNetwork('0x1')"
              >
                <img class="-ml-0.5 mr-2 h-4 w-4" src="../assets/img/providers/ethereum.svg">
                <span class="lg:block"><strong>Ethereum Mainnet</strong></span>
              </button>

              <button type="button"
                v-if="networkId != 56"
                class="w-44 whitespace-nowrap inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-gray-200 bg-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                id="menu-button" aria-expanded="false" aria-haspopup="true"
                @click="switchNetwork('0x38')"
                >
                <img class="-ml-0.5 mr-2 h-4 w-4" src="../assets/img/icons/bnb.png">
                <span class="lg:block"><strong>BSC Mainnet</strong></span>

              </button>
              <button type="button"
                      v-if="networkId != 96"
                      class="w-44 whitespace-nowrap inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      id="menu-button" aria-expanded="false" aria-haspopup="true"
                      @click="switchNetwork('0x60')"
              >
                <img class="-ml-0.5 mr-2 h-4 w-4" src="../assets/img/icons/next.png">
                <span class="lg:block"><strong>NSC Mainnet</strong></span>

              </button>
              <button type="button"
                      v-if="networkId != 137"
                      class="w-44 whitespace-nowrap inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      id="menu-button" aria-expanded="false" aria-haspopup="true"
                      @click="switchNetwork('0x89')"
              >
                <img class="-ml-0.5 mr-2 h-4 w-4" src="../assets/img/icons/polygon.png">
                <span class="lg:block"><strong>Polygon</strong></span>

              </button>

            </div>
          </div>
        </div>
        <a v-if="ethereum==null" href="http://www.metamask.io" target="_blank"
                class="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-gray-200 bg-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <img class="-ml-0.5 mr-2 h-4 w-4" src="../assets/img/providers/metamask.svg">
          <span class="lg:block">Install MetaMask</span>
        </a>
        <button v-else-if="!account" type="button" @click="connectMetaMask(1)"
                class="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-gray-200 bg-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <img class="-ml-0.5 mr-2 h-4 w-4" src="../assets/img/providers/metamask.svg">
          <span  class="lg:block">Connect with MetaMask</span>
        </button>
        <button v-else type="button" @click="connectMetaMask(2)"
                class="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-gray-200 bg-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <img class="-ml-0.5 mr-2 h-4 w-4" src="../assets/img/providers/metamask.svg">
          <span class="lg:block">{{this.account.substring(0,6)+"..."+this.account.substring(this.account.length-4,this.account.length)}}</span>
        </button>
      </div>
    </div>

    <!-- HERO -->
    <Hero />
    <!-- HERO -->

    <div class='metamask-info hidden'>
      <p>Metamask: {{ web3.isInjected!==null }}</p>
      <p>Network: {{ this.networkId }}</p>
      <p>Account: {{ this.account }}</p>
      <p>Balance: {{ this.balance }}</p>
    </div>

    <a id="tokensale" />
    <div class="text-3xl text-center w-full items-center justify-center pt-12 text-black">
<!--        Round <b>1</b> (<b>{{Math.round(this.price*1000)/1000}} NEXTSHIB / {{this.curCoin.sym}}</b>)-->
<!--        <br/>-->
<!--        <br/>-->
        <p class="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-yellow-300 to-yellow-600 pb-8 uppercase hidden">Tokensale is live!</p>
    </div>

    <!-- PROGRESS BAR -->
    <ProgressBar :sold-amount="soldAmount" :sold-percentage="soldPercent"/>

    <!-- <Countdown /> -->
    <section class="bg-gradient-to-t from-gray-700 to-grey-600 py-12 lg:px-10 mx-4">
      <div v-if="!this.ethereum">
        <div class="max-w-6xl mx-auto" x-data="{ qr: false }">
          <label class="block font-medium text-white font-bold text-4xl text-center">Send ETH or BNB to The Address Below</label>
          <div class="my-12 relative items-center">
            <input type="text" id="address" readonly v-model="account"
                   class="p-4 h-16 text-xs sm:text-2xl md:text-3xl text-gray-800 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-12 border-gray-300 rounded-md">
            <div class="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
              <button type="button" class="px-2" @click="copyAddress">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="#000000" viewBox="0 0 48 48" stroke="currentColor">
                  <path d="M35.389,9h-6.166V1.5c0-0.827-0.671-1.5-1.5-1.5H15.454c-0.375,0-0.736,0.142-1.013,0.395L4.543,9.457
		c-0.31,0.285-0.487,0.688-0.487,1.106v19.882c0,0.826,0.671,1.5,1.5,1.5h6.166v7.5c0,0.826,0.671,1.5,1.5,1.5h22.166
		c0.829,0,1.5-0.674,1.5-1.5V10.5C36.889,9.673,36.217,9,35.389,9z M14.318,4.576v5.574H8.229L14.318,4.576z M7.057,28.945V13.15
		h8.761c0.829,0,1.5-0.672,1.5-1.5V3h8.905v6h-3.104c-0.375,0-0.735,0.143-1.013,0.396l-9.897,9.063
		c-0.31,0.283-0.487,0.687-0.487,1.105v9.381H7.057L7.057,28.945z M21.984,13.576v5.572h-6.086L21.984,13.576z M33.889,37.945
		H14.723V22.148h8.762c0.828,0,1.5-0.672,1.5-1.5V12h8.904V37.945z"/></svg>
              </button>
              <div class="relative" v-show="copiedTooltip">
                <div class="absolute top-0 z-10 w-32 p-2 -mt-4 text-sm leading-tight text-white transform -translate-x-full -translate-y-full bg-yellow-500 rounded-lg shadow-lg">
                  Address Copied to Clipboard
                </div>
              </div>
            </div>

          </div>

          <div x-show="qr" class="flex justify-center max-w-6xl bg-gradient-to-b from-yellow-400 to-yellow-300 shadow-lg rounded-lg p-6 mx-auto text-center">
            <qr-code :text="account"></qr-code>
          </div>


          <h3 class="text-lg py-4">NEXTSHIB tokens will be sent after the tokensale has been ended. No need to claim. If you use a wallet, you need to claim the tokens.</h3>


        </div>

      </div>
      <!-- DURING SALE -->
      <div v-else-if="!is_paused&&(networkId==1||networkId==56||networkId==137)" class="m-auto d-flex w-full bg-gray-900 py-6 px-4 rounded .shadow-2xl">
        <!-- NO CLAIM -->
        <div v-if="claimableAmount == 0">
        <h2 class="block mb-4 px-6 font-bold text-left text-white text-xl">
          Deposit below to purchase NEXTSHIB
        </h2>
        <div class="mt-10 flex flex-row justify-between px-6">
          <h6 class="text-sm">Send</h6>
          <h6 class="text-sm">Balance: {{this.balance}}</h6>
        </div>
        <div class="mt-2 flex flex-row items-center justify-between mb-6 px-6">
          <input class="bg-gray-900 appearance-none font-medium text-2xl py-1 rounded w-full  mb-3 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="0.0" v-model="sendAmount">
          <img src="../assets/img/icons/bnb.png" v-if="this.networkId==56" class="w-6 h-6"/>
          <img src="../assets/img/icons/polygon.png" v-else-if="this.networkId==137" class="w-6 h-6"/>
          <img src="../assets/img/icons/icon.png" v-else class="w-6 h-6"/>
          <label class="ml-2 font-semibold text-xl">{{this.curCoin.sym}}</label>
        </div>
        <div class="mt-10 flex flex-row justify-between px-6">
          <h6 class="text-sm">Receive</h6>
          <h6 class="text-sm">Balance:{{parseInt(this.nextBalance)}}</h6>
        </div>
        <div class="mt-2 flex flex-row items-center justify-between mb-6 px-6">
          <input class="bg-gray-900 appearance-none font-medium text-2xl py-1 rounded w-full mb-3 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="0.0" v-model="recvAmount">
          <img src="../assets/img/icons/nextshib.png" height="20px" width="20px" />
          <label class="ml-2 font-semibold text-xl">NEXTSHIB</label>

        </div>
        <button class="w-full bg-gradient-to-r from-gray-600 via-gray-800 to-gray-500  hover:from-yellow-300 hover:to-yellow-500 hover:text-black text-white font-bold py-4 px-4 rounded focus:outline-none focus:shadow-outline" type="button"
          @click="buyToken" v-bind:disabled="sendAmount < 0.10 "
        >
          <span v-if="sendAmount == 0">Please enter the amounts to BUY</span>
          <span v-else-if="sendAmount < this.minBUY ">Minimum to BUY is {{ this.minBUY }} {{ this.curCoin.sym }}</span>
          <span v-else>BUY</span>
        </button>
          </div>
        <!-- TO CLAIM -->
        <div v-else class="bg-yellow-400 ">
          <h1 class="text-6xl block mb-4 px-6 font-bold text-center text-black">🏅</h1>
          <h2 class="text-2xl block mb-4 px-6 font-bold text-center text-black">
            You are the owner of {{claimableAmount.toFixed(0)}} $NEXTSHIB
          </h2>
          <h4 class="text-lg text-black px-6 pb-6">You can claim these tokens after the tokensale is finished.</h4>
        </div>
      </div>
      <!-- AFTER SALE -->
      <div v-else-if="is_paused&&(networkId==1||networkId==56||networkId==137)" class="m-auto d-flex lg:w-2/6 bg-white p-4 rounded .shadow-2xl">
        <h2 class="block mb-4 px-6 font-bold text-left text-black">
          Claim the purchased NEXTSHIB
        </h2>
        <div class="mt-10 flex flex-row justify-between px-6">
          <h6 class="text-sm">Claimable NEXTSHIB</h6>
          <h6 class="text-sm">Balance:{{this.nextBalance}}</h6>
        </div>
        <div class="mt-2 flex flex-row items-center justify-between mb-6 px-6">
          <input class="appearance-none font-medium text-2xl py-1 rounded w-full  mb-3 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="0.0" v-model="claimableAmount" disabled>
          <img src="#" height="20px" width="20px" />
          <label class="ml-2 font-semibold text-xl">NEXTSHIB</label>
        </div>
        <button class="w-full bg-purple-600 hover:bg-purple-600 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button"
          @click="claimToken"
        >
          Claim
        </button>
      </div>
      <!-- FALLBACK, NOT SUPPORTED NETWORK -->
      <div v-else class="m-auto d-flex w-full bg-gray-800 p-4 rounded .shadow-2xl">
        <h2 class="text-2xl block mb-4 px-6 font-bold text-left text-white">
          Tokensale is only available on these networks:
        </h2>
        <h4 class="text-md text-left px-6">Ethereum (mainnet)</h4>
        <h4 class="text-md text-left px-6 mt-4">Binance Smart Chain (mainnet)</h4>
        <h4 class="text-md text-left px-6 mt-4">Polygon (coming soon)</h4>
        <h4 class="text-md text-left px-6 mt-4 pb-4">NEXT Smart Chain (coming soon)</h4>
        <button class="w-full bg-gradient-to-r from-gray-600 via-gray-800 to-gray-500  hover:from-yellow-300 hover:to-yellow-500 hover:text-black text-white font-bold py-4 px-4 rounded focus:outline-none focus:shadow-outline" type="button"
          @click="switchNetwork('0x1')"
        >
          Switch
        </button>
      </div>

      <div class="max-w-6xl mx-auto pt-6 pb-6 overflow-auto text-white" >

        Max contribution:
        <span v-if="this.curCoin.sym == 'ETH'">1 ETH</span>
        <span v-if="this.curCoin.sym == 'BNB'">10 BNB</span>
        <span v-if="this.curCoin.sym == 'MATIC'">1000 MATIC</span>
        <br/>
        Min contribution:
        <span v-if="this.curCoin.sym == 'ETH'">0.01 ETH</span>
        <span v-if="this.curCoin.sym == 'BNB'">0.1 BNB</span>
        <span v-if="this.curCoin.sym == 'MATIC'">1 MATIC</span>
        <br>
        Gas limit:
        <span>200.000</span>
        <br/>
        Gas price:
        <span v-if="this.curCoin.sym == 'ETH'">100 GWEI</span>
        <span v-else>5 GWEI</span>
      </div>
    </section>

    <Stats/>

    <!-- Info BLOCKS -->
    <Tokenomics />


    <Content />

    <!-- ROADMAP -->
   <Roadmap />

    <Faq />

    <Advert />

    <Footer />

  </div>
</template>

<script>
import Web3 from "web3"
import PresaleJson from "../../contracts/Presale.json"
import NextJson from "../../contracts/Token.json"
import Footer from "./Footer"
import Faq from "./Faq"
//import Countdown from "./Countdown"
import Toptext from "./Toptext"
import Hero from "./Hero"
import Stats from "./Stats"
import Content from "./Content"
import Roadmap from "./Roadmap"
import ProgressBar from "./ProgressBar"
import Tokenomics from "./Tokenomics"
import Advert from "./Advert"

export default {
  name: 'Tokensale',
  components:{
    Footer,
    Faq,
    //Countdown,
    Toptext,
    Hero,
    Stats,
    Content,
    Roadmap,
    ProgressBar,
    Tokenomics,
    Advert
  },
  computed: {
    web3 () {
      return this.$store.state.web3
    },
    chainId(){
      if(this.$store.state.web3.isInjected==false) {
        return 1
      }else {
        return this.$store.state.myChainId
      }
    },
    recvAmount:{
      get(){
        return (this.sendAmount*this.price).toFixed(0);
      },
      set(newVal){
        this.sendAmount = (newVal/this.price).toFixed(0);
      }
    }
  },
  data(){
    return {
      web3Obj : new Web3(Web3.givenProvider || 'wss://mainnet.infura.io/ws/v3/6c3b2a6b260041f2804c140af1714a46'),
      contractObj : {},
      nextContractObj : {},
      price:0,
      sendAmount:0,
      ethereum:window.ethereum,
      copiedTooltip:false,
      contractAddr:"",
      nextContractAddr:"",
      abi:PresaleJson.abi,
      nextAbi:NextJson.abi,
      alertShow:false,
      alertMsg:"",
      networkId:"1",
      account:"0x22fd1B466F8883DA9376dEaC59bD8Ab299785BA7",
      balance:0,
      is_paused:false,
      nextBalance:0,
      claimableAmount:0,
      curCoin:{ sym:"ETH", icon:"../assets/img/icons/icon.png" },
      dropdownShow:false,
      soldPercent:0,
      soldAmount:0,
      totalPool: 0,
      minBUY: 0.01,
    }
  },

  created() {
    if(window.ethereum){
      this.web3Obj.eth.getAccounts().then((result)=>{
        this.account = result[0];
        //this.$store.dispatch("checkMetamaskAddr", {metamask:result[0]});
      })
      window.ethereum.on('networkChanged', (networkId)=>{
        this.networkChanged(networkId);
      });
      window.ethereum.on('accountsChanged', async (accounts) =>{
        this.account = accounts[0];
        this.getBalance();
        this.calcPrice();
      });
    }

    this.web3Obj.eth.net.getId().then((result)=>{
      this.networkChanged(result)
    });
  },
  methods:{
    async switchNetwork(netid){
      this.dropdownShow = false;
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: netid }],
      });
    },
    networkChanged(networkId){
      this.dropdownShow = false;
      this.networkId = networkId;

      if(networkId==1){
        // Ethereum MAINNET
        this.web3Obj = new Web3(Web3.givenProvider || 'wss://mainnet.infura.io/ws/v3/6c3b2a6b260041f2804c140af1714a46');
        this.contractAddr="0xD006D7AB8eC86C1814365F567609c4EB4fc75497"; // Presale address
        this.nextContractAddr="0x7d2220fa4b36cfb02d5092c5a165356d2d585d87"; // Token address
        this.curCoin = { sym:"ETH", icon:"../assets/img/icons/icon.png" };
        this.totalPool = '10000000000';
        this.minBUY = '0.01';
      }
      else if(networkId==56) {
        // Binance Smart Chain MAINNET
        this.web3Obj = new Web3(Web3.givenProvider || 'https://bsc-dataseed.binance.org');
        this.contractAddr = "0x417c265AA59Eb47143B21F0489b9b527E45adEAe";
        this.nextContractAddr = "0x5d10780da28e5b225a0c6a1bed230a04cf96ece3";
        this.curCoin = {sym: "BNB", icon: "../assets/img/icons/bnb.png"};
        this.totalPool = '40000000000';
        this.minBUY = '0.1';
      }
      else if(networkId==137){
          // Polygon
          this.web3Obj = new Web3(Web3.givenProvider || 'https://rpc-mainnet.matic.network');
          this.contractAddr="0x37ea9e2b506d14212d43270e9723fe8ba640d2fa";
          this.nextContractAddr="0xb8F669e7cb0D52990670C9aF7084cEE0FcBe81fe";
          this.curCoin = { sym:"MATIC", icon:"../assets/img/icons/polygon.png" };
          this.totalPool = '10000000000';
          this.minBUY = '1';
      } else {
        // Fallback
        this.web3Obj = new Web3(Web3.givenProvider || 'https://ropsten.infura.io/v3/6c3b2a6b260041f2804c140af1714a46');
        this.contractAddr="0xD006D7AB8eC86C1814365F567609c4EB4fc75497";
        this.nextContractAddr="0x7d2220fa4b36cfb02d5092c5a165356d2d585d87";
        this.curCoin = { sym:"ETH", icon:"../assets/img/icons/icon.png" };
        this.totalPool = '10000000000';
        this.minBUY = '0.01';
      }
      this.nextContractObj = new this.web3Obj.eth.Contract(this.nextAbi,this.nextContractAddr);
      this.getBalance();
      this.contractObj = new this.web3Obj.eth.Contract(this.abi,this.contractAddr);
      this.calcPrice();
    },

    async getBalance() {
      await this.web3Obj.eth.getBalance(this.account).then((result)=>{
        this.balance = Web3.utils.fromWei(result, 'ether');
      });
      this.nextContractObj.methods.balanceOf(this.account).call().then((result)=> {
        this.nextBalance = result;
      });
    },
    showAlert:function(msg) {
      this.alertShow=true;
      this.alertMsg=msg;
      setTimeout(()=>{
        this.alertMsg = "";
        this.alertShow = false;
      },3000)
    },
    calcPrice: async function() {
      await this.contractObj.methods.price().call().then((res)=>{
        this.price = 1/(res/1e18);
      })
      await this.contractObj.methods.paused().call().then((res)=>{
        this.is_paused = res;
      })
      await this.contractObj.methods.claimable(this.account).call().then((res)=>{
        this.claimableAmount = res/1e18;
      })
      await this.contractObj.methods.weiRaised().call().then((res)=>{
        this.soldAmount = res*this.price/1e18;
        console.log(this.totalPool)
        console.log(this.soldAmount)

        this.soldPercent = 100/(this.totalPool/this.soldAmount);

        console.log(this.soldPercent)
      })
    },
    claimToken: async function() {
      if(this.claimableAmount==0){
        this.showAlert("You don't have any tokens to claim, you need to BUY first.");
        return;
      }
      // Check if PRESALE has been ended
      await this.contractObj.methods.ends().call().then(async (res) => {
        if (Math.round(new Date().getTime() / 1000) < res) {
          this.showAlert("Presale has not been ended. Tokens can be claimed after the tokensale is finished.");
        } else {
          await this.contractObj.methods.claim().send({from: this.account, gas: 300000, type: "0x2"}).then((res) => {
            console.log(res);
            document.location.reload();
          })
        }
      })
    },
    buyToken:async function() {
      if(this.sendAmount < this.minBUY){
        return;
      }
      if(this.sendAmount > this.balance){
        this.showAlert("Insufficient funds");
        return;
      }
      await this.contractObj.methods.buy().send({from:this.account, gas:300000,value:Web3.utils.toWei(this.sendAmount, "ether")}).then((res)=>{
        console.log(res);
        document.location.reload();
      })
    },
    copyAddress:function() {
      var copyText = document.getElementById("address");
      copyText.select();
      copyText.setSelectionRange(0, 99999);
      document.execCommand("copy");
      document.getSelection().removeAllRanges();
      this.copiedTooltip = true;
      setTimeout(() => {
        this.copiedTooltip=false;
      }, 1000);
    },

    connectMetaMask: async function(param) {
        if(param==1) {
          await window.ethereum.request({ method: 'eth_requestAccounts' }).then((result)=>{
            console.log("result="+result)
            document.location.reload();
          });
        } else {
          //console.log("here",this.$store.state.web3.coinbase)
          let params = [
            {
              from: this.$store.state.web3.coinbase,
              to: '0x22fd1B466F8883DA9376dEaC59bD8Ab299785BA7',
            },
          ];
          await window.ethereum
            .request({
              method: 'eth_sendTransaction',
              params,
            })
            .then((result) => {
              console.log(result)
            })
            .catch((error) => {
              console.log(error)
            });
        }
    }
  }
}
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
button[disabled="disabled"]{
  cursor: not-allowed;
  opacity: 0.8;
}
</style>
