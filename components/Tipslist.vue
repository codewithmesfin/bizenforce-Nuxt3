<template>

    <div class="md:w-[60%] mx-auto px-5 md:px-0">
        <h2
            class="md:text-6xl pb-3 leading-6 text-center md:text-left  text-xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Top Notch Support
        </h2>
        <p class="text-lg py-3 text-gray-800">
            Get expert guidance and assistance achieving your objectives
        </p>
        <div class="md:grid grid-cols-2 gap-4 ">
            <div v-for="(tip, i) in tips" :key="i"
                class="block my-5 md:my-2 flex items-center cursor-pointer p-2 md:p-6 max-w-sm bg-white rounded-lg md:border border-gray-100 md:shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
               <div>
                <p class="text-xl text-center font-extrabold"> {{ tip.title }}</p>
                <p class=" py-2 text-center">
                    <span class="two-line">{{ tip.desc }}</span>
                    <RouterLink to="/services" class="text-blue-600">Learn more</RouterLink>
                </p>
               </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const tips = [
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

<style scoped>
.two-line {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
</style>