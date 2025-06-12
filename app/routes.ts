import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [index("routes/home.tsx"), route("anotherScreen","routes/anotherScreen.tsx")] satisfies RouteConfig;
