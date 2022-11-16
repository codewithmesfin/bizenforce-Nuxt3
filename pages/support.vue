<template>
    <div class="py-32">
          <section class=" pb-10">
              <div class="md:max-w-7xl justify-center w-[100%] px-4  mx-auto">
                  <div >
                      <div class="md:flex md:space-x-10 hidden md:block">
                          <TipsList />
                          <SupportBox />
                      </div>
                      <div class="md:flex md:space-x-10 md:hidden">
                          <SupportBox />
                          <TipsList />
                      </div>
                  </div>
              </div>
          </section>
      </div>
  </template>
  
  <script setup>
  import SupportBox from './../components//supportBox.vue'
  import TipsList from '../components/Tipslist.vue'
  
  </script>