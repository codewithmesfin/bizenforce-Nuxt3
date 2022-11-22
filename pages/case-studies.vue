<template>
    <div>
        <section class="md:max-w-7xl justify-center w-[100%] px-4  mx-auto">
            <div class="pt-24 px-5">
                <div class="md:flex justify-between items-center md:space-x-10">
                    <div class="md:max-w-[70%]  mx-auto xs:w-[100%] md:w-[50%] ">
                        <h1 class="text-blue-600 font-bold py-3 text-lg">CASE STUDIES</h1>
                        <h1 class="
                        text-2xl font-sans
                        md:text-6xl
                        font-extrabold
                        ">
                            See How Our Clients Succeed Their Business
                        </h1>
                        <p class="py-4  text-gray-600 text-lg md:text-xl">
                            Hundreds of thousands of professionals, marketers, students, and entrepreneurs trust BizEnforce. Check
                            out the success stories below to see how companies like working with BizEnforce to maximize
                            revenue.
                        </p>
                        <div class="flex space-x-3 md:space-x-10">
                            <RouterLink to="/auth/signin"
                                class="inline-block shadow-xl my-3 rounded-lg px-5 md:px-10 py-2.5  font-semibold leading-7 text-blue-600 shadow-sm  border border-gray-400">
                                Reach us now
                            </RouterLink>
                            <RouterLink to="/auth/signin"
                                class="inline-block shadow-xl my-3 rounded-lg bg-blue-600 px-5 md:px-10 py-2.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-blue-600 hover:bg-blue-700 hover:ring-blue-700">
                                Read Stories
                            </RouterLink>
                        </div>
                    </div>
                    <div class="xs:w-[100%] md:w-[50%] lg:inset-y-0 lg:right-0 lg:w-1/2 hidden md:block">
                        <img class="h-56  md:w-full object-cover sm:h-72 md:h-96 lg:w-full min-h-[550px]"
                            src="https://cdn.searchenginejournal.com/wp-content/uploads/2020/09/how-to-plan-a-sustainable-b2b-media-strategy-in-a-recession-5f71be832df0f-1280x720.png"
                            alt="" />
                    </div>
                </div>
            </div>
        </section>

        <section class="md:max-w-7xl justify-center w-[100%] px-4 py-10 mx-auto">
            <div>
                <div class="md:flex px-3 items-center md:space-x-10">
                    <div class="w-full md:w-[40%]">
                        <h1 class="text-xl md:text-3xl font-semibold">
                            Working closely with the highest tech companies trusted
                            by the world.
                        </h1>
                    </div>
                    <div class="w-full md:w-[60%]">
                        <div class="grid grid-cols-3 md:grid-cols-5 gap-4 py-5">
                            <div v-for="(img, i) in integrations" :key="i">
                                <img :src="img" alt="" class="max-h-[30px] rounded max-w-[100px]">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="md:max-w-7xl justify-center w-[100%] px-4  mx-auto">
            <div class="pt-12">
                <div class="md:flex justify-between items-center md:space-x-10">
                    <div class="xs:w-[100%] md:w-[50%] lg:inset-y-0 lg:right-0 lg:w-1/2">
                        <h1 class="
                        text-2xl font-sans
                        md:text-6xl
                        font-extrabold py-6 pb-12
                        ">
                            Featured Stories
                        </h1>
                        <img class="h-56  md:w-full object-cover sm:h-72 md:h-96 lg:w-full md:min-h-[550px]"
                            src="https://www.nestle.com/sites/default/files/nescafe-plan-woman-coffee-banner.jpg"
                            alt="" />
                    </div>
                    <div class="md:max-w-[70%] mx-auto xs:w-[100%] md:w-[50%] ">
                        <h1
                            class="text-blue-600 mt-3 text-center rounded-full w-[150px] font-semibold p-1 text-sm border border-gray-200">
                            Coffee Exporter</h1>
                        <h1 class="
                        text-2xl font-sans
                        md:text-6xl
                        font-extrabold py-2
                        ">
                            See How Our Tesfa Mergia Generates Millions
                        </h1>
                        <p class="py-4  text-gray-600 text-lg md:text-xl">
                          The Awesome team, at BizEnforce is exceptionally professional, creativity, and fruitful.
                            They helped us to succeed our business "Tesfa Coffee Trade" from smaller road-side cafe to 
                            giant Coffee experting company.
                        </p>
                        <div class="flex justify-between items-center">
                            <div>
                                <h1 class="text-xl md:text-4xl font-extrabold">Tesfa Mergia</h1>
                                <h1 class="text-lg ">Chief Executive Officer</h1>
                                <a target="_blank" class="text-blue-600" href="https://www.tesfacoffee.com/">Visit
                                    https://www.tesfacoffee.com</a>
                            </div>
                            <div>
                                <img class="h-32 w-32" src="https://www.tesfacoffee.com/img/logo.7cd9d40b.jpg" alt="">
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import aws from '~/assets/aws.png'
import ggl from '~/assets/ggl.png'
import mainchimp from '~/assets/mailchimp.jpeg'
import fb from '~/assets/fb.png'
import twilio from '~/assets/twilio.png'
import salesforce from '~/assets/salesforce.png'
import linkedin from '~/assets/linkedin.png'
import instagram from '~/assets/instagram.jpeg'
import sai from '~/assets/sai.png'
const integrations = [
   aws,
    ggl,
    mainchimp,
    fb,
    twilio,
    salesforce,
    linkedin,
    instagram,
    sai
]
</script>