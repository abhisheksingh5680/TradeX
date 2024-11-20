import Image from "next/image"

const Learnmore = () => {
    return (
        <div>
            <div className="flex pt-7 items-center">
                <Image alt="ecommerce" class="" src="/assests/arrow.png" style={{ backgroundColor: "#00CE86", borderRadius: "50px", padding: "15px", width: "50px", height: "50px" }} width={100} height={100} />
                <h2 class="text-gray-900 text-sm title-font font-small pl-2">Learn More</h2>
            </div>
        </div>
    )
}

export default Learnmore
