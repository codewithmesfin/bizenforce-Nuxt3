
<template>
  <div>
    <section>
      <div class="md:flex ml-auto  md:max-w-[94%] pt-16">
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
                  text-2xl font-sans
                  md:text-7xl
                  font-extrabold
                  text-center md:text-left
                ">
              <p class="text-gray-900">
                The World's Best
              </p>
              <p class="
                text-blue-600 py-1
              ">
                Sales Leads®</p>
            </h1>
            <p class="py-4 text-gray-600 text-lg md:text-xl">
              Our sales software finds verified cell phones, emails, and direct dials for anyone you need to sell to.
              Get 50 free credits with no credit card down and discover why 300,000+ companies use Seamless.AI to grow
              their business. <NuxtLink class="text-blue-600" to="/learn-more">Learn More ...</NuxtLink>
            </p>
            <div>
              <section>
               <EmailCollectFieldVue/>
              </section>
              <section class="py-5">
                <div class="flex justify-between items-center">
                  <div class="h-[1px] w-[70%] bg-gray-200"></div>
                  <div class="w-[20%] text-center">Or</div>
                  <div class="h-[1px] w-[70%] bg-gray-200"></div>
                </div>
              </section>
              <section>
                <div class="flex justify-between">
                  <button
                    class=" flex  items-center rounded-lg px-4 py-2.5 text-base text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                    <img src="~/assets/google.png" alt="google" class="h-6 w-6">
                    <span class="pl-2">Join with Google</span>
                  </button>
                  <button
                    class=" flex  items-center rounded-lg px-4 py-2.5 text-base text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                    <img src="~/assets/linkedin.png" alt="google" class="h-6 w-6">
                    <span class="pl-2">Join with Linkedin</span>
                  </button>
                  <button
                    class=" flex  items-center rounded-lg px-4 py-2.5 text-base text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                    <img src="~/assets/facebook.png" alt="google" class="h-6 w-6">
                    <span class="pl-2">Join with Facebook</span>
                  </button>
                </div>
              </section>
            </div>
          </div>
        </main>
        <div class="xs:w-[100%]
             md:w-[50%] lg:inset-y-0 lg:right-0 lg:w-1/2">

          <img class="h-56  md:w-full object-cover sm:h-72 md:h-96 lg:w-full min-h-[550px]" src="~/assets/main-bg.webp"
            alt="" />
        </div>
      </div>
    </section>

    <section class="py-12">
      <h1 class="text-center text-xl font-sans font-semibold">Integrate 1000+ Seamless APIs</h1>
      <div class="md:max-w-7xl flex justify-center w-[100%] py-4 px-4  mt-6 mx-auto">
        <div class="grid grid-flow-col auto-cols-max gap-6 items-center">
          <div v-for="(img, i) in integrations" :key="i">
            <img :src="img" alt="" class="max-h-[40px] w-[75%]">
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
                ">
            The First and Only Real-Time Search Engine for B2B Sales Leads
          </h1>
          <p class="py-4 text-center text-gray-600 text-lg md:text-xl">
            Seamless.AI’s search engine helps you connect directly with your ideal customers so you can build pipeline,
            shorten your sales cycle, and close more deals at scale. Leverage our real-time people search engine to
            build
            a massive list of decision-makers.
          </p>
        </div>

      </div>
    </section>

    <section>
      <div class="md:max-w-7xl justify-center w-[100%] py-4 px-4  mt-6 mx-auto">
        <div class="flex space-x-6 justify-between">
          <div v-for="i in 4" :key="i" class="cursor-pointer">
            <div class="max-w-sm rounded-xl overflow-hidden shadow-xl border border-gray-100">
              <img class="w-full h-32 "
                src="https://kinsta.com/de/wp-content/uploads/sites/5/2019/11/woocommerce-crm-1024x512.png"
                alt="Sunset in the mountains">
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                <p class="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-center mt-6">
          <RouterLink to="/auth/signin"
            class="inline-block shadow-xl rounded-lg bg-blue-600 px-4 py-2.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-blue-600 hover:bg-blue-700 hover:ring-blue-700">
            See all services
            <span class="text-blue-200" aria-hidden="true">&rarr;</span>
          </RouterLink>
        </div>
      </div>
    </section>

    <section>
      <div class="md:max-w-7xl justify-center w-[100%] py-4 px-4 pt-12 mx-auto">
        <div class="flex space-x-10">
          <div class="w-1/2">
            <h2 class="font-semibold text-blue-500 py-3">SALES PROSPECTING SOLUTION</h2>
            <h1 class="text-xl md:text-5xl py-2 font-extrabold">Get in Front of the Right Sales Prospects</h1>
            <p class="py-2 text-lg">
              Spend more time selling, and less time building sales prospecting lists. Use our sales software to build
              accurate leads lists, find the right people to contact, and crush quota!
            </p>
            <RouterLink to="/auth/signin"
              class="inline-block shadow-xl my-3 rounded-lg bg-blue-600 px-6 py-2.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-blue-600 hover:bg-blue-700 hover:ring-blue-700">
              Contact us now
            </RouterLink>
          </div>
          <div class="w-1/2">
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
            <NuxtLink class="text-blue-600" to="/learn-more">Learn More ...</NuxtLink>
          </p>
        </div>
        <div class="flex justify-evenly">
          <div class="w-[30%] shadow bg-white border border-gray-200 p-10 cursor-pointer">
            <h1 class="text-center text-[#2196f3] text-6xl font-extrabold">1</h1>
            <h1 class="text-center text-[#2196f3] text-xl font-semibold">Tell us your problems</h1>
          </div>
          <div class="w-[30%] shadow bg-white border border-gray-200 p-10 cursor-pointer">
            <h1 class="text-center text-black text-6xl font-extrabold">2</h1>
            <h1 class="text-center text-black text-xl font-semibold">Let us create the right solution</h1>
          </div>
          <div class="w-[30%] shadow bg-white border border-gray-200 p-10 cursor-pointer">
            <h1 class="text-center text-green-500 text-6xl font-extrabold">3</h1>
            <h1 class="text-center text-green-500 text-xl font-semibold">Enjoy success in your business</h1>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import EmailCollectFieldVue from '~/components/EmailCollectField.vue';
const integrations = [
  '../assets/aws.png',
  '../assets/ggl.png',
  '../assets/mailchimp.jpeg',
  '../assets/fb.png',
  '../assets/twilio.png',
  '../assets/salesforce.png',
  '../assets/linkedin.png',
  '../assets/instagram.jpeg',
  '../assets/sai.png',
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