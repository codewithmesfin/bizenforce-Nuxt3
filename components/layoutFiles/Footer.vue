<template>
  <div>
    <div class="bg-blue-600">
      <div class="mx-auto  md:w-[90%] py-12 px-4 sm:px-6">
        <div class="md:flex md:justify-between md:space-x-10">
          <div class="w-[100%]">
            <h1 class="text-white font-bold text-xl md:text-2xl py-2">Contacts</h1>
            <h1 class="text-sm text-white">Addis Ababa, Ethiopia, Africa</h1>
            <h1 class="text-sm text-white">+251 91 152 2902</h1>
            <h1 class="text-sm text-white">info@bizenforce.com</h1>
          </div>
          <div class="w-[100%]">
            <h1 class="text-white font-bold text-xl md:text-2xl py-2">Quick Links</h1>
            <div class="grid grid-cols-3 gap-2">
              <span v-for="link in links" :key="link.title" class="text-white text-sm">
                <RouterLink :to="link.href">{{link.title}} </RouterLink>
              </span>
            </div>
          </div>
          <div class="w-[100%]">
            <h1 class="text-white font-bold text-xl md:text-2xl py-2">Follow us</h1>
            <div class="grid grid-cols-3 gap-2">
              <span v-for="link in socials" :key="link" class="text-white text-sm">
                <RouterLink :to="link">{{link}} </RouterLink>
              </span>
            </div>
          </div>
          <div class="w-[100%]">
            <h1 class="text-white font-bold text-xl md:text-2xl py-2">bizenforce</h1>
            <h1 class="text-sm text-white">The right consultant for your business.</h1>
            <h1 class="text-sm text-white">
              <RouterLink class="text-orange-600 font-extrabold" to="/auth/signup">Join us today</RouterLink>
              for a better experience!</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { link } from 'fs';

const links = [
  { title: "Home", href: '/' },
  { title: "About", href: "/about" },
  { title: "Learn", href: "/articles" },
  { title: "Support", href: "/support" },
  { title: "Questions", href: "/questions" },
  { title: "Signin", href: "/auth/signin" }

]
const socials = ['Facebook', 'Youtube', 'Linkedin', 'Twitter', 'Instagram', 'Tiktok']
</script>