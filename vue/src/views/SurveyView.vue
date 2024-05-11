<template>
    <div>
        <PageComponent>
            <template v-slot:header>
                <h1 class="text-3xl font-bold text-gray-900">
                    {{ surveyId ? modelSurvey.title : "Create a new survey" }}
                </h1>
            </template>
            <form @submit.prevent="saveSurvey">
                <div class="shadow sm:rounded-md sm:overflow-hidden">
                    <!-- Surveys fields -->
                    <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                        <!-- Image -->
                        <div>
                            <label
                                for="image"
                                class="block text-sm font-medium text-gray-700"
                                >Image</label
                            >
                            <div class="mt-1 flex items-center">
                                <img
                                    class="w-64 h-48 object-cover"
                                    v-if="modelSurvey.image"
                                    :src="modelSurvey.image"
                                    :alt="modelSurvey.title"
                                />
                                <span
                                    v-else
                                    class="flex items-center justify-center h-12 w-12 rounded-full overflow-hidden bg-gray-100"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="h-[80%] w-[80%] text-gray-300"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                                        />
                                    </svg>
                                </span>
                                <button
                                    type="button"
                                    class="relative overflow-hidden ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm"
                                >
                                    <input
                                        type="file"
                                        class="absolute left-0 top-0 right-0 bottom-0 opacity-0 cursor-pointer"
                                    />
                                    Change
                                </button>
                            </div>
                        </div>
                        <!-- Title -->
                        <div>
                            <label
                                for="title"
                                class="block text-sm font-medium text-gray-700"
                                >Title</label
                            >
                            <input
                                autocomplete="survey_title"
                                type="text"
                                name="title"
                                id="title"
                                v-model="modelSurvey.title"
                                class="border py-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>
                        <!-- Description -->
                        <div>
                            <label
                                for="title"
                                class="block text-sm font-medium text-gray-700"
                                >Description</label
                            >
                            <div class="mt-1">
                                <textarea
                                    rows="3"
                                    autocomplete="survey_description"
                                    v-model="modelSurvey.description"
                                    name="description"
                                    id="description"
                                    placeholder=""
                                    class="sm:text-sm border border-gray-300 block w-full shadow-sm mt-1 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                ></textarea>
                            </div>
                        </div>
                        <!-- Expire_Date -->
                        <div>
                            <label
                                for="expire_date"
                                class="block text-sm font-medium text-gray-700"
                                >Expire Date</label
                            >
                            <input
                                type="date"
                                sname="expire_date"
                                id="expire_date"
                                v-model="modelSurvey.expire_date"
                                class="mt-1 py-2 shadow-sm block focus:ring-indigo-500 focus:border-indigo-500 rounded-md border-gray-300 w-full"
                            />
                        </div>
                        <!-- status -->
                        <div class="flex items-start">
                            <div class="flex items-center h-5">
                                <input
                                    type="checkbox"
                                    id="status"
                                    name="status"
                                    v-model="modelSurvey.status"
                                    class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                />
                            </div>
                            <div class="ml-3 text-sm">
                                <label
                                    for="status"
                                    class="font-medium text-gray-700"
                                    >Active</label
                                >
                            </div>
                        </div>
                        <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                            <h3
                                class="text-2xl font-semibold flex items-center justify-between"
                            >
                                Questions
                                <!-- Add new question -->
                                <button
                                    type="button"
                                    class="flex items-center text-sm py-1 px-4 rounded-sm text-white bg-gray-600 hover:bg-gray-700"
                                    @click="addQuestion"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="h-4 w-4"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M12 4.5v15m7.5-7.5h-15"
                                        />
                                    </svg>

                                    Add question
                                </button>
                            </h3>
                            <div
                                v-if="!modelSurvey.length"
                                class="text-center text-gray-600"
                            >
                                You don't have any questions created
                            </div>
                            <div
                                v-for="(
                                    question, index
                                ) in modelSurvey.questions"
                                :key="question.id"
                            >
                                <QuestionEdit
                                    :question="question"
                                    :index="index"
                                    @addQuestion="addQuestion"
                                    @change="changeQuestion"
                                    @deleteQuestion="deleteQuestion"
                                />
                            </div>
                        </div>
                        <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                            <button
                                type="submit"
                                class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </PageComponent>
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import PageComponent from "../components/PageComponent.vue";
import QuestionEdit from "../components/QuestionEdit.vue";

import store from "../store/index.js";
import { useRoute } from "vue-router";

const surveys = computed(() => store.state.surveys);
const route = useRoute();
const surveyId = route.params.id;

const modelSurvey = ref({
    title: "",
    image: "",
    expire_date: null,
    status: false,
    description: "",
    questions: [],
});

onMounted(() => {
    if (surveyId) {
        modelSurvey.value = surveys.value.find((s) => s.id == surveyId);
    }
});
</script>

<style></style>
