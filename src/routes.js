import { lazy } from "react";

const routes = [
    {
        path: '/',
        component: lazy(() => import('./pages/Home/Home'))
    }
];
export default routes;