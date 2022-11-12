import {mapState} from "vuex";

const web3Modal = {
    computed: {
        ...mapState(['web3Modal']),
    },
    active() {
        return this.web3Modal.active
    }
}

export {
    web3Modal,
}