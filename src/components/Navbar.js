"use client"
import React, { useContext } from "react"
import Link from "next/link"
import Image from "next/image"
import "./Navbar.css"
import { useRouter } from "next/navigation"
// import GiseriaWhite from "giseriaLogoWhite.png"
// import { themeContext } from "./context/theme"

export default function Home() {

    // const x = "Changed";
    // document.getElementById("signUp").innerHTML = x;

    // const { isDarkTheme, changeTheme } = useContext(themeContext);
    // const giseriaLogo = isDarkTheme ? "/giseriaLogoWhite.png" : "/giseriaLogoBlack.png"

    // console.log("isDarkTheme is:", isDarkTheme, "changeTheme is:", changeTheme);
    // const router = useRouter();

    return (
        <div className="Navbar">
            <div className="navTitle">
                <Image id="image" src="/giseriaLogoBlack.png" width={35} height={35} alt="Giseria logo" />
                <span>giseria</span>
                {/* <span>{isDarkTheme}</span> */}
            </div>

            <div className="navLinks">
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/locInt" >Location Intelligence</Link></li>
                    <li><Link href="/tech">Technology</Link></li>
                    <li><Link href="/products">Products</Link></li>
                    <li><Link href="/team" id="signDown">Teams</Link></li>
                    <li><Link href="/signUp" id="signUp">Sign up</Link></li>
                    <li><Image id="toggleTheme" onClick="" src="/bg5.jpg" width={25} height={25} alt="" /></li>
                </ul>
            </div>
        </div>
    )
}


// const Dynamic = "justin"

// export default function App() {
//     const [a, setA] = useState();
//     useEffect(() => {
//         setA(<Dynamic />)
//     });

//     console.log(<>{a}</>)
// }