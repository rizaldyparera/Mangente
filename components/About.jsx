import Destinations from "./Destinations";
import Culinary from './Culinary';

function About () {
    return (
        <>
            <div className="pt-32 px-6">
                <div className="flex">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:flex-col">                 
                            <h1 className="font-inter font-bold text-3xl md:text-4xl xl:text-[42px] text-center md:text-left mb-[10px] md:w-10/12">WELCOME TO <span className="font-inter text-red-color">MALUKU</span></h1>
                            <p className="font-inter text-center md:text-left text-sm md:text-base mb-10 md:w-10/12">Maluku is one of the provinces in eastern Indonesia. A <span className="text-primary-color font-medium">comfortable tourist spot</span>, <span className="font-medium text-primary-color">diverse regional food</span> and have various <span className="text-primary-color font-medium">heritage</span>. make this place a <span className="text-primary-color font-medium">worthy destination to visit for everyone.</span></p>
                        </div>
                        <img src="/Assets/about.png" className="md:w-6/12" alt="" />
                    </div>
                </div>
            </div>
            <Destinations />
            <Culinary />
        </>
    )
}
export default About;