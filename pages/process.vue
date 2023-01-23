<template>
  <div>
    <Head>
      <Title>BizEnforce Partner Network</Title>
      <Meta
        name="description"
        content="Our team is experienced on the development of Solutions to Optimization problems, CRM (Customer Relation Management), Digital Marketing, Analytics, Learning Management Systems, ERP(Enterprise resource planning), Integrated Systems"
      />
    </Head>
    <section
      class="mx-auto md:max-w-7xl py-4 justify-center w-[100%] px-3 sm:px-8 lg:px-10"
    >
      <div class="py-32 md:flex md:justify-between md:space-x-10">
        <div class="w-full md:w-1/2">
          <h1 class="text-2xl md:text-2xl font-semibold">
            BizEnforce Partner Network
          </h1>
          <p class="py-3">
            Our vision is to enable progressive technologies amidst a world
            dominated by few giants. As our first step in this grand journey we
            are engineering the rails on which customer development process and
            customer relationship flows because we believe that a real time,
            simple to use, responsive to customer's need platform will act as a
            catalyst to unlock business opportunities everywhere. Our team is
            experienced on the development of Solutions to Optimization
            problems, CRM (Customer Relation Management), Digital Marketing,
            Analytics, Learning Management Systems, ERP(Enterprise resource
            planning), Integrated Systems.
          </p>
          <h1 class="text-2xl">
            BizEnforce Partner Network Registration Video
          </h1>

          <div class="py-3">
            <iframe
              width="100%"
              height="300"
              src="https://www.youtube.com/embed/6XvmhE1J9PY"
              class="rounded"
              title="President Obama asks America to learn computer science"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div class="w-full md:w-1/2">
          <div
            class="p-5 md:p-10 bg-[#ebeded] rounded border-t-4 border-[#a9b7b9]"
          >
            <div
              class="p-5 my-3 md:m-3 bg-white rounded border-2 border-[#d6d7d7]"
              v-for="(item, i) in items"
              :key="i"
            >
              <div class="flex items-center md:space-x-10">
                <div class="w-32 hidden md:block">
                  <img
                    :src="item.img"
                    alt="images"
                    class="w-full h-full object-contain rounded-xl"
                  />
                </div>
                <div>
                  <h1 class="text-lg">Step {{ i + 1 }}</h1>
                  <RouterLink :to="item.href">
                    <h1 class="text-blue-600 text-xl font-semibold">
                      {{ item.title }}
                    </h1>
                  </RouterLink>
                  <h1 class="text-sm py-1 font-bold">{{ item.subtitle }}</h1>
                  <p>{{ item.desc }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup >
const items = [
  {
    img: "https://img.freepik.com/free-vector/cartoon-character-filling-form-survey-checklist-man-writing-test-signing-business-medical-document-flat-illustration_74855-20483.jpg?w=1800&t=st=1668794970~exp=1668795570~hmac=3c7e80f26686464905142ac2c090dede368a2afbf40953c09ef6900698517f7a",
    title: "Become a Member",
    subtitle: "Join BizEnforce now",
    desc: "Tell us your interests and register using your email, Google, Facebook, or Linkedin account",
    href: "/auth/signup",
  },
  {
    img: "https://img.freepik.com/free-vector/job-interview-conversation_74855-7566.jpg?w=2000&t=st=1668795148~exp=1668795748~hmac=ab9ef47c88a28cdac0bae83169092816bd5f3f372e70fba8f66a663d832e2faf",
    title: "Tell us your dream",
    subtitle: "Let us digest your idea",
    desc: "Setup an appointment and let us discuss in detail about your dreams, and develop your worthy idea",
    href: "/auth/support",
  },
  {
    img: "https://img.freepik.com/free-vector/programming-concept-illustration_114360-1325.jpg?t=st=1668795159~exp=1668795759~hmac=65ae59f14ef0ab94f32fc14a69fbfbb772f7ea802c22db87b61ec766d944659c",
    title: "Let us do it",
    subtitle: "Let us create a best solution",
    desc: "Now, we have your matured idea. Our innovative team is inventing the best solution for you.",
    href: "/auth/support",
  },
  {
    img: "https://img.freepik.com/free-vector/businessman-flying-rocket-business-concept_107791-76.jpg?1&w=1380&t=st=1668795207~exp=1668795807~hmac=5e0aaccd6bfb0c8311b2cdbc7f02d0c67fd86870feb8afc4639e09143dfbaf39",
    title: "Enjoy your success",
    subtitle: "Let us celebrate a success in your dream business",
    desc: "We did it! Let us celebrate your success togather!",
    href: "/auth/support",
  },
];
</script>

<style scoped>
.video-bg {
  background-image: url("https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2020/01/16161553/Commerce-Subjects-in-Class-11.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
