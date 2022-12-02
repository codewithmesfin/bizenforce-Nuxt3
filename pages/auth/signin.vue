<template>
  <section class="md:bg-black bg2 pt-10 md:pb-10">
    <div class="md:max-w-7xl md:px-5 md:pt-12 mx-auto md:px-2 sm:px-6 lg:px-8">
      <div class="md:flex justify-between items-center md:space-x-10 md:py-32">
        <div
          class="md:shadow-xs md:rounded bg-white w-full items-center md:w-[40%] p-10"
        >
          <div class="py-2">
            <label
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >Email Address</label
            >
            <input
              type="text"
              :class="user.email===''|| user.email.includes('@') ? 'border-gray-300' : 'border-red-600'"
              class="bg-white border text-gray-900 text-sm rounded-lg focus:ring-0 focus:outline-none block w-full p-2.5"
              placeholder="Enter your email"
              required
              v-model="user.email"
              @input="validateEmail(user.email)"
            />
          </div>
          <div class="py-2">
            <label
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >Password</label
            >
            <input
              type="password"
              class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-0 focus:outline-none block w-full p-2.5"
              placeholder="Enter your password"
              required
            />
          </div>
          <div class="py-2">
            <button
              class="inline-block my-3 w-full px-4 py-2.5 rounded-lg bg-blue-600 px-4 text-base font-semibold leading-6 text-white ring-1 ring-blue-600"
            >
              Sign in
              <span class="text-blue-200 ml-3" aria-hidden="true">&rarr;</span>
            </button>
          </div>
          <div>
            <!-- <section class="py-5">
                            <div class="flex justify-between items-center">
                                <div class="h-[1px] w-[60%] bg-gray-200"></div>
                                <div class="w-[70%] text-center">Or sign in with</div>
                                <div class="h-[1px] w-[60%] bg-gray-200"></div>
                            </div>
                        </section>
                        <section class="py-3">
                            <div class="flex justify-evenly md:justify-between">
                                <button
                                    class=" flex items-center rounded-lg px-4 py-2.5 text-base text-gray-900 md:ring-1 md:ring-gray-900/10 hover:ring-gray-900/20">
                                    <img src="~/assets/google.png" alt="google" class="h-6 w-6">
                                    <span class="pl-2 hidden md:block">Google</span>
                                </button>
                                <button
                                    class=" flex  items-center rounded-lg px-4 py-2.5 text-base text-gray-900 md:ring-1 md:ring-gray-900/10 hover:ring-gray-900/20">
                                    <img src="~/assets/linkedin.png" alt="google" class="h-6 w-6">
                                    <span class="pl-2 hidden md:block">Linkedin</span>
                                </button>
                                <button
                                    class=" flex  items-center rounded-lg px-4 py-2.5 text-base text-gray-900 md:ring-1 md:ring-gray-900/10 hover:ring-gray-900/20">
                                    <img src="~/assets/facebook.png" alt="google" class="h-6 w-6">
                                    <span class="pl-2 hidden md:block">Facebook</span>
                                </button>
                            </div>
                        </section> -->
            <section class="py-3">
              <div class="flex justify-between space-x-10">
                <RouterLink
                  class="text-blue-600 text-xs md:text-sm"
                  to="/forgot-password"
                  >Forgot your password?</RouterLink
                >
                <RouterLink
                  class="text-blue-600 text-xs md:text-sm"
                  to="/auth/signup"
                  >Create new account</RouterLink
                >
              </div>
            </section>
          </div>
        </div>
        <div class="hidden md:block md:w-1/2">
          <h2 class="text-lg text-gray-100 font-semibold py-2 r">
            Sign in to BizEnforce
          </h2>
          <h2 class="text-3xl font-extrabold text-white md:text-6xl py-3">
            To help the world connect to opportunity and positively impact
            billions.
          </h2>
          <p class="text-md md:text-lg font-normal text-white mx-auto py-3">
            We’re on a mission to help the world connect to opportunity and
            positively impact billions…This starts with our employees. We take
            great pride in our culture and the team we’ve built. We embrace open
            collaboration and creativity. We encourage the iteration of ideas
            that address the world’s most complex technical sales challenges.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const user = ref({ email: "mesfin@gmail.com" });
const validInfo = ref({ email: true, password: true });

</script>
