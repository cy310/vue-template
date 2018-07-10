import Vue from 'vue'
import VueRouter from 'vue-router'
import { post, put, get, patch, del} from '../http/http'
import routes from '../router/router'
import App from "./App.vue"

Vue.use(VueRouter);

const router = new VueRouter({
    routes,
    scrollBehavior(to, from, savedPosition){
        if (savedPosition) {
            // savedPosition is only available for popstate navigations.
            return savedPosition
        } else {
            return {x:0, y:0 }
        }
    },
});


const vm = new Vue({
    el: '#app',
    router,
    components: {
        App
    },
    render: h => h('App')
});


Vue.prototype.$get = get;
Vue.prototype.$post = post;
Vue.prototype.$put = put;
Vue.prototype.$patch = patch;
Vue.prototype.$del = del;
Vue.config.devtools = true;