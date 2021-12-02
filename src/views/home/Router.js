import baseLayout from "../../layouts/base.vue";
import home from "./home.vue";

const routes = [
	{
		path      : "/",
		name      : "",
		component : baseLayout,
		children  : [
			{
				path      : "",
				component : home,
				name      : "home.index",
			},
		],
	},
];

export default routes;
