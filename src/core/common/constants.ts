import { ProfileOutlined, TagsOutlined, LinkOutlined } from "@ant-design/icons";
import { ROUTE_PATH } from "./appRouter";
import card1 from "../../assets/images/card1.jpg";
import card2 from "../../assets/images/card2.jpg";
import card3 from "../../assets/images/card3.jpg";
import card4 from "../../assets/images/card4.jpg";

export default class Constants {
    static Menu = class {
        static List = [
            {
                label: "Thiết kế",
                link: ROUTE_PATH.CUSTOM_CARD,
                icon: TagsOutlined,
                icon2: `<svg width="24px" height="24px" viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 9.96997H2" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5 18.9199H11" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M18 3.91992H6C3.79086 3.91992 2 5.71078 2 7.91992V17.9199C2 20.1291 3.79086 21.9199 6 21.9199H18C20.2091 21.9199 22 20.1291 22 17.9199V7.91992C22 5.71078 20.2091 3.91992 18 3.91992Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>`
            },
            {
                label: "Liên kết",
                link: ROUTE_PATH.LINK,
                icon: LinkOutlined,
                icon2: `<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L12.5 6.06212" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
                </svg>`
            },
            {
                label: "Cấu hình",
                link: ROUTE_PATH.CUSTOMIZE_LINK,
                icon: ProfileOutlined,
                icon2: `<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.1395 12.0002C14.1395 13.1048 13.2664 14.0002 12.1895 14.0002C11.1125 14.0002 10.2395 13.1048 10.2395 12.0002C10.2395 10.8957 11.1125 10.0002 12.1895 10.0002C13.2664 10.0002 14.1395 10.8957 14.1395 12.0002Z" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.57381 18.1003L5.12169 12.8133C4.79277 12.2907 4.79277 11.6189 5.12169 11.0963L7.55821 5.89229C7.93118 5.32445 8.55898 4.98876 9.22644 5.00029H12.1895H15.1525C15.8199 4.98876 16.4477 5.32445 16.8207 5.89229L19.2524 11.0923C19.5813 11.6149 19.5813 12.2867 19.2524 12.8093L16.8051 18.1003C16.4324 18.674 15.8002 19.0133 15.1281 19.0003H9.24984C8.5781 19.013 7.94636 18.6737 7.57381 18.1003Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>`
            },
        ]
    };
    static TOKEN = "token";
    static DEBOUNCE_SEARCH = 800;

    static Params = class {
        static limit = "limit";
        static page = "page";
        static searchName = "searchName";
        static search = "search";
        static idDanhMuc = "idDanhMuc";
        static parentId = "parentId"
    }

    static PaginationClientConfigs = class {
        static Size = 8;
        static LimitSize = 60;
        static AllSize = 9000;
        static PageSizeList = [
            { label: "8", value: 8 },
            { label: "16", value: 16 },
            { label: "48", value: 48 },
        ]
    };

    static PaginationConfigs = class {
        static Size = 10;
        static SizeSearchPage = 8;
        static LimitSize = 60;
        static AllSize = 9000;
        static PageSizeList = [
            { label: "10", value: 10 },
            { label: "20", value: 20 },
            { label: "50", value: 50 },
        ]
    };

    static UseParams = class {
        static Id = ":id"
    }

    static TabSelect = class {
        static List = [
            { label: "Cá nhân", value: 1 },
            { label: "Gian hàng", value: 2 },
        ]
    }

    static ImageCard = class {
        static List = [
            { label: 1, value: card1 },
            { label: 2, value: card2 },
            { label: 3, value: card3 },
            { label: 4, value: card4 },
            { label: 5, value: card1 },
            { label: 6, value: card2 },
            { label: 7, value: card3 },
            { label: 8, value: card4 },
            { label: 9, value: card1 },
            { label: 10, value: card2 },
            { label: 11, value: card3 },
            { label: 12, value: card4 },
        ]
    }

    static Gender = class {
        static MALE = class {
            static value = true;
            static label = "Nam";
        }
        static FEMALE = class {
            static value = false;
            static label = "Nữ";
        }
        static List = [
            { label: "Nam", value: true },
            { label: "Nữ", value: false },
        ]
    }
    static ConfigStyleButton = class {
        static Fill = class {
            static value = "Fill";
            static label = "";

        }
        static Outline = class {
            static value = "Outline";
            static label = "";
        }
        static Shadow = class {
            static value = "Shadow";
            static label = "";
        }

        static List = [
            {
                id: 1,
                radius: 0,
                type: "Fill",
                shadow: "",
                border: "",
                bg: "#1b3f9b",
            },
            {
                id: 2,
                radius: 8,
                type: "Fill",
                shadow: "",
                border: "",
                bg: "#1b3f9b",
            },
            {
                id: 3,
                radius: 20,
                type: "Fill",
                shadow: "",
                border: "",
                bg: "#1b3f9b",
            },
            {
                id: 4,
                radius: 0,
                type: "Outline",
                shadow: "",
                border: "1px solid",
                borderColor: "#1b3f9b",
                bg: "",
            },
            {
                id: 5,
                radius: 8,
                type: "Outline",
                shadow: "",
                border: "1px solid",
                borderColor: "#1b3f9b",
                bg: "",
            },
            {
                id: 6,
                radius: 20,
                type: "Outline",
                shadow: "",
                border: "1px solid",
                borderColor: "#1b3f9b",
                bg: "",
            },
            {
                id: 7,
                radius: 0,
                type: "Shadow",
                shadow: "rgba(0, 0, 0, 0.16) 4px 6px 6px 0px",
                border: "",
                bg: ""
            },
            {
                id: 8,
                radius: 8,
                type: "Shadow",
                shadow: "rgba(0, 0, 0, 0.16) 4px 6px 6px 0px",
                border: "",
                bg: ""
            },
            {
                id: 9,
                radius: 20,
                type: "Shadow",
                shadow: "rgba(0, 0, 0, 0.16) 4px 6px 6px 0px",
                border: "",
                bg: ""
            },
        ]
    }
};