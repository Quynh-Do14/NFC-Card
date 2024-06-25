import { ROUTE_PATH } from "../../core/common/appRouter";
import HomePage from "../../pages/homepage";
import LinkTreePage from "../../pages/link";


export const privateRoutes = [

    {
        path: ROUTE_PATH.CUSTOM_CARD,
        component: HomePage,
        private: false,
    },
    {
        path: ROUTE_PATH.LINK,
        component: LinkTreePage,
        private: false,
    },
]