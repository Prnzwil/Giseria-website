import dynamic from "next/dynamic"

const Dynamic = dynamic(() => import("./Navbar.js"), {
    ssr: false
})

export default () => <Dynamic />