<template>
    <div>
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
                class="mx-auto h-10 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
            />
            <h2
                class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
            >
                Sign in to your account
            </h2>
        </div>
        <form class="space-y-6" @submit.prevent="login" novalidate>
            <div
                v-if="errorMessage"
                class="flex justify-between items-center px-5 py-3 bg-red-500 text-white rounded"
            >
                {{ errorMessage }}
                <span @click="errorMessage = ''" class="w-8 h-8 flex items-center justify-center rounded-full transition-colors cursor-pointer hover:bg-[rgba(0,0,0,0.2)]">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6 18 18 6M6 6l12 12"
                        />
                    </svg>
                </span>
            </div>
            <div>
                <label
                    for="email"
                    class="block text-sm font-medium leading-6 text-gray-900"
                    >Email address</label
                >
                <div class="mt-2">
                    <input
                        id="email"
                        name="email"
                        type="email"
                        :novalidate="true"
                        v-model="user.email"
                        autocomplete="email"
                        placeholder="email adress"
                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
            </div>

            <div>
                <div class="flex items-center justify-between">
                    <label
                        for="password"
                        class="block text-sm font-medium leading-6 text-gray-900"
                        >Password</label
                    >
                    <div class="text-sm">
                        <a
                            href="#"
                            class="font-semibold text-indigo-600 hover:text-indigo-500"
                            >Forgot password?</a
                        >
                    </div>
                </div>
                <div class="mt-2">
                    <input
                        id="password"
                        name="password"
                        type="password"
                        v-model="user.password"
                        autocomplete="current-password"
                        placeholder="password"
                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
            </div>
            <div class="flex items-center justify-between">
                <div class="flex items-center">
                    <input
                        type="checkbox"
                        id="remember-me"
                        name="remember-me"
                        v-model="user.remember"
                        class="h4 w-4 text-indigi-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label
                        for="remember-me"
                        class="ml-2 block text-sm text-gray-900"
                    >
                        Remember me
                    </label>
                </div>
            </div>
            <div>
                <button
                    type="submit"
                    class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Sign in
                </button>
            </div>
        </form>

        <p class="mt-10 text-center text-sm text-gray-500">
            Not a member?
            {{ " " }}
            <router-link
                :to="{ name: 'Register' }"
                class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                >Register for a new account</router-link
            >
        </p>
    </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { ref } from "vue";
import * as yup from "yup";

const router = useRouter();
const store = useStore();
const errorMessage = ref("");
const user = {
    email: "",
    password: "",
    remember: false,
};

const login = (values) => {
    store
        .dispatch("login", user)
        .then((res) => {
            router.push({ name: "Dashboard" });
        })
        .catch((error) => {
            errorMessage.value = error.response.data.message;
        });
};
</script>

<style></style>
