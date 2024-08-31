import { useContext } from "react"
import Navbar from "./Navbar"
import "./landing.css"
import Video from "next-video"
import Image from "next/image"
// import videoLoop from "../video/bgVideo.mp4"
import { ThemeContext } from "./context/themeProvider"

export default function Home() {

    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className="body">
            <Navbar />
            <div className="firstSet ">
                <div id="videoContainer">
                    <Video src="/bgVideo.mp4" autoPlay muted loop playsInLine controls={false} className="video"></Video>
                </div>
                {/* <video src="/bgVideo.mp4" autoPlay muted loop playsInline id='bgVideo' /> */}
                <div className="introText">
                    <div className="bigText1">
                        Africa in the Fourth <span style={{ color: "blue" }}>Industrial</span> Revolution
                    </div>
                    <div className="smallText1">
                        Providing an ecosystem for African technology and innovation
                    </div><br />
                    <a href="#secondSet" >Learn more</a>
                </div>
            </div>
            <div className="secondSet" id="secondSet">
                <div className="blur">
                    <div className="secondLeft">
                        <div className="secondSetText">
                            <div className="bigText2"
                                // style={{ backgroundColor: theme.palette.primary.main }} 
                                onClick={toggleTheme}>
                                Smarter decision making <br />powered by GIS & location intelligence
                            </div>
                            <div className="smallText2">
                                Giseria is building location-powered technology solutions and tools driving business, infrastructure and society with data and the science of where.<br />
                                Discover how the location advantage can take your business further. Locate trends, analyze insights and drive customer acquisition and satisfaction with data & maps.
                            </div>
                            {/* <button onClick={toggleTheme}>
                                {theme.mode === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
                            </button> */}
                            <Image src="/location.jpg" alt="Image" width={600} height={400} id="location" />
                            {/* <div className="secondIcons">
                                <div className="icon">
                                    <Image src="/img1.png" width={50} height={50} alt="Image" className="iconImage" />
                                    <div className="iconText">
                                        Locate trends
                                    </div>
                                </div>
                                <div className="icon">
                                    <Image src="/img2.png" width={50} height={50} alt="Image" className="iconImage" />
                                    <div className="iconText">
                                        Analyze insights
                                    </div>
                                </div>
                                <div className="icon">
                                    <Image src="/img3.png" width={60} height={60} alt="Image" className="iconImage" />
                                    <div className="iconText">
                                        Drive customer acquisition
                                    </div>
                                </div>
                            </div> */}
                            <a href="" className="secondSetButton">Get Started &#8594;</a>
                        </div>
                    </div>
                    {/* <Image src="/bg9.png" alt="image" width={658} height={790} id="secondSetImage" /> */}
                    {/* <div className="imageContainerOut">
                        <div className="imageContainerIn">
                            <Image src="/bg8.png" alt="image" width={800} height={759} id="secondSetImage" />
                        </div>
                    </div> */}
                </div>
            </div>
            <div className="thirdSet">
                {/* <Image src="/afr1.jpg" width={68.1} height={75.8} alt="africa" id="africaImage" /> */}
                <div className="thirdText3">
                    <div className="bigText3">
                        Technology for African Innovation
                    </div>
                    <div className="smallText3">
                        Technology is central to our vision for a sustainable, smarter and safer future for Africa.<br />Giseria designs, trains and develops modern technology solutions powered by location and geography.
                    </div>
                    <Image src="/third3.jpg" width={590.6} height={416.9} alt="Image" id="thirdImage" />
                    {/* <Image src="/tech2.jpg" width={626} height={391} alt="Image" id="thirdImage" /> */}
                    <a href="" className="thirdSetButton">Explore Technologies &#8594;</a>
                </div>
                {/* <div className="thirdSetImageContainer3">
                    <div className="thirdSetImageContainer2">
                        <div className="thirdSetImageContainer1">
                            <Image src="/tech9.jpg" width={960} height={540} alt="Image" />
                        </div>
                    </div>
                </div> */}
            </div>
            <div className="fourthSet">
                <div className="fourthSetText">
                    <div className="bigText4">
                        Product-driven Innovation & Growth
                    </div>
                </div>
            </div>
            <div className="fifthSet">
                <div className="footerLeft">
                    <div className="bigText5">
                        Build with Giseria
                    </div>
                    <div className="smallText5">
                        Giseria includes a diverse team of developers, engineers, analysts
                        and designers leveraging the power of GIS and technology to
                        power the next wave of growth throughout Africa.<br /><br />
                        Let us know how we can help you get started on your journey to
                        digital transformation by completing the form below:
                    </div>
                    <form>
                        <input type="text" className="form-control" id="name" placeholder="Name..." title="Name" />
                        <input type="text" className="form-control" id="company" placeholder="Company..." title="Company" />
                        <input type="text" className="form-control" id="nature" placeholder="Nature of Business..." title="Nature of Business" />
                        <input type="email" className="form-control" id="email" placeholder="E-mail address" title="Email" />
                        <input type="submit" id="submitForm" />
                    </form>
                    <div className="touchContain">
                        <div className="touch">
                            Get In Touch
                        </div>
                        <a href="https://www.youtube.com/@Giseria" target="_blank" ><Image src="/icon2.png" alt="Youtube" width={30} height={30} /></a>
                        <a href="mailto:thisisgiseria@gmail.com?subject=ENQUIRY FROM GISERIA SITE" target="_blank"><Image src="/icon5.png" alt="Email" width={27} height={20.25} /></a>
                        <a href="https://www.facebook.com/Giseria" target="_blank"><Image src="/icon4.png" alt="Facebook" width={27} height={27} /></a>
                    </div>
                </div>
                <div className="footerRight">
                    <div>
                        <div className="linkTitle">
                            Company
                        </div>
                        <ul>
                            <li>Training & Programs</li>
                            <li>Maps & Data</li>
                            <li>Technology</li>
                            <li>Products</li>
                            <li>Teams</li>
                        </ul>
                    </div>
                    <div>
                        <div className="linkTitle">
                            Connect
                        </div>
                        <ul>
                            <li>Events</li>
                        </ul>
                    </div>
                    <div>
                        <div className="linkTitle">
                            Community
                        </div>
                        <ul>
                            <li><a href="https://www.facebook.com/Giseria" target="_blank">Facebook<Image src="/icon4.png" alt="Facebook" width={25} height={25} /></a></li>
                            <li><a href="https://www.discord.com" target="_blank">Discord<Image src="/icon3.png" alt="Discord" width={25} height={25} /></a></li>
                            <li><a href="https://www.youtube.com/@Giseria" target="_blank">Youtube<Image src="/icon2.png" alt="Youtube" width={25} height={25} /></a></li>
                        </ul>
                    </div>
                    <div id="giseriaFooter">
                        <Image id="image" src="/giseria2.png" width={65} height={86.8} alt="Giseria logo" />
                        {/* giseria */}
                    </div>
                    {/* <Image src="/giseria.png" alt="giseria" width={224} height={205} /> */}
                </div>
            </div>
        </div>
    )
}