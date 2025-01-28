import { BANNER_VALUE, LANDING_PAGE_IMAGE_3 } from "../utils/constants";
import Banner from "./Banner";
import Footer from "./Footer";
import Header from "./Header";

const LandingPage = () => {
    return (
        <div className="text-white">
            <Header />
            <div>
                {BANNER_VALUE.map(banner => (
                    <Banner key={banner.imgId} imgId={banner.imgId} title={banner.title} description={banner.description} buttonValue={banner.buttonValue} />

                ))}
            </div>

            <div className="relative">

                <img src={LANDING_PAGE_IMAGE_3} className="w-screen h-screen object-cover" />
                <div className="absolute  mt-5 top-0 right-0 md:w-1/2 md:block flex flex-col">
                    <h1 className="mb-10 m-1 p-1 md:m-4 md:p-2 text-4xl font-thin">
                        Even better with Fire TV Stick
                    </h1>
                    <h2 className="m-1 mb-0 p-1 md:m-4 md:mb-0 md:p-2 text-2xl font-thin">
                        The biggest movies and TV shows are always better on a big screen. Simply plug in your Amazon Fire TV Stick and stream on any HDTV. Press the voice button on the remote and say the name of the title you want to watch to find it in seconds.

                    </h2>

                    <button className="bg-sky-700 px-10 rounded-lg m-4 w-30 py-3 text-sm">Get Started</button></div>

            </div>
            <Footer />
        </div>


    )
}

export default LandingPage;