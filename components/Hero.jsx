import Link from "next/link";

function Hero () {
    return (
        <>
            <div className="pt-5 relative xl:container-sm">
                <div className="flex flex-col">
                    <div className="flex flex-col px-4">                                    
                           <img src="/Assets/plane.gif" className="w-[180px] h-[180px] relative top-20 md:top-40 lg:top-36 xl:top-44 -left-4 items-center" alt="" />   
                        <div className="py-2 flex w-full flex-col md:flex-row items-center">
                            <div className="z-20">                              
                                <h1 className="font-bold font-inter text-[35px] sm:text-[45px] md:text-[40px] lg:text-[50px] xl:text-[55px] md:w-full w-9/12"><span className="text-red-color">Life</span> is short and the <span className="text-red-color">world</span> is wide!
                                </h1>
                                <p className="font-inter mb-5">Let's explore the <span className="text-primary-color">eastern pearl of Indonesia</span></p>
                                <Link href="explore">  
                                    <a  className="bg-primary-color font-inter text-white-color py-3 px-4 rounded-lg items-center font-medium"><i className='relative top-[1px] pr-2 bx bx-paper-plane'></i>Explore Now</a>                                                        
                                </Link>
                            </div>                          
                        <div className="flex w-full justify-end">
                            <img src="/Assets/bg-hero.png" className="w-[225px] sm:w-[250px] md:w-[300px] xl:w-[360px] z-40" alt="" />
                        </div>
                        </div>
                            <img src="/Assets/bg-line.png" className="absolute top-0 hidden md:block md:w-[150px] md:h-[425px] xl:w-[240px] right-0" alt="" />
                    </div>
                </div>
            </div>
            <img src="/Assets/ship.gif" className="flip-img w-[240px] h-[150px] absolute hidden md:block bottom-0 md:right-0" alt="" />                                   
        </>
    )
}
export default Hero;