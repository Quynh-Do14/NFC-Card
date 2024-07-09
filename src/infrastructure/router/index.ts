import { ROUTE_PATH } from "../../core/common/appRouter";
import AuthPage from "../../pages/auth";
import CustomizeLinkPage from "../../pages/customize-link";
import CustomCardPage from "../../pages/custom-card";
import LinkTreePage from "../../pages/link";
import ProfilePage from "../../pages/profile";
import MainLayout from "../common/Layouts/Main-Layout";
import HomePage from "../../pages/homepage";


export const privateRoutes = [
    {
        path: ROUTE_PATH.HOME_PAGE,
        component: HomePage,
        private: false,
    },
    {
        path: ROUTE_PATH.LOGIN,
        component: AuthPage,
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
    {
        path: ROUTE_PATH.PROFILE,
        component: ProfilePage,
        private: false,
    },
]