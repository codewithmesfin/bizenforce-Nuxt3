
<template>
  <div>
    <section>
      <div class="md:flex md:ml-auto w-full  md:max-w-[94%] pt-16">
        <main class="
              mx-auto
              max-w-[100%]
             xs:w-[100%]
             md:w-[50%]
              px-4
             md:pt-16 pt-8
             md:pr-16
            ">
          <div class="sm:text-center lg:text-left">
            <h1 class="
                  text-4xl font-sans
                  md:text-7xl
                  font-extrabold
                  text-center md:text-left 
                  capitalize
                ">
              <span class="text-gray-900">
                The best partner
              </span>
              <span class="
                text-blue-600 py-1
              ">
                You must have ®</span>
            </h1>
            <p class="py-4 text-gray-600   text-center md:text-left  text-lg md:text-xl">
              If you are striving for success, we are your best partner.
              We are a small team of Software Engineers. After working in some of the highest Tech
              Industries in, USA, and United Kingdom, we realized that our experience, technical skills, and
              our Tech values can be put to create technologies that will transform lives.
              <NuxtLink class="text-blue-600" to="/about">Learn More</NuxtLink>
            </p>
            <div>
              <section>
                <EmailCollectFieldVue />
              </section>
              <section class="py-5">
                <div class="flex justify-between items-center">
                  <div class="h-[1px] w-[70%] bg-gray-200"></div>
                  <div class="w-[20%] text-center">Or</div>
                  <div class="h-[1px] w-[70%] bg-gray-200"></div>
                </div>
              </section>
              <section>
                <div class="flex justify-evenly md:justify-between">
                  <button
                    class=" flex items-center rounded-lg px-4 py-2.5 text-base text-gray-900 md:ring-1 md:ring-gray-900/10 hover:ring-gray-900/20">
                    <img src="~/assets/google.png" alt="google" class="h-6 w-6">
                    <span class="pl-2 hidden md:block">Join with Google</span>
                  </button>
                  <button
                    class=" flex  items-center rounded-lg px-4 py-2.5 text-base text-gray-900 md:ring-1 md:ring-gray-900/10 hover:ring-gray-900/20">
                    <img src="~/assets/linkedin.png" alt="google" class="h-6 w-6">
                    <span class="pl-2 hidden md:block">Join with Linkedin</span>
                  </button>
                  <button
                    class=" flex  items-center rounded-lg px-4 py-2.5 text-base text-gray-900 md:ring-1 md:ring-gray-900/10 hover:ring-gray-900/20">
                    <img src="~/assets/facebook.png" alt="google" class="h-6 w-6">
                    <span class="pl-2 hidden md:block">Join with Facebook</span>
                  </button>
                </div>
              </section>
            </div>
          </div>
        </main>
        <div class="xs:w-[100%] hidden md:block
             md:w-[50%] lg:inset-y-0 lg:right-0 lg:w-1/2">

          <img class="h-56  md:w-full object-cover sm:h-72 md:h-96 lg:w-full min-h-[550px]" src="~/assets/main-bg.webp"
            alt="" />
        </div>
      </div>
    </section>

    <section class="py-12">
      <h1 class="text-center text-xl font-sans font-semibold">We can help you integrate 1000+ Seamless APIs</h1>
      <div class="hidden md:max-w-7xl md:flex justify-center w-[100%] py-4 px-4  mt-6 mx-auto">
        <div class="grid grid-flow-col auto-cols-max gap-6 items-center">
          <div v-for="(img, i) in integrations" :key="i">
            <img :src="img" alt="" class="max-h-[40px] w-[75%]">
          </div>
        </div>
      </div>
      <div class="md:hidden md:max-w-7xl w-[100%] py-4 px-4  mt-6 mx-auto">
        <div class="grid grid-cols-3 gap-6 items-center">
          <div v-for="(img, i) in integrations" :key="i">
            <img :src="img" alt="" class="max-h-[40px] max-w-[100px]">
          </div>
        </div>
      </div>
    </section>


    <section>
      <div class="md:max-w-7xl justify-center w-[100%] py-4 px-4  mt-6 mx-auto">
        <div class=" md:max-w-[80%] mx-auto">
          <h1 class="
                  text-2xl font-sans
                  md:text-6xl
                  font-extrabold
                  text-center
                  capitalize
                ">
            <!-- The First and Only Real-Time Search Engine for B2B Sales Leads -->
            The Honest and reliable tech partner working for your success.
          </h1>
          <p class="py-4 text-center text-gray-600 text-lg md:text-xl">
            Our vision is to enable vibrant technologies amidst a world dominated by few giants. As our first step
            in this grand journey we are engineering the rails on which our partners' business flows because we believe that a real-time, simple to use, responsive to customer's need
            platform will act as a catalyst to unlock business opportunities everywhere.
          </p>
        </div>

      </div>
    </section>



    <section>
      <div class="md:max-w-7xl w-[100%] py-4 px-4  mt-6 mx-auto">
        <div class="md:flex md:space-x-6 justify-between">
          <div v-for="(item,i) in serviceList" :key="i" class="cursor-pointer py-3">
            <div class="max-w-sm h-full rounded-xl overflow-hidden shadow-xl border border-gray-100">
              <img class="w-full h-32 "
                :src="item.img"
                alt="Sunset in the mountains">
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{{item.title}} </div>
                <p class="text-gray-700 text-base">
                 {{item.desc}}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-center mt-6">
          <RouterLink to="/services"
            class="inline-block shadow-xl rounded-lg bg-blue-600 px-4 py-2.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-blue-600 hover:bg-blue-700 hover:ring-blue-700">
            See all services
            <span class="text-blue-200" aria-hidden="true">&rarr;</span>
          </RouterLink>
        </div>
      </div>
    </section>


    <section>
      <div class="md:max-w-7xl justify-center w-[100%] py-4 px-4 pt-12 mx-auto">
        <div class="md:flex md:space-x-10">
          <div class="w-full md:w-1/2">
            <h2 class="font-semibold text-blue-500 py-3">GET A BETTER SOLUTION</h2>
            <h1 class="text-xl md:text-5xl py-2 font-extrabold capitalize">
              We are working hard to delivery quality service
            </h1>
            <p class="py-2 text-lg">
             The team at BizEnfore is busy to for delivering high quality product and 
             service and their continuous improvement within the emerging technologies.
            </p>
            <RouterLink to="/support"
              class="inline-block shadow-xl my-3 rounded-lg bg-blue-600 px-6 py-2.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-blue-600 hover:bg-blue-700 hover:ring-blue-700">
              Contact us now
            </RouterLink>
          </div>
          <div class="w-full md:w-1/2">
            <img src="~/assets/sol.png" alt="">
          </div>
        </div>
      </div>
    </section>


    <section class="bg-[#edf2f7] pt-6 pb-12">
      <div class="md:max-w-7xl justify-center w-[100%] py-4 px-4  mt-6 mx-auto">
        <div class=" md:max-w-[70%] mx-auto">
          <h1 class="
                  text-2xl font-sans
                  md:text-6xl
                  font-extrabold
                  text-center
                ">
            Let us do it for you
          </h1>
          <p class="py-4 text-center text-gray-600 text-lg md:text-xl">
            Let us know the problems in your business, we will setup a discussion session, once we clearly understand
            your business rules and problems , we will come up with an affordable software solution...
            <NuxtLink class="text-blue-600" to="/services">Learn More</NuxtLink>
          </p>
        </div>
        <div class="md:flex md:justify-evenly">
          <div class="md:w-[30%] my-3 shadow bg-white border border-gray-200 p-10 cursor-pointer">
            <h1 class="text-center text-[#2196f3] text-6xl font-extrabold">1</h1>
            <h1 class="text-center text-[#2196f3] text-xl font-semibold">Tell us your problems</h1>
          </div>
          <div class="md:w-[30%] my-3 shadow bg-white border border-gray-200 p-10 cursor-pointer">
            <h1 class="text-center text-black text-6xl font-extrabold">2</h1>
            <h1 class="text-center text-black text-xl font-semibold">Let us create the right solution</h1>
          </div>
          <div class="md:w-[30%] my-3 shadow bg-white border border-gray-200 p-10 cursor-pointer">
            <h1 class="text-center text-blue-500 text-6xl font-extrabold">3</h1>
            <h1 class="text-center text-blue-500 text-xl font-semibold">Enjoy success in your business</h1>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import EmailCollectFieldVue from '~/components/EmailCollectField.vue';
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
  linkedin, instagram, sai
]

