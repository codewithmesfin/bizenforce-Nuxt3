<template>
    <div>
        <section class="md:max-w-7xl justify-center w-[100%] px-4  mx-auto">
            <div class="">
                <div class="flex justify-between items-center md:space-x-10">
                    <div class="md:max-w-[70%]  mx-auto xs:w-[100%] md:w-[50%] ">
                        <h1 class="
                        text-2xl font-sans
                        md:text-6xl
                        font-extrabold
                        ">
                            Prospecting Made Simpler
                        </h1>
                        <p class="py-4  text-gray-600 text-lg md:text-xl">
                            Seamless.AI gives you the ability to connect directly with your ideal customers so you can
                            build pipeline, shorten your sales cycle, and close more deals at scale.
                        </p>
                        <section>
                            <EmailCollectFieldVue />
                        </section>
                    </div>
                    <div class="xs:w-[100%] md:w-[50%] lg:inset-y-0 lg:right-0 lg:w-1/2">

                        <img class="h-56  md:w-full object-cover sm:h-72 md:h-96 lg:w-full min-h-[550px]"
                            src="https://img.freepik.com/free-vector/illustration-social-media-concept_53876-18383.jpg?w=1380&t=st=1668234398~exp=1668234998~hmac=59791121fceffa17f43c8bddda06a47f53c1a3f8b6784f89c928118fd0c198d4"
                            alt="" />
                    </div>
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
                        Find Your Ideal Solutions
                    </h1>
                    <p class="py-4 text-center text-gray-600 text-lg md:text-xl">
                        Easily build pipeline and discover target accounts with powerful firmographic filters and
                        business insights.
                    </p>
                </div>
            </div>
            <div class="flex justify-between md:space-x-10">
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
            <div class="flex justify-between md:space-x-20">
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
            <div class="flex justify-between md:space-x-10">
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

<script setup>
import EmailCollectFieldVue from '~/components/EmailCollectField.vue';
const topFeatures = [
    {
        title: "Crush Your Sales Quota",
        subtitle: "Simplify list-building to optimize pipeline generation and seller success across your organization."
    },
    {
        title: "Increase Rep Productivity by 45%",
        subtitle: "Keep reps focused on closing deals by automating their list-building and prospecting."
    },
    {
        title: "Prospect Less, Close More",
        subtitle: "A.I. recommendations continuously finds prospective buyers so you can proactively reach out."
    }
]
const topFeatures2=[
{
    title:"Connect Direcly to Professonals",
    subtitle:"Access contact and company profiles complete with verified emails and cell phones."
},
{
    title:"Real-Time Data Verification",
    subtitle:"We use AI and machine learning to research and verify data on millions of people and companies in real-time."
},
{
    title:"Know Everything About Your Prospects",
    subtitle:"Get hidden intelligence to determine your buyer’s needs to shape the right messaging before reaching out."
}
]
</script>