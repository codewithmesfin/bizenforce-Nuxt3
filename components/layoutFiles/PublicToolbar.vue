<!-- This example requires Tailwind CSS v2.0+ -->
<template>
    <Disclosure as="nav" class="bg-white fixed w-[100%] z-10" v-slot="{ open }">
        <div class="mx-auto  max-w-[90%] px-2 sm:px-6 lg:px-8">
            <div class="relative flex h-20 items-center justify-between">

                <div class="flex flex-1 items-center justify-center sm:justify-start">

                    <div class="flex-shrink-0 cursor-pointer flex items-center">
                        <RouterLink to="/" class="flex items-center">
                            <img class="h-8 w-auto" src="~/assets/logo.png" alt="Workflow" />
                            <span class="hidden md:block text-[#0065f2] text-2xl font-extrabold pl-3">BizEnforce</span>
                        </RouterLink>
                    </div>

                    <div class="hidden  sm:block">
                        <div
                            class="items-center md:space-x-8 justify-center justify-items-start md:justify-items-center md:flex md:pt-2 w-full left-0 top-16 px-5 md:px-10 py-3 md:py-0 border-t md:border-t-0">
                            <span v-for="(nav, i) in navigation" :key="i">
                                <NuxtLink :to="nav.href"
                                    :class="nav.current ? 'flex text-gray-600 cursor-pointer transition-colors duration-300 font-semibold text-blue-600' : 'flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300'">
                                    {{ nav.name }}
                                </NuxtLink>
                            </span>

                        </div>
                    </div>
                </div>
                <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <!-- Auth Links -->
                    <div class="flex items-center space-x-5 hidden md:flex">
                        <!-- Register -->
                        <RouterLink to="/auth/signup"
                            class="flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300">
                            <svg class="fill-current h-5 w-5 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24"
                                viewBox="0 0 24 24">
                                <path
                                    d="M12 0L11.34 .03L15.15 3.84L16.5 2.5C19.75 4.07 22.09 7.24 22.45 11H23.95C23.44 4.84 18.29 0 12 0M12 4C10.07 4 8.5 5.57 8.5 7.5C8.5 9.43 10.07 11 12 11C13.93 11 15.5 9.43 15.5 7.5C15.5 5.57 13.93 4 12 4M12 6C12.83 6 13.5 6.67 13.5 7.5C13.5 8.33 12.83 9 12 9C11.17 9 10.5 8.33 10.5 7.5C10.5 6.67 11.17 6 12 6M.05 13C.56 19.16 5.71 24 12 24L12.66 23.97L8.85 20.16L7.5 21.5C4.25 19.94 1.91 16.76 1.55 13H.05M12 13C8.13 13 5 14.57 5 16.5V18H19V16.5C19 14.57 15.87 13 12 13M12 15C14.11 15 15.61 15.53 16.39 16H7.61C8.39 15.53 9.89 15 12 15Z" />
                            </svg>
                            Login
                        </RouterLink>
                        <RouterLink to="/auth/signin"
                            class="inline-block shadow-xl rounded-lg bg-blue-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700">
                            Get started free 
                            <span class="text-indigo-200" aria-hidden="true">&rarr;</span>
                        </RouterLink>
                    </div>
                </div>
                <div class=" right-0  flex items-end sm:hidden">
                    <!-- Mobile menu button-->
                    <DisclosureButton class="inline-flex items-center justify-center rounded-md p-2">
                        <span class="sr-only">Open main menu</span>
                        <svg v-if="!open" class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24" stroke-width="1.5" stroke="black" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                        <svg v-else class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </DisclosureButton>
                </div>
            </div>
        </div>

        <DisclosurePanel class="sm:hidden">
            <div class="space-y-1 px-2 pt-2 pb-3">
                <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href"
                    :class="[item.current ? 'text-blue-600' : ' text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300', 'block px-3 py-2 rounded-md text-base font-medium']"
                    :aria-current="item.current ? 'page' : undefined">{{ item.name }}
                </DisclosureButton>
            </div>
            <div class="items-center flex justify-between mx-4 mb-8">
                <!-- Register -->

                <DisclosureButton href="/auth/signup"
                    class=" w-[50%] mr-4 shadow py-2 rounded-xl text-center text-white bg-blue-600">
                    Register
                </DisclosureButton>

                <!-- Login -->
                <DisclosureButton href="/auth/signin"
                    class=" w-[50%] ml-4 shadow py-2 rounded-xl text-center text-white bg-blue-600">
                    Login
                </DisclosureButton>
            </div>
        </DisclosurePanel>
    </Disclosure>
</template>
  
<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'

const navigation = [
    { name: "Features", href: "/features", current: false },
    { name: "Case Studies", href: "/case-studies", current: false },
    { name: "Services", href: "/services", current: false },
    { name: "About us", href: "/about", current: false },
    { name: "Testimonials", href: "/testimonials", current: false },
    { name: "Support", href: "/support", current: false }
]
</script>