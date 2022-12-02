<template>
    <div>
        <section class="md:bg-[#edf2f7] w-full">
            <div class="md:max-w-7xl pt-24 justify-center w-[100%] md:px-4 mx-auto">
                <div class="bg-white border rounded rounded-t-xl">
                    <div class="flex space-x-0">
                        <div class="rounded-t-xl md:w-[40%] border-gray-300">
                            <div class="bg-blue-500 rounded-tl-xl px-5 py-2">
                                <h1 class="text-white text-lg md:text-xl font-semibold">Other jobs in this company</h1>
                            </div>
                           
                            <div v-if="(jobs.data.length > 0)">
                                <div v-for="(item, i) in jobs.data" :key="i"
                                    class="border-b cursor-pointer px-10 py-3 hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <div class="flex space-x-5">
                                        <div>
                                            <h1 class="text-lg text-blue-600 py-2 font-semibold">{{ item.title }} </h1>
                                            <p class="text-sm text-gray-500">
                                                <span class="text-md">{{ item.company_name }} |</span>
                                                {{ item.location }}
                                                <span class="text-red-600 font-semibold"> {{ item.remote ? "(Remote)" :
                                                        ''
                                                }}</span>
                                                <span class="bg-blue-100 capitalize m-2 py-1 px-3 rounded-full"
                                                    v-for="(type, t) in item.job_types" :key="t">
                                                    {{ type }}
                                                </span>
                                            </p>
                                            <div class="flex items-center space-x-4 md:space-x-10 py-2">
                                                <p class="text-md text-green-600 py-2">$3,000 - $15,000</p>
                                                <p class="text-green-800 text-sm">6 Minutes ago</p>
                                                <RouterLink to="/apply-job" class="text-blue-700 text-sm">
                                                    Apply Now
                                                </RouterLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div v-else>Loading ...</div>
                        </div>
                        <div class="rounded-tl-xr border-l md:p-5 md:px-10 md:w-[60%] ">
                            <h1 class="text-xl py-2 md:text-3xl font-bold">Backend Developer (Node, Typescript, GraphQL)
                            </h1>
                            <h1 class="text-gray-600 py-1">Comapany Name . Company Address</h1>
                            <h1 class="text-gray-600 py-1">Contract . Senior level . Full time</h1>
                            <h1 class="text-gray-600 py-1">Salary:
                            <span class="font-bold text-blue-600"> $4,500</span>    
                            </h1>

                            <div class="pt-3">
                                <div class="flex space-x-4">
                                    <button
                                        class="inline-block flex items-center space-x-3 shadow-xl rounded-lg bg-blue-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-blue-600 hover:bg-blue-700 hover:ring-blue-700">
                                        <span> Apply Now</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="2.5" stroke="currentColor" class="w-5 h-5">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                        </svg>
                                    </button>
                                    <button
                                        class="inline-block border border-gray-300 flex items-center space-x-3 shadow-xl rounded-lg bg-white px-4 py-1.5 text-base font-semibold leading-7 text-blue-600 shadow-sm">
                                        <span>Save job</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div class="py-3">
                                <h1 class="text-lg py-2 font-semibold">Job description:</h1>
                                <div>Overall person should have experience of 5+yrs on back end and API.
                                    Strong experience in Node.js and Typescript
                                    GraphQL 2 yrs is ok but the person should be well versed, independent in backend/API
                                    technologies.
                                    8+ years of experience as a Back-end developer
                                    In-depth understanding of web development
                                    Critical thinker and problem-solving skills
                                    Team player
                                    Good organizational and time-management skills</div>
                            </div>
                            <div class="border my-3 p-5 rounded-lg">
                                <h1 class="text-lg pb-2 font-semibold">About the company</h1>
                                <p>Computer Software 1,001-5,000 employees 579 on LinkedIn
                                    Dice tech-focused career marketplace enables direct, meaningful connections
                                    between recruiters and technologists. Our connection tools, unrivaled matching
                                    capabilities, and branding opportunities speed up the vetting process, reduce
                                    time-to-hire and establish trust, making it easy to build a talent pipeline for
                                    current and future roles.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    </div>
</template>


<script setup>

const { data: jobs } = await useFetch(
    "https://arbeitnow.com/api/job-board-api"
);

</script>