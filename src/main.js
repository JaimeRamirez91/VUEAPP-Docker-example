import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import mixins from "./boot/mixin";

Vue.config.productionTip = false;

new Vue( {
	mixins,
	router,
	store,
	render : ( h ) => h( App ),
} ).$mount( "#app" );
