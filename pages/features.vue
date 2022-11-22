<template>
    <div>
        <section class="md:max-w-7xl justify-center w-[100%] px-4  mx-auto">
            <div class="py-32 md:py-12">
                <div class="md:flex justify-between items-center md:space-x-10">
                    <div class="md:max-w-[70%] mx-auto xs:w-[100%] md:w-[50%] ">
                        <h1 class="
                        text-4xl font-sans
                        md:text-6xl 
                        font-extrabold text-center md:text-left
                        ">
                            Solutions are made simpler with new technology!
                        </h1>
                        <p class="py-4  text-center md:text-left text-gray-600 text-lg md:text-xl">
                            Innovating exceptionally fruitful solutions is what BizEnforec does best. We focus on
                            identifying key problems in your business and coming up with solutions that will help you
                            overcome these challenges. By working with us, you can be sure that you are getting the best
                            possible service and results.
                        </p>
                        <section>
                            <EmailCollectFieldVue />
                        </section>
                    </div>
                    <div class="xs:w-[100%] md:w-[50%] lg:inset-y-0 lg:right-0 lg:w-1/2">
                        <img class="h-56 md:w-full object-cover sm:h-72 md:h-96 lg:w-full min-h-[550px]"
                            src="~/assets/feature.png" loading="lazy" alt="" />
                    </div>
                </div>
            </div>
        </section>
        <section class="md:max-w-7xl pt-8 justify-center w-[100%] px-4  mx-auto">
            <div class="">
                <div class="md:max-w-[70%] mx-auto">
                    <h1 class="
                  text-2xl font-sans
                  md:text-6xl
                  font-extrabold
                  text-center
                ">
                        Find Your Ideal Solutions
                    </h1>
                    <p class="py-4 text-center text-gray-600 text-lg md:text-xl">
                        Our dream is to build a tech oriented solution that will elevate your business success. We want
                        to work with you to create a system that is easy to use and helps you save time and money.
                    </p>
                </div>
            </div>
            <div class="md:flex justify-between md:space-x-10">
                <div class="w-full md:w-1/3">
                    <div v-for="(item, i) in topFeatures" :key="i" class="py-2">
                        <h1 class="text-blue-600 font-bold text-xl md:text-2xl py-2">{{ item.title }} </h1>
                        <h1 class="text-lg text-gray-500">{{ item.subtitle }} </h1>
                    </div>
                    <RouterLink to="/auth/signin"
                        class="inline-block shadow-xl my-3 rounded-lg bg-blue-600 px-10 py-2.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-blue-600 hover:bg-blue-700 hover:ring-blue-700">
                        Reach us now
                    </RouterLink>
                </div>
                <div class="w-full md:w-1/2">
                    <img src="~/assets/sol2.png" alt="" class="h-full w-full max-h-[500px]">
                </div>
            </div>
        </section>
        <section class="md:max-w-7xl pt-12 justify-center w-[100%] px-4  mx-auto">
            <div class="">
                <div class=" md:max-w-[70%] mx-auto">
                    <h1 class="
                  text-2xl font-sans
                  md:text-6xl
                  font-extrabold
                  text-center
                ">
                        Accuracy You Can Count On
                    </h1>
                    <p class="py-4 text-center text-gray-600 text-lg md:text-xl">
                        Fuel your GTM engine with highly accurate B2B cell phones, email addresses and direct dials.
                    </p>
                </div>
            </div>
            <div class="md:flex justify-between md:space-x-20">
                <div class="w-full md:w-1/2">
                    <img src="~/assets/ft2.png" alt="" class="h-full w-full max-h-[500px]">
                </div>
                <div class="w-full md:w-1/2">
                    <div v-for="(item, i) in topFeatures2" :key="i" class="py-2">
                        <h1 class="text-blue-600 font-bold text-xl md:text-2xl py-2">{{ item.title }} </h1>
                        <h1 class="text-lg text-gray-500">{{ item.subtitle }} </h1>
                    </div>
                    <RouterLink to="/auth/signin"
                        class="inline-block shadow-xl my-3 rounded-lg bg-blue-600 px-10 py-2.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-blue-600 hover:bg-blue-700 hover:ring-blue-700">
                        Reach us now
                    </RouterLink>
                </div>

            </div>
        </section>

        <section class="md:max-w-7xl pt-8 justify-center w-[100%] px-4  mx-auto">
            <div class="">
                <div class=" md:max-w-[70%] mx-auto">
                    <h1 class="
                  text-2xl font-sans
                  md:text-6xl
                  font-extrabold
                  text-center
                ">
                        Maximize Activity and Output
                    </h1>
                    <p class="py-4 text-center text-gray-600 text-lg md:text-xl">
                        Easily build pipeline and discover target accounts with powerful firmographic filters and
                        business insights.
                    </p>
                </div>
            </div>
            <div class="md:flex justify-between md:space-x-10">
                <div class="w-full md:w-1/3">
                    <div v-for="(item, i) in topFeatures" :key="i" class="py-2">
                        <h1 class="text-blue-600 font-bold text-xl md:text-2xl py-2">{{ item.title }} </h1>
                        <h1 class="text-lg text-gray-500">{{ item.subtitle }} </h1>
                    </div>
                    <RouterLink to="/auth/signin"
                        class="inline-block shadow-xl my-3 rounded-lg bg-blue-600 px-10 py-2.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-blue-600 hover:bg-blue-700 hover:ring-blue-700">
                        Reach us now
                    </RouterLink>
                </div>
                <div class="w-full md:w-1/2">
                    <img src="~/assets/ft3.png" alt="" class="h-full w-full max-h-[500px]">
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import EmailCollectFieldVue from '~/components/EmailCollectField.vue';
const topFeatures = [
    {
        title: "Get advice from tech experts.",
        subtitle: "BizEnforce helps businesses find solutions to their problems. It is rich of professionals experienced in solving real world problems."
    },
    {
        title: "Make your idea valuable",
        subtitle: "BizEnforce is your best partner. It helps you to research your ideas, discuss, and ready for innovation."
    },
    {
        title: "Get your dream business succeed",
        subtitle: "Technology has always been about transformation. Taking an idea and turning it into something that can solve problems. That's what we're all about."
    }
]
const topFeatures2 = [
    {
        title: "Connect Direcly to Professonals",
        subtitle: "Access contact and company profiles complete with verified emails and cell phones."
    },
    {
        title: "Real-Time Data Verification",
        subtitle: "We use AI and machine learning to research and verify data on millions of people and companies in real-time."
    },
    {
        title: "Know Everything About Your Prospects",
        subtitle: "Get hidden intelligence to determine your buyer’s needs to shape the right messaging before reaching out."
    }
]
useHead({
    title: 'Features',
    meta: [
        { name: 'description', content: 'Prospecting Made Simpler' }
    ],
})
</script>