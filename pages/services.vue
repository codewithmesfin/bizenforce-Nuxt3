<template>
    <div>
        <section class="bg-black bg2 py-32 md:py-10">
            <div class="md:max-w-[60%] px-5  md:pt-12 mx-auto md:px-2 sm:px-6 lg:px-8 ">
                <div>
                    <h2 class="text-lg text-gray-100 font-semibold py-2 text-center">Our Services</h2>
                    <h2 class="text-3xl text-center font-extrabold text-white md:text-6xl py-3">
                        To help the world connect to opportunity and positively impact business.
                    </h2>
                    <p class="text-md md:text-lg text-center font-normal text-white mx-auto py-3">
                        We’re on a mission to help you connect to opportunity and positively impact business. We'll be
                        sharing stories, insights, and resources to help you make the most of your work and make a
                        difference in the world. We're excited to get started, and we hope you are too. Let's make a
                        difference, together.
                    </p>
                </div>
            </div>
        </section>
        <section class="pb-10 px-3 md:px-0">
            <div class="md:max-w-7xl justify-center w-[100%] md:px-4 mx-auto">
                <div class="py-6 grid md:grid-cols-2 gap-4">
                    <div v-for="(item, i) in services" :key="i" class="py-4 cursor-pointer">
                        <div class="md:flex md:items-center md:space-x-10">
                            <div class="md:w-1/2">
                                <img :src="item.img" alt="" class="w-32 md:w-full md:min-w-72 h-32 md:h-72 mx-auto">
                            </div>
                            <div class="md:w-1/2">
                                <h1 class="font-extrabold text-center md:text-left text-xl md:text-4xl py-3">{{
                                        item.title
                                }} </h1>
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
        desc: `Our are open minded personnels to share with you our tech experience, skills, and suggestions. We can help you keeping your business success, avoid obstacles, and innovate new features.`
    },
    {
        img: "https://unida.ac.id/teknologi/assets/images/post/e0467db2ddbc7edc4e29c10616e046a0.jpg",
        title: "Mobile Applications Development",
        desc: `Is your business ready for a mobile app? Let us develop one for you and see the amazing opportunities it can unlock for your business. Our mobile apps are beautifully designed and simple to use, so you can focus on what's important - your customers."`
    },
    {
        img: "https://alpinesolves.com/wp-content/uploads/2021/09/we-are-your-talent.png",
        title: "Website and web bases apps Development",
        desc: `In today's business world, having a website is essential. A beautifully and user friendly designed websites and web based systems that responds to users need will unlock opportunities, increase revenue and customer satisfactions.`
    },
    {
        img: "https://www.labnol.org/static/e523a04ed5cd2a334656e02a7cf4a51d/75494/chrome-extensions.png",
        title: "Chrome extensions Development",
        desc: `Modern browsers like Google Chrome and Microsoft Edge make it easy to access websites, search the Web, even use other Web apps. But sometimes the browser may not have exactly what you want out-of-the-box. In these cases, a browser extension can help you customize your browsing experience`
    },
    {
        img: "https://storage.googleapis.com/gweb-cloudblog-publish/original_images/Google_Blog_api-management-03_1.jpg",
        title: "API Development and Integrations",
        desc: `API integrations enable companies to automate tasks, integrating their programs and databases with current industry applications . They ensure a smooth and continuous communication between various applications and allow workers to get the benefits of multiple cloud-based apps while enhancing product innovation`
    },
    {
        img: "https://www.dicoding.com/blog/wp-content/uploads/2020/06/tujuan-devops.png",
        title: "DevOps and Cloud based Hosting",
        desc: `With DevOps, there is continuous integration between the deployment of code and the testing of it . Near real-time monitoring and immediate feedback through a DevOps continuous monitoring tool enables both the developer and operations team to work together.`
    },
]
</script>