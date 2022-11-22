<template>
    <div>
        <section class="md:max-w-7xl justify-center w-[100%] px-4  mx-auto">
            <div class="pt-24 pb-10 px-5 ">
                <div class="pt-20 pb-5">
                    <h1 class="text-4xl md:text-8xl font-extrabold text-center">Join Our Team</h1>
                    <p class="text-center text-lg md:text-xl py-3">Unleash your genius and maximize your potential</p>
                </div>
                <div class="flex justify-center">
                    <button
                        class="inline-block shadow-xl text-lg md:text-xl rounded-lg bg-blue-600 px-4 md:px-10 py-2.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-blue-600 hover:bg-blue-700 hover:ring-blue-700">
                        Apply Now
                    </button>
                </div>
            </div>
        </section>
        <section class="bg-black bg2 py-10 mt-3">
            <div class="md:max-w-[60%] px-5  md:pt-12 mx-auto md:px-2 sm:px-6 lg:px-8 ">
                <div>
                    <h2 class="text-lg text-gray-100 font-semibold py-2 text-center">Our Culture</h2>
                    <h2 class="text-3xl text-center font-extrabold text-white md:text-6xl py-3">
                        To help the world connect to opportunity and positively impact business.
                    </h2>
                    <p class="text-md md:text-lg text-center font-normal text-white mx-auto py-3">
                        We’re on a mission to help the world connect to opportunity and positively impact billions…This
                        starts with our employees. We take great pride in our culture and the team we’ve built. We
                        embrace open collaboration and creativity. We encourage the iteration of ideas that address the
                        world’s most complex technical sales challenges.
                    </p>
                </div>
            </div>
        </section>
        <section class="bg-[#edf2f7] ">
            <div class="md:max-w-7xl justify-center w-[100%] px-4  mx-auto">
                <div class="md:max-w-[60%] px-5  md:pt-12 mx-auto md:px-2 sm:px-6 lg:px-8 ">
                    <div>
                        <h2 class="text-lg text-blue-600 font-semibold py-2 text-center">OUR BENEFITS</h2>
                        <h2 class="text-3xl text-center font-extrabold md:text-6xl py-3">
                            Life at BizEnforce
                        </h2>
                    </div>
                </div>
                <div class="grid md:grid-cols-3 gap-4 py-10">
                    <div class="w-full" v-for="(item, i) in items" :key="i">
                        <div class="h-full shadow rounded-xl bg-white border border-gray-200 cursor-pointer">
                            <div class="flex items-center space-x-3 border-b px-5 py-3">
                                <img :src="item.img" alt="" class="h-16 w-16">
                                <h1 class="text-2xl py-3 font-semibold"> {{ item.title }} </h1>
                            </div>
                            <div class="p-5">
                                <h1 class="text-md">{{ item.subtitle }} </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="md:max-w-7xl justify-center w-[100%] px-4  mx-auto">
            <div class="md:max-w-[60%] px-5  md:pt-12 mx-auto md:px-2 sm:px-6 lg:px-8 ">
                <div>
                    <h2 class="text-lg text-blue-600 font-semibold py-2 text-center">CORE VALUES</h2>
                    <h2 class="text-3xl text-center font-extrabold md:text-6xl py-3">What We Stand For</h2>
                </div>
            </div>
            <div class="max-w-[700px] mx-auto">
                <div class="grid grid-cols-2 py-10 md:grid-cols-5 gap-4 c-flex">
                    <div v-for="(item, i) in values" :key="i" class="max-w-[200px]">
                        <div
                            class="rounded-full px-3 text-sm p-1 cursor-pointer border text-center border-blue-600 text-blue-600">
                            {{ item }} </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="bg-black bg2 py-10 mt-3">
            <div class="md:max-w-7xl justify-center w-[100%] px-4  mx-auto">
                <div class="md:flex justify-evenly items-center md:space-x-10">
                    <h2 class="text-3xl text-center font-extrabold text-white md:text-6xl py-3">
                        Ready to Join the BizEnforce?
                    </h2>
                    <div class="flex justify-center">
                        <RouterLink to="/career"
                            class="inline-block shadow-xl text-lg md:text-xl rounded-lg bg-white px-4 md:px-10 py-2.5 text-base font-semibold leading-7 text-blue-600 shadow-sm ring-1 ring-blue-600 hover:bg-gray-100 hover:ring-gray-100">
                            Apply Now
                        </RouterLink>
                    </div>
                </div>
            </div>
        </section>

        <section class="bg-[#edf2f7] pb-10">
            <div class="md:max-w-7xl justify-center w-[100%] px-4  mx-auto">
                <div class="md:max-w-[60%] px-5  md:pt-12 pb-6 mx-auto md:px-2 sm:px-6 lg:px-8 ">
                    <div>
                        <h2 class="text-lg text-blue-600 font-semibold py-2 text-center">GET SUPPORT</h2>
                        <h2 class="text-3xl text-center font-extrabold md:text-6xl py-3">
                            Reach us any time you need our help
                        </h2>
                    </div>
                </div>
                <div class="flex justify-center">
                    <RouterLink to="/support"
                        class="inline-block shadow-xl text-lg md:text-xl rounded-lg bg-blue-600 px-4 md:px-10 py-2.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-blue-600 hover:bg-blue-700 hover:ring-blue-700">
                        Contact us
                    </RouterLink>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
