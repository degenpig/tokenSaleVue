import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
import state from './state'
import getWeb3 from '../util/getWeb3'
import web3ModalStore from "../store/modules/web3Modal";
import userStore from "../store/modules/user";

Vue.use(Vuex)
const server_url = "http://localhost:8080";
export const store = new Vuex.Store({
    strict: false,
    state,
    mutations: {
        registerWeb3Instance (state, payload) {
            let result = payload
            let web3Copy = state.web3
            web3Copy.coinbase = result.coinbase
            web3Copy.networkId = result.networkId
            web3Copy.balance = parseInt(result.balance, 10)
            web3Copy.isInjected = result.injectedWeb3
            web3Copy.web3Instance = result.web3
            state.web3 = web3Copy
        },
        integrageReferral(state, payload) {
            state.referral_code = payload[0].referral_code;
        }
    },
    actions: {
        registerWeb3 ({commit}) {
            console.log('registerWeb3 Action being executed')   
            getWeb3.then(result => {
                console.log('committing result to registerWeb3Instance mutation')
                commit('registerWeb3Instance', result)
            }).catch(e => {
                console.log('error in action registerWeb3', e)
            })
        },
        async socialShare() {
            const {data} = axios.get(server_url+"/api/socialShare");
            console.log(data);
        },
        async checkMetamaskAddr({commit}, payload) {
            console.log(commit);
            const { data, status } = await axios.post(server_url+"/api/checkMetamaskAddr", {metamask:payload.metamask});
            if(status==200&&data.length==0){
                await axios.post(server_url+"/api/addReferralCode", {metamask:payload.metamask})
            } else if(status==200&&data.length>0){
                commit('integrageReferral', data);
            }
        }
    },
    getters: {},
    modules: {
        web3Modal: web3ModalStore,
        user: userStore
    }
})
