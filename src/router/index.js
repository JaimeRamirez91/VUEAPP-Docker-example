import Vue from "vue";
import VueRouter from "vue-router";
import GlobalRoutes from "./routes.js";

Vue.use( VueRouter );

/**
 * Router collector
 */
function getRoutes() {
	const routes = [];
	const context = require.context( "../views", true, /Router.js$/i );
	context
		.keys()
		.map( ( modulePath ) => context( modulePath ).default )
		.flat()
		.forEach( ( route ) => routes.push( route ) );
	return routes.concat( GlobalRoutes );
}
/**
 * Configure own vue router
 */
const router = new VueRouter( {
	scrollBehavior : () => ( { x: 0, y: 0 } ),
	mode           : "history",
	base           : process.env.BASE_URL,
	routes         : getRoutes(),
} );

export default router;
