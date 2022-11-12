<template>
    <div class="z-50 md:z-50 sm:z-50">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" integrity="sha256-h20CPZ0QyXlBuAw7A+KluUYx/3pK+c7lYEpqLTlxjYQ=" crossorigin="anonymous" />
        <div class="share-network-list z-50 md:z-50 sm:z-50">
            <ShareNetwork
                v-for="network in networks"
                :network="network.network"
                :key="network.network"
                :url="sharing.url"
                :title="sharing.title"
                :description="sharing.description"
                :quote="sharing.quote"
                :hashtags="sharing.hashtags"

            >
                <i :class="network.icon" @mouseover="network.show=true" @mouseout="network.show=false" :style="{backgroundColor : network.color}" @click="socialShare"></i>
                <span class="social_text" v-if="network.show" :style="{backgroundColor: network.color}" @click="socialShare">{{ network.name }}</span>
            </ShareNetwork>
        </div>
    </div>
</template>

<script>

export default {
    name : "SocialButtons",

    data(){
        return {
            sharing: {
                url: 'https://nextshib.com/',
                title: 'NEXTSHIB Token Sale',
                description: 'Participate in the NEXTSHIB Token Sale.',
                quote: 'The hot reload is so fast it\'s near instant. - Evan You',
                hashtags: 'NEXTSHIB, MEME, Doge, Shiba Uni, TokenSale',
            },
            networks: [
                { network: 'facebook', name: 'Share', icon: 'fab fah fa-lg fa-facebook-f', color: '#1877f2', show:false },
                { network: 'twitter', name: 'Tweet', icon: 'fab fah fa-lg fa-twitter', color: '#1da1f2', show:false },
                { network: 'telegram', name: 'Share', icon: 'fab fah fa-lg fa-telegram-plane', color: '#0088cc', show:false },
                { network: 'reddit', name: 'Share', icon: 'fab fah fa-lg fa-reddit-alien', color: '#ff4500', show:false },
                { network: 'whatsapp', name: 'Share', icon: 'fab fah fa-lg fa-whatsapp', color: '#25d366', show:false },
            ]
        }
    },
    methods:{
        socialShare(){
            this.$store.dispatch("socialShare");
        }
    }
}
</script>

<style>
    .share-network-list {
        position: fixed;
        top: 200px;
        left: 0px;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        max-width: 1000px;
        margin: auto;
    }
    a[class^="share-network-"] {
        flex: none;
        color: #FFFFFF;
        overflow: hidden;
        display: flex;
        flex-direction: row;
        align-content: center;
        align-items: center;
        cursor: pointer;
        width: 40px;
        transition: all 0.25s ease-in;
    }
    a[class^="share-network-"]:hover {
        width: 105px;
    }
    a[class^="share-network-"]:first-child {
        border-radius: 0 10px 0px 0px;
    }
    a[class^="share-network-"]:last-child {
        border-radius: 0 0px 10px 0px;
    }
    a[class^="share-network-"] .fah {
        background-color: rgba(0, 0, 0, 0.2);
        padding: 10px;
        flex: 0 1 auto;
        width: 40px;
    }
    a[class^="share-network-"] span {
        padding: 0 10px;
        flex: 1 1 0%;
        font-weight: 500;
        line-height: 35px;
        border-radius: 0% 10px 10px 0%;
    }
</style>
