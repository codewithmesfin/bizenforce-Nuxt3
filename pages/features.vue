<template>
    <div>
        <section class="md:max-w-7xl justify-center w-[100%] px-4  mx-auto">
            <div class="">
                <div class="flex justify-between items-center md:space-x-10">
                    <div class="md:max-w-[70%]  mx-auto xs:w-[100%] md:w-[50%] ">
                        <h1 class="
                        text-2xl font-sans
                        md:text-6xl
                        font-extrabold
                        ">
                            Prospecting Made Simpler
                        </h1>
                        <p class="py-4  text-gray-600 text-lg md:text-xl">
                            Seamless.AI gives you the ability to connect directly with your ideal customers so you can
                            build pipeline, shorten your sales cycle, and close more deals at scale.
                        </p>
                        <section>
                            <EmailCollectFieldVue />
                        </section>
                    </div>
                    <div class="xs:w-[100%] md:w-[50%] lg:inset-y-0 lg:right-0 lg:w-1/2">

                        <img class="h-56  md:w-full object-cover sm:h-72 md:h-96 lg:w-full min-h-[550px]"
                            src="https://img.freepik.com/free-vector/illustration-social-media-concept_53876-18383.jpg?w=1380&t=st=1668234398~exp=1668234998~hmac=59791121fceffa17f43c8bddda06a47f53c1a3f8b6784f89c928118fd0c198d4"
                            alt="" />
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import EmailCollectFieldVue from '~/components/EmailCollectField.vue';
</script>