import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex);
const store= new Vue.Store({
    state:{
        count:0
    },
    mutations:{
        increment(state){
            state.count++;
        }
    },
    getters:{

    },
    actions:{

    }
});
