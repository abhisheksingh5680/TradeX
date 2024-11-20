const Heading = ({ color = "text-gray-900" }) => {
    return (
        <div class="container px-24 py-12 mx-auto  items-center">
            <h1 class={`${color} text-3xl title-font font-semibold mb-4  `}>Lorem ipsum dolor sit amet <br />
                consectetuer adipiscing</h1>
            <p class={`leading-relaxed ${color} mt-4`}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore.</p>
        </div >
    )
}

export default Heading