const items = [
    {
        img: "https://assets-global.website-files.com/62226180d38a78472cd35dd2/628bd0276ceca42e0a614d75_500X500_careers_clockinhome.svg",
        title: "Clock In From Home",
        subtitle: "Don’t worry about commuting to an office building or working in a cramped cubicle all day. BizEnforce is 100% remote, which means you can work from the comfort of your own home."
    },
    {
        img: "https://assets-global.website-files.com/62226180d38a78472cd35dd2/628bd02894549c1800018ed9_500X500_careers_balance.svg",
        title: "Enjoy Work/Life Balance",
        subtitle: "We work hard to deliver a world-class product, but we play just as hard. We are committed to giving employees ample time off to recharge and spend time with family. To that end, we offer employees time off through PTO plans with vacation time and paid holidays."
    },
    {
        img: "https://assets-global.website-files.com/62226180d38a78472cd35dd2/628bd027a1fff0ca30df957d_500X500_careers_health-wealth.svg",
        title: "Invest In Your Health & Wealth",
        subtitle: "To produce your best work, you need to feel your best. For this reason, we provide comprehensive health benefits (Medical, Dental, Vision, etc.). In thinking ahead to your future, we also offer a 401(k) employer matching program."
    },
    {
        img: "https://assets-global.website-files.com/62226180d38a78472cd35dd2/628bd02782298481b045e310_500X500_careers_getpaid.svg",
        title: "Get Paid For Your Hard Work",
        subtitle: "We are a merit-based company. This means that we recognize and reward hard work and results, regardless of your tenure. Instead of waiting a year to earn a raise, we offer promotions and any-time raise incentives based on performance, in addition to unlimited sales commission potential.",
    },
    {
        img: "https://assets-global.website-files.com/62226180d38a78472cd35dd2/628bd027cad89966e9e64149_500X500_careers_teamvalues.svg",
        title: "A Team That Values You",
        subtitle: "At BizEnforce your voice is always heard. Instead of executing orders from the top-down, we encourage feedback from everyone and regularly implement changes driven by our employees’ ideas. This all-inclusive approach is what makes our company and our services world-class."
    },
    {
        img: "https://assets-global.website-files.com/62226180d38a78472cd35dd2/628bd0274189cb2bf491f96c_500X500_careers_levelup.svg",
        title: "Sharpen Your Skills",
        subtitle: "We promote a culture of constant improvement. To support your professional development, we provide ongoing training and team coaching."
    }
]
const values = [
    "Whatever It Takes", "Think Bigger", 'Whole>Self',
    "Be Resilient", 'Take Ownership', 'Take Action', 'Find Solutions',
    'Never Fail', 'Do the Right Thing', 'Do More with Less',
    'Embrace Change', 'Challenge Everything'
]
</script>

<style>
.c-flex {
    justify-content: center;
    align-items: center;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
}
</style>