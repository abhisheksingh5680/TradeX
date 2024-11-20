import Image from "next/image"
const Template = () => {
    return (
        <div class="container  px-8 mx-auto " >
            <div class="flex flex-wrap  ">
                <div class="p-4 md:w-1/3">
                    <div class="flex rounded-lg  bg-[#00CE86]">
                        <div class=" p-8 ">
                            <Image alt="ecommerce" class="w-16 pb-4" src="/assests/group151.png" width={100} height={100} />
                            <h2 class="text-gray-100 text-lg title-font font-semibold pt-4">Sustainability Leaders</h2>
                            <p class="leading-relaxed text-base font-normal">Track. Reduce. Remove. Report. Review.</p>
                        </div>
                        <div class="flex  items-end">
                            <Image class="relative w-full" alt="ecommerce" src="/assests/group1.png" width={100} height={100} />
                        </div>
                    </div>
                </div>
                <div class="p-4 md:w-1/3">
                    <div class="flex rounded-lg  bg-[#051F26]">
                        <div class=" p-8 ">
                            <Image alt="ecommerce" class="w-14 pb-4" src="/assests/group152.png" width={100} height={100} />
                            <h2 class="text-gray-100 text-lg title-font font-semibold pt-4">Project Developers</h2>
                            <p class="leading-relaxed text-base">Grow the impact and value of your assets.</p>
                        </div>
                        <div class="flex  items-end">
                            <Image class="relative w-full" alt="ecommerce" src="/assests/group2.png" width={100} height={100} />
                        </div>
                    </div>
                </div>
                <div class="p-4 md:w-1/3">
                    <div class="flex rounded-lg  bg-[#060B1C]">
                        <div class=" p-8 ">
                            <Image alt="ecommerce" class="w-16 pb-4" src="/assests/group153.png" width={100} height={100} />
                            <h2 class="text-gray-100 text-lg title-font font-semibold pt-4">Wholesale Markets</h2>
                            <p class="leading-relaxed text-base">Complete end-to-end carbon and energy market services.</p>
                        </div>
                        <div class="flex  items-end">
                            <Image class="relative w-full" alt="ecommerce" src="/assests/group3.png" width={100} height={100} />
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}

export default Template
