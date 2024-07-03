import { ROUTE_PATH } from "../../core/common/appRouter";
import CustomizeLinkPage from "../../pages/customize-link";
import CustomCardPage from "../../pages/homepage";
import LinkTreePage from "../../pages/link";
import MainLayout from "../common/Layouts/Main-Layout";


export const privateRoutes = [
    {
        path: ROUTE_PATH.HOME_PAGE,
        component: MainLayout,
        private: false,
    },
    {
        path: ROUTE_PATH.CUSTOM_CARD,
        component: CustomCardPage,
        private: false,
    },
    {
        path: ROUTE_PATH.LINK,
        component: LinkTreePage,
        private: false,
    },
    {
        path: ROUTE_PATH.CUSTOMIZE_LINK,
        component: CustomizeLinkPage,
        private: false,
    },
]