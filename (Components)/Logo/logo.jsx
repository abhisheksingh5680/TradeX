import Image from "next/image"
const Logo = () => {
    return (
        <div className="container mx-auto bg-gradient-to-b from-[#051F26] to-[#00CE86]" style={{ borderRadius: "50px", padding: "100px 0 0 0" }}>
            <Image class="relative " style={{ width: "350px", height: "350px", margin: "0 auto" }} alt="ecommerce" src="/assests/logoimg.png" width={500} height={500} />
            <div className="bg-content p-7">
                <h1 class="text-gray-100 text-5xl leading-snug tracking-wide title-font font-semibold ">Lorem Ipsum Dolor <br />
                    Consectetur Adipisicing</h1>
                <p class="leading-relaxed text-lg text-gray-100 mt-4 ">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                    <br /> nonummy nibh euismod tincidunt.</p>
            </div>
        </div>
    )
}

export default Logo

