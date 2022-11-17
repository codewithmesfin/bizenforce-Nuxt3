<template>
    <div>
        <section class="bg-black bg2 py-10">
            <div class="md:max-w-[60%] px-5  md:pt-12 mx-auto md:px-2 sm:px-6 lg:px-8 ">
                <div>
                    <h2 class="text-lg text-gray-100 font-semibold py-2 text-center">Our Services</h2>
                    <h2 class="text-3xl text-center font-extrabold text-white md:text-6xl py-3">
                        To help the world connect to opportunity and positively impact billions.
                    </h2>
                    <p class="text-md md:text-lg text-center font-normal text-white mx-auto py-3">
                        We’re on a mission to help the world connect to opportunity and positively impact billions…This
                        starts with our employees. We take great pride in our culture and the team we’ve built. We
                        embrace open collaboration and creativity. We encourage the iteration of ideas that address the
                        world’s most complex technical sales challenges.
                    </p>
                </div>
            </div>
        </section>
        <section class="pb-10 px-3 md:px-0">
            <div class="md:max-w-7xl justify-center w-[100%] md:px-4 mx-auto">
                <div class="py-6 grid md:grid-cols-2 gap-4">
                    <div v-for="(item, i) in services" :key="i"  class="py-4 cursor-pointer">
                        <div class="md:flex md:items-center md:space-x-10">
                            <div class="md:w-1/2">
                                <img :src="item.img" alt="" class="w-32 md:w-full md:min-w-72 h-32 md:h-72 mx-auto">
                            </div>
                            <div class="md:w-1/2">
                                <h1 class="font-extrabold text-center md:text-left text-xl md:text-4xl py-3">{{ item.title }} </h1>
                                <p class="text-center md:text-left">{{ item.desc }} </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
const services = [
    {
        img: "https://usingtechnologybetter.com/wp-content/uploads/2020/08/Illustration-0.png",
        title: "Tech Advice and Consultancy",
        desc: `Lorem ipsum, in graphical and textual context, refers to filler text that is placed in a document or visual presentation . Lorem ipsum is derived from the Latin "dolorem ipsum" roughly translated as "pain itself."`
    },
    {
        img: "https://unida.ac.id/teknologi/assets/images/post/e0467db2ddbc7edc4e29c10616e046a0.jpg",
        title: "Mobile Applications Development",
        desc: `Lorem ipsum, in graphical and textual context, refers to filler text that is placed in a document or visual presentation . Lorem ipsum is derived from the Latin "dolorem ipsum" roughly translated as "pain itself."`
    },
    {
        img: "https://alpinesolves.com/wp-content/uploads/2021/09/we-are-your-talent.png",
        title: "Website and web bases apps Development",
        desc: `Lorem ipsum, in graphical and textual context, refers to filler text that is placed in a document or visual presentation . Lorem ipsum is derived from the Latin "dolorem ipsum" roughly translated as "pain itself."`
    },
    {
        img: "https://www.labnol.org/static/e523a04ed5cd2a334656e02a7cf4a51d/75494/chrome-extensions.png",
        title: "Chrome extensions Development",
        desc: `Lorem ipsum, in graphical and textual context, refers to filler text that is placed in a document or visual presentation . Lorem ipsum is derived from the Latin "dolorem ipsum" roughly translated as "pain itself."`
    },
    {
        img: "https://storage.googleapis.com/gweb-cloudblog-publish/original_images/Google_Blog_api-management-03_1.jpg",
        title: "API Development and Integrations",
        desc: `Lorem ipsum, in graphical and textual context, refers to filler text that is placed in a document or visual presentation . Lorem ipsum is derived from the Latin "dolorem ipsum" roughly translated as "pain itself."`
    },
    {
        img: "https://www.dicoding.com/blog/wp-content/uploads/2020/06/tujuan-devops.png",
        title: "DevOps and Cloud based Hosting",
        desc: `Lorem ipsum, in graphical and textual context, refers to filler text that is placed in a document or visual presentation . Lorem ipsum is derived from the Latin "dolorem ipsum" roughly translated as "pain itself."`
    },
]
</script>