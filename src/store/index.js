import Vue from "vue";
import Vuex from "vuex";

/**
  * Load Vuex modules
  */
function loadAllModules(){
	 const context = require.context( "./", true, /index.js$/i );
	 const modules = context
		 .keys()
		 .filter( key => key != "./index.js" ) // Remove root
		 .map( ( key ) => ( {
			 modulePath : key,
			 name       : key.replace( "/index.js", "" ).replace( "./", "" )
		 } ) )
		 .reduce(
			 ( modules, { modulePath, name } ) => ( {
				 ...modules,
				   [ name ] : context( modulePath ).default
			 } ),
			 {}
		 );
	 return { context, modules };
}

Vue.use( Vuex );

export default function( /* { ssrContext } */ ) {
	 const { context, modules } = loadAllModules();
	 const Store = new Vuex.Store( {
		 modules,
		 strict : process.env.DEV
	 } );

	 if ( process.env.DEV && module.hot ) {
		 module.hot.accept( context.id, () => {
			 const { modules } = loadModules();
			 store.hotUpdate( { modules } );
		 } );
	 }

	 return Store;
}