const serviceList=[
  {
    img:"https://img.freepik.com/free-vector/data-centers-are-data-centers-serve-applications-supporting-business-information-cloud-computing-technology-business-analysis-analytics-research-strategy-statistic-planning-marketing_1150-55220.jpg?w=1800&t=st=1668960417~exp=1668961017~hmac=6478baa595c5d0f38e90fcbb7c02296afa0eeaf9626cfe98e2f133373988b45b",
    title:"Tech Consultant",
    desc:"Let us discuss on your ideas and rise it to your dream success"
  },
  {
    img:"https://kinsta.com/de/wp-content/uploads/sites/5/2019/11/woocommerce-crm-1024x512.png",
    title:"System Developer",
    desc:"We can transform your ideas into a problem solving systems. You will proud of us."
  },
  {
    img:"https://img.freepik.com/free-vector/female-student-listening-webinar-online_74855-6461.jpg?w=2000&t=st=1668960950~exp=1668961550~hmac=6747921465eda3ea30df84ea43e07264e44786a77d0d3c07bb70b5e691d59d0d",
    title:"Improve online presence",
    desc:"Our teams work hard to help your business is ranked high online"
  },
  {
    img:"https://img.freepik.com/free-vector/gradient-api-illustration_23-2149373204.jpg?w=2000&t=st=1668961150~exp=1668961750~hmac=0a7ec352a5c8ec3e13ce1335f88220276537fd16b0ef172d7cf3d9ec8f2198cb",
    title:"Integraions",
    desc:"We can integrate your business with 1000+ renowned APIs and systems"
  }
]
</script>


<style>
.line-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>