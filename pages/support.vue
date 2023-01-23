<template>
  <div class="py-32">
    <Head>
      <Title>Top Notch Support</Title>
      <Meta
        name="description"
        content="Get expert guidance and assistance achieving your objectives"
      />
    </Head>
    <section class="pb-10">
      <div class="md:max-w-7xl justify-center w-[100%] md:px-4 mx-auto">
        <div>
          <div class="md:flex md:space-x-10 hidden md:block">
            <TipsList />
            <SupportBox />
          </div>
          <div class="md:flex md:space-x-10 md:hidden">
            <SupportBox />
            <div class="py-5"><TipsList /></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import SupportBox from "./../components//supportBox.vue";
import TipsList from "../components/Tipslist.vue";
</script>
