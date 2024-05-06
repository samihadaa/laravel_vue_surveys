import { createStore } from "vuex";
import axiosClient from "@/axios";

const tmpSurveys = [
    {
        id: 100,
        title: "the laravel survey",
        slug: "the-laravel-survey",
        status: "draft",
        image: "https://www.cloudways.com/blog/wp-content/uploads/Laravel-9.jpg",
        description:
            "Laravel is one of the best frameworks that you can use in 2024",
        created_at: "2024-02-01 18:00:00",
        updated_at: "2024-02-01 18:00:00",
        expire_date: "2024-03-01 18:00:00",
        questions: [
            {
                id: 111,
                type: "select",
                question: "from which country are you ?",
                description: null,
                data: {
                    options: [
                        {
                            uuid: "grgrgrg451g-rgrgrgrg51-rgrgrg1551-jyjjykyk9",
                            text: "USA",
                        },
                        {
                            uuid: "grgrgr151g451g-rgrgrgrg51-rgrgrg1551-jyjjykyk9",
                            text: "Georgia",
                        },
                        {
                            uuid: "grgrgr151g451g-rgrgrgr999g51-rgrgrg1551-jyjjykyk9",
                            text: "Tunisia",
                        },
                        {
                            uuid: "grgrgr151g451g-rgrgr8147gr999g51-rgrgrg1551-jyjjykyk9",
                            text: "Germany",
                        },
                    ],
                },
            },
            {
                id: 1,
                type: "checkbox",
                question: "which language do you talk the most ?",
                description:
                    "fgeheh grrgkjegkeg kegkkgkeeg kgkegkekgkeg  kgkegegk",
                data: {
                    options: [
                        {
                            uuid: "grgrrergrgrg451g-rgrgrgrg51-rgr4grg1551-jyjjykyk9",
                            text: "English",
                        },
                        {
                            uuid: "grgrgr15fhfh91g451g-rgrgrhthgrg51-rgrgrg1551-jyjjykyk9",
                            text: "Frensh",
                        },
                        {
                            uuid: "grgrgr151g451g-rgrgrgrfhfh9999g51-rgrgrg1551-jyjjykyk9",
                            text: "Arabic",
                        },
                        {
                            uuid: "grgrgr151g451g-rgrrjjjj6gr8147gr999g51-rgrgrg1551-jyjjykyk9",
                            text: "Germany",
                        },
                    ],
                },
            },
            {
                id: 2,
                type: "checkbox",
                question: "which promgraming language do you prefer ?",
                description: null,
                data: {
                    options: [
                        {
                            uuid: "grgrgrgfzf66451g-rgrgfrgrg51-rgrgrg1551-jyjjykyk9",
                            text: "javascript",
                        },
                        {
                            uuid: "grgrgzfzfz9r151g451g-rgrgrg987rg51-rgrgrg1551-jyjjykyk9",
                            text: "php",
                        },
                        {
                            uuid: "grgrgzfzfzfr151g451g-rgrgrgr123999g51-rgrgrg1551-jyjjykyk9",
                            text: "python",
                        },
                        {
                            uuid: "grgrgr1511651g451g-rgrgr8147gr999g51-rgrgrg1551-jyjjykyk9",
                            text: "go",
                        },
                    ],
                },
            },
            {
                id: 3,
                type: "radio",
                question: "which php framework do you prefer the most ?",
                description: null,
                data: {
                    options: [
                        {
                            uuid: "grgrgr9874g451g-rgrgrgrg51-rgrgrg1551-jyjjykyk9",
                            text: "Laravel",
                        },
                        {
                            uuid: "grgrgr165656551g451g-rgrgrgrg51-rgrgrg1551-jyjjykyk9",
                            text: "Symfony",
                        },
                        {
                            uuid: "grgrgr151g451g-rgrgrgr9984849g51-rgrgrg1551-jyjjykyk9",
                            text: "CodeIgnitor",
                        },
                        {
                            uuid: "grgrgr151g554sd5451g-rgrgr8147gr999g51-rgrgrg1551-jyjjykyk9",
                            text: "zend",
                        },
                    ],
                },
            },
            {
                id: 6,
                type: "text",
                text: "what is your most fulfill in life",
                description: null,
                data: {},
            },
            {
                id: 7,
                type: "textarea",
                text: "what you think about IA ?",
                description: "rite your opinion in short description",
                data: {},
            },
        ],
    },
    {
        id: 101,
        title: "the VueJs survey",
        slug: "the-VueJs-survey",
        status: "draft",
        image: "https://segwitz.com/wp-content/uploads/2021/06/vuejs-development-malaysia.jpeg",
        description:
            "VueJs is one of the best frameworks that you can use in 2024",
        created_at: "2024-02-01 18:00:00",
        updated_at: "2024-02-01 18:00:00",
        expire_date: "2024-03-01 18:00:00",
        questions: [
            {
                id: 8,
                type: "select",
                question: "from which country are you ?",
                description: null,
                data: {
                    options: [
                        {
                            uuid: "grgrgrg451g-rgrgrgrg51-rgrgrg1551-jyjjykyk9",
                            text: "USA",
                        },
                        {
                            uuid: "grgrgr151g451g-rgrgrgrg51-rgrgrg1551-jyjjykyk9",
                            text: "Georgia",
                        },
                        {
                            uuid: "grgrgr151g451g-rgrgrgr999g51-rgrgrg1551-jyjjykyk9",
                            text: "Tunisia",
                        },
                        {
                            uuid: "grgrgr151g451g-rgrgr8147gr999g51-rgrgrg1551-jyjjykyk9",
                            text: "Germany",
                        },
                    ],
                },
            },
            {
                id: 9,
                type: "chackbox",
                question: "which language do you talk the most ?",
                description:
                    "fgeheh grrgkjegkeg kegkkgkeeg kgkegkekgkeg  kgkegegk",
                data: {
                    options: [
                        {
                            uuid: "grgrrergrgrg451g-rgrgrgrg51-rgr4grg1551-jyjjykyk9",
                            text: "English",
                        },
                        {
                            uuid: "grgrgr15fhfh91g451g-rgrgrhthgrg51-rgrgrg1551-jyjjykyk9",
                            text: "Frensh",
                        },
                        {
                            uuid: "grgrgr151g451g-rgrgrgrfhfh9999g51-rgrgrg1551-jyjjykyk9",
                            text: "Arabic",
                        },
                        {
                            uuid: "grgrgr151g451g-rgrrjjjj6gr8147gr999g51-rgrgrg1551-jyjjykyk9",
                            text: "Germany",
                        },
                    ],
                },
            },
            {
                id: 10,
                type: "checkbox",
                question: "which promgraming language do you prefer ?",
                description: null,
                data: {
                    options: [
                        {
                            uuid: "grgrgrgfzf66451g-rgrgfrgrg51-rgrgrg1551-jyjjykyk9",
                            text: "javascript",
                        },
                        {
                            uuid: "grgrgzfzfz9r151g451g-rgrgrg987rg51-rgrgrg1551-jyjjykyk9",
                            text: "php",
                        },
                        {
                            uuid: "grgrgzfzfzfr151g451g-rgrgrgr123999g51-rgrgrg1551-jyjjykyk9",
                            text: "python",
                        },
                        {
                            uuid: "grgrgr1511651g451g-rgrgr8147gr999g51-rgrgrg1551-jyjjykyk9",
                            text: "go",
                        },
                    ],
                },
            },
            {
                id: 11,
                type: "radio",
                question: "which php framework do you prefer the most ?",
                description: null,
                data: {
                    options: [
                        {
                            uuid: "grgrgr9874g451g-rgrgrgrg51-rgrgrg1551-jyjjykyk9",
                            text: "Laravel",
                        },
                        {
                            uuid: "grgrgr165656551g451g-rgrgrgrg51-rgrgrg1551-jyjjykyk9",
                            text: "Symfony",
                        },
                        {
                            uuid: "grgrgr151g451g-rgrgrgr9984849g51-rgrgrg1551-jyjjykyk9",
                            text: "CodeIgnitor",
                        },
                        {
                            uuid: "grgrgr151g554sd5451g-rgrgr8147gr999g51-rgrgrg1551-jyjjykyk9",
                            text: "zend",
                        },
                    ],
                },
            },
            {
                id: 12,
                type: "text",
                text: "what is your most fulfill in life",
                description: null,
                data: {},
            },
            {
                id: 13,
                type: "textarea",
                text: "what you think about IA ?",
                description: "rite your opinion in short description",
                data: {},
            },
        ],
    },
    {
        id: 102,
        title: "the Tailwind survey",
        slug: "the-Tailwind-survey",
        status: "draft",
        image: "https://tailwindcss.com/_next/static/media/card.a1cd9cff.jpg",
        description:
            "Tailwind is one of the best frameworks that you can use in 2024",
        created_at: "2024-02-01 18:00:00",
        updated_at: "2024-02-01 18:00:00",
        expire_date: "2024-03-01 18:00:00",
        questions: [
            {
                id: 20,
                type: "select",
                question: "from which country are you ?",
                description: null,
                data: {
                    options: [
                        {
                            uuid: "grgrgrg451g-rgrgrgrg51-rgrgrg1551-jyjjykyk9",
                            text: "USA",
                        },
                        {
                            uuid: "grgrgr151g451g-rgrgrgrg51-rgrgrg1551-jyjjykyk9",
                            text: "Georgia",
                        },
                        {
                            uuid: "grgrgr151g451g-rgrgrgr999g51-rgrgrg1551-jyjjykyk9",
                            text: "Tunisia",
                        },
                        {
                            uuid: "grgrgr151g451g-rgrgr8147gr999g51-rgrgrg1551-jyjjykyk9",
                            text: "Germany",
                        },
                    ],
                },
            },
            {
                id: 21,
                type: "chackbox",
                question: "which language do you talk the most ?",
                description:
                    "fgeheh grrgkjegkeg kegkkgkeeg kgkegkekgkeg  kgkegegk",
                data: {
                    options: [
                        {
                            uuid: "grgrrergrgrg451g-rgrgrgrg51-rgr4grg1551-jyjjykyk9",
                            text: "English",
                        },
                        {
                            uuid: "grgrgr15fhfh91g451g-rgrgrhthgrg51-rgrgrg1551-jyjjykyk9",
                            text: "Frensh",
                        },
                        {
                            uuid: "grgrgr151g451g-rgrgrgrfhfh9999g51-rgrgrg1551-jyjjykyk9",
                            text: "Arabic",
                        },
                        {
                            uuid: "grgrgr151g451g-rgrrjjjj6gr8147gr999g51-rgrgrg1551-jyjjykyk9",
                            text: "Germany",
                        },
                    ],
                },
            },
            {
                id: 22,
                type: "checkbox",
                question: "which promgraming language do you prefer ?",
                description: null,
                data: {
                    options: [
                        {
                            uuid: "grgrgrgfzf66451g-rgrgfrgrg51-rgrgrg1551-jyjjykyk9",
                            text: "javascript",
                        },
                        {
                            uuid: "grgrgzfzfz9r151g451g-rgrgrg987rg51-rgrgrg1551-jyjjykyk9",
                            text: "php",
                        },
                        {
                            uuid: "grgrgzfzfzfr151g451g-rgrgrgr123999g51-rgrgrg1551-jyjjykyk9",
                            text: "python",
                        },
                        {
                            uuid: "grgrgr1511651g451g-rgrgr8147gr999g51-rgrgrg1551-jyjjykyk9",
                            text: "go",
                        },
                    ],
                },
            },
            {
                id: 23,
                type: "radio",
                question: "which php framework do you prefer the most ?",
                description: null,
                data: {
                    options: [
                        {
                            uuid: "grgrgr9874g451g-rgrgrgrg51-rgrgrg1551-jyjjykyk9",
                            text: "Laravel",
                        },
                        {
                            uuid: "grgrgr165656551g451g-rgrgrgrg51-rgrgrg1551-jyjjykyk9",
                            text: "Symfony",
                        },
                        {
                            uuid: "grgrgr151g451g-rgrgrgr9984849g51-rgrgrg1551-jyjjykyk9",
                            text: "CodeIgnitor",
                        },
                        {
                            uuid: "grgrgr151g554sd5451g-rgrgr8147gr999g51-rgrgrg1551-jyjjykyk9",
                            text: "zend",
                        },
                    ],
                },
            },
            {
                id: 24,
                type: "text",
                text: "what is your most fulfill in life",
                description: null,
                data: {},
            },
            {
                id: 25,
                type: "textarea",
                text: "what you think about IA ?",
                description: "rite your opinion in short description",
                data: {},
            },
        ],
    },
];

const store = createStore({
    state: {
        surveys: [...tmpSurveys],
        user: {
            data: {},
            token: sessionStorage.getItem("TOKEN"),
        },
    },
    getters: {},
    mutations: {
        logout(state) {
            state.user.data = {};
            state.user.token = null;
            sessionStorage.removeItem("TOKEN");
        },
        setUser(state, userData) {
            state.user.data = userData.data;
            state.user.token = userData.token;
            sessionStorage.setItem("TOKEN", userData.token);
        },
    },
    actions: {
        register({ commit }, user) {
            return axiosClient.post("/register", user).then(({ data }) => {
                commit("setUser", data);
                return data;
            });
        },
        login({ commit }, user) {
            return axiosClient.post("/login", user).then(({ data }) => {
                commit("setUser", data);
                return data;
            });
        },
        logout({ commit }) {
            return axiosClient.post("/logout").then((response) => {
                commit("logout");
                return response;
            });
        },
    },
    modules: {},
});

export default store;
