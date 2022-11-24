<script setup>
import Search from '../../components/Search'
import  CareerDetail  from '../../components/CareerDetail';
const employmentTypes = [
    "Onsite", 'Remote', 'Freelance', 'Full-Time', 'Part-Time', 'Contactual'
]
const { data: jobs } = await useFetch(
    "https://arbeitnow.com/api/job-board-api"
);
</script>

<template>
    <div>

        <section class="md:bg-[#edf2f7] md:fixed md:h-screen w-full">
            <div class="md:max-w-7xl pt-16 md:pt-24 justify-center w-[100%] md:px-4 mx-auto">
                <div class="md:flex justify-between md:space-x-6">
                    <div
                        class="hidden md:block md:w-[27%] md:border md:p-5 bg-white h-full md:rounded-xl border-gray-300">
                        <div>
                            <Search />
                        </div>
                        <div class="py-3">
                            <div class="grid md:grid-cols-2 gap-2">
                                <div class="flex space-x-3 items-center" v-for="(item, i) in employmentTypes" :key="i">
                                    <input type="radio" name="employmentType" />
                                    <span class="text-gray-500"> {{ item }} </span>
                                </div>
                            </div>
                        </div>
                        <div class="py-3">
                            <h1 class="font-bold py-3">Filter by Category</h1>
                            <div class="flex space-x-3 py-1.5 items-center" v-for="i in 10" :key="i">
                                <input type="checkbox" />
                                <span class="text-gray-500">Category {{ i + 1 }} </span>
                            </div>
                        </div>
                    </div>
                    <!-- mobile view  -->
                    <div class="block md:hidden bg-gray-100 p-5 flex justify-between space-x-3">
                        <Search />
                        <button
                            class="flex items-center justify-center space-x-3 bg-blue-500 rounded shadow px-2 text-white">
                            <span>Filters</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                            </svg>
                        </button>
                    </div>
                    <!-- mobile view  -->
                    <CareerDetail/>
                    <div class="w-full md:w-[73%] md:h-screen md:pb-[200px] md:overflow-y-auto">
                        <div class="md:flex justify-between md:space-x-5">
                            <div class="w-full md:w-[65%] bg-white md:rounded-xl md:border border-gray-300">
                                <div v-for="(item, i) in jobs.data" :key="i" :class="i < 1 ? 'md:rounded-t-xl' : ''"
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
                            <div class="w-[35%] hidden md:block">
                                <section>
                                    <div class="bg-white p-5 rounded-xl border border-gray-300">
                                        <p class="text-gray-600 text-center pb-5">
                                            Explore our curated guide of expert-led courses, such as how to improve your
                                            resume and grow your network, to help you land your next opportunity.
                                        </p>
                                        <RouterLink to="/support"
                                            class="text-center bg-white flex space-x-3 justify-center items-center shadow-xl block rounded-full px-6 py-1.5 border border-blue-600 text-blue-600 shadow-sm ">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                            </svg>
                                            <span>Post a free job</span>
                                        </RouterLink>
                                    </div>
                                </section>
                                <section class="pt-5">
                                    <div class="bg-white p-5 rounded-xl border border-gray-300">
                                        <div class="flex items-center">
                                            <p class="font-semibold">I want to improve my resume</p>
                                            <div class="w-[100px]">
                                                <img src="https://www.linkedin.com/dms/C4D0DAQFdDVwn9b17iA/learning-public-crop_60_100/0/1568251157263?m=AQLaiJKiLYVMzgAAAYSgvnpxEU8-9CX48DzG5oAcHeh0MLShZcj97QeFRQ&e=1669230548&v=beta&t=SJh0B5B9_raA9osSqfo-D5Cz0URi5JV-sW8vg0UtHmY"
                                                    class="w-full h-full rounded" alt="">
                                            </div>
                                        </div>
                                        <p class="text-gray-600 py-2">
                                            Explore our curated guide of expert-led courses, such as how to improve your
                                            resume and grow your network, to help you land your next opportunity.
                                        </p>
                                        <RouterLink to="/support" class="flex space-x-3 ">
                                            <span>Show more</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                            </svg>
                                        </RouterLink>
                                    </div>
                                </section>
                                <section class="py-5">
                                    <div class="py-y bg-white p-5 rounded-xl border border-gray-300">
                                        <h1 class="text-lg font-semibold">Userful tips for getting a job</h1>
                                        <div class="py-2" v-for="i in 5" :key="i">
                                            <div class="flex space-x-2 text-gray-700">
                                                <span>{{ i }}. </span>
                                                <span>Protect yourself from fraud in your job search</span>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
