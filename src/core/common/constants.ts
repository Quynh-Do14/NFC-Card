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
                label: "Trang chủ",
                link: ROUTE_PATH.HOME_PAGE,
                icon: TagsOutlined,
                icon2: `<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.44661 15.3975C9.11385 15.1508 8.64413 15.2206 8.39748 15.5534C8.15082 15.8862 8.22062 16.3559 8.55339 16.6025C9.5258 17.3233 10.715 17.75 12 17.75C13.285 17.75 14.4742 17.3233 15.4466 16.6025C15.7794 16.3559 15.8492 15.8862 15.6025 15.5534C15.3559 15.2206 14.8862 15.1508 14.5534 15.3975C13.825 15.9373 12.9459 16.25 12 16.25C11.0541 16.25 10.175 15.9373 9.44661 15.3975Z" fill="#1C274C"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C11.2919 1.25 10.6485 1.45282 9.95055 1.79224C9.27585 2.12035 8.49642 2.60409 7.52286 3.20832L5.45628 4.4909C4.53509 5.06261 3.79744 5.5204 3.2289 5.95581C2.64015 6.40669 2.18795 6.86589 1.86131 7.46263C1.53535 8.05812 1.38857 8.69174 1.31819 9.4407C1.24999 10.1665 1.24999 11.0541 1.25 12.1672V13.7799C1.24999 15.6837 1.24998 17.1866 1.4027 18.3616C1.55937 19.567 1.88856 20.5401 2.63236 21.3094C3.37958 22.0824 4.33046 22.4277 5.50761 22.5914C6.64849 22.75 8.10556 22.75 9.94185 22.75H14.0581C15.8944 22.75 17.3515 22.75 18.4924 22.5914C19.6695 22.4277 20.6204 22.0824 21.3676 21.3094C22.1114 20.5401 22.4406 19.567 22.5973 18.3616C22.75 17.1866 22.75 15.6838 22.75 13.7799V12.1672C22.75 11.0541 22.75 10.1665 22.6818 9.4407C22.6114 8.69174 22.4646 8.05812 22.1387 7.46263C21.8121 6.86589 21.3599 6.40669 20.7711 5.95581C20.2026 5.5204 19.4649 5.06262 18.5437 4.49091L16.4771 3.20831C15.5036 2.60409 14.7241 2.12034 14.0494 1.79224C13.3515 1.45282 12.7081 1.25 12 1.25ZM8.27953 4.50412C9.29529 3.87371 10.0095 3.43153 10.6065 3.1412C11.1882 2.85833 11.6002 2.75 12 2.75C12.3998 2.75 12.8118 2.85833 13.3935 3.14119C13.9905 3.43153 14.7047 3.87371 15.7205 4.50412L17.7205 5.74537C18.6813 6.34169 19.3559 6.76135 19.8591 7.1467C20.3487 7.52164 20.6303 7.83106 20.8229 8.18285C21.0162 8.53589 21.129 8.94865 21.1884 9.58104C21.2492 10.2286 21.25 11.0458 21.25 12.2039V13.725C21.25 15.6959 21.2485 17.1012 21.1098 18.1683C20.9736 19.2163 20.717 19.8244 20.2892 20.2669C19.8649 20.7058 19.2871 20.9664 18.2858 21.1057C17.2602 21.2483 15.9075 21.25 14 21.25H10C8.09247 21.25 6.73983 21.2483 5.71422 21.1057C4.71286 20.9664 4.13514 20.7058 3.71079 20.2669C3.28301 19.8244 3.02642 19.2163 2.89019 18.1683C2.75149 17.1012 2.75 15.6959 2.75 13.725V12.2039C2.75 11.0458 2.75076 10.2286 2.81161 9.58104C2.87103 8.94865 2.98385 8.53589 3.17709 8.18285C3.36965 7.83106 3.65133 7.52164 4.14092 7.1467C4.6441 6.76135 5.31869 6.34169 6.27953 5.74537L8.27953 4.50412Z" fill="#1C274C"/>
                </svg>`
            },
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
                <path d="M3 9.10986V14.8799C3 16.9999 3 16.9999 5 18.3499L10.5 21.5299C11.33 22.0099 12.68 22.0099 13.5 21.5299L19 18.3499C21 16.9999 21 16.9999 21 14.8899V9.10986C21 6.99986 21 6.99986 19 5.64986L13.5 2.46986C12.68 1.98986 11.33 1.98986 10.5 2.46986L5 5.64986C3 6.99986 3 6.99986 3 9.10986Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path opacity="0.34" d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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
    static ConfigLayout = class {
        static List = [
            {
                id: 1,
                name: "Cơ bản",
                content: "Hiệu quả, trực tiếp và nhỏ gọn",
            },
            {
                id: 2,
                name: "Nâng cao",
                content: "Làm cho liên kết của bạn nổi bật với màn hình lớn hơn, hấp dẫn hơn",
            },
        ]
    }
};