<template>
   
    <div class="md:w-[60%] mx-auto px-5 md:px-0">
        <h2 class="md:text-6xl leading-6 text-center md:text-left  text-xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            We are here to help grow your tech confidence
        </h2>
        <p class="text-lg py-3 text-gray-500">
            Lorem ipsum, in graphical and textual context, refers to filler text that is placed in a
            document or visual presentation . Lorem ipsum is derived from the Latin "dolorem ipsum"
            roughly
            translated as "pain itself." <br />
            Lorem ipsum, in graphical and textual context, refers to filler text that is placed in a
            document or visual presentation . Lorem ipsum is derived from the Latin "dolorem ipsum"
            roughly
            translated as "pain itself."
        </p>
        <div class="md:grid grid-cols-2 gap-4 ">
            <div v-for="(tip,i) in tips" :key="i"
                class="block my-5 md:my-2 cursor-pointer p-2 md:p-6 max-w-sm bg-white rounded-lg md:border border-gray-100 md:shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <p class="text-xl text-center font-extrabold"> {{tip}}</p>
                <p class="text-sm py-2 text-center">
                    Lorem ipsum, in graphical and textual context
                    placed in a document or visual presentation .
                    <RouterLink to="" class="text-blue-600">Learn more</RouterLink>
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>

const tips = [
    "Digital Mareketing Tips", 'CV Tips', 'Project Management Tips', 'Workflow Management',
    'Best Practice', 'DevOps Tips'
]
</script>