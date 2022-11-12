<template>
    <div>
        <div class="hidden md:flex md:justify-between md:border items-center  rounded-l-lg">
            <input placeholder="Business email"
                class="pl-2 md:pl-5 w-[70%] border-none focus:ring-0 focus:outline-none" />
            <button
                class="inline-block md:w-[30%] shadow-xl px-4 py-2.5 rounded-r-lg bg-blue-600 px-4  text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-blue-600 ">
                Get started free
                <span class="text-blue-200" aria-hidden="true">&rarr;</span>
            </button>
        </div>
        <div class="md:hidden">
           <div class="py-2">
            <input placeholder="Business email"
                class="border p-2.5 text-center w-full px-5 rounded-full  focus:ring-0 focus:outline-none" />
           </div>
            <button
                class="inline-block w-full shadow-xl px-4 py-2.5 rounded-full bg-blue-600 px-4  text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-blue-600 ">
                Get started free
                <span class="text-blue-200" aria-hidden="true">&rarr;</span>
            </button>
        </div>
    </div>
</template>