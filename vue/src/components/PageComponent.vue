<template>
    <div>
        <header class="bg-white shadow">
            <div
                class="flex justify-between align-center mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8"
            >
                <slot name="header"></slot>
            </div>
        </header>
        <main>
            <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                <slot></slot>
            </div>
        </main>
    </div>
</template>

<script setup>
const props = defineProps({
    title: String,
});
</script>

<style></style>
