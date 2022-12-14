import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function Explore() {
  return (
    <>   
      <Head>
        <title>Mangente - Anything About Maluku</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="pt-32">
        <div className="flex justify-center items-center">
            <div className="flex flex-col">
                <div className="flex flex-col text-center">              
                    <h1 className="text-2xl font-bold"><span className="text-red-color">The Heritage </span>of Maluku</h1>
                    <p className="text-subtitle-color font-medium">Explore various cultural heritages in Maluku. <a href="#" className="text-primary-color hover:text-secondary-color">View All</a></p>
                </div>
                <div className="flex justify-center mt-10 sm:px-4">
                    <div className="grid sm:grid-cols-2 gap-5">
                                        
                            <div className='relative items-center'>
                                <img src="/Assets/masjid-wapauwe.jpg" className="w-[260px] h-[200px] sm:w-[300px] sm:h-[240px] md:w-[340px] md:h-[280px] lg:w-[380px] lg:h-[320px] xl:w-[420px] xl:h-[360px] object-cover relative rounded-t-2xl" alt="" />
                                <div className="absolute top-1 right-0">                              
                                    <a href="#" className="top-0 py-2 px-4 bg-primary-color text-white-color right-0 text-sm rounded-tr-2xl"><i className='bx bx-paper-plane relative top-[1px] pr-1 mb-[5px]'></i> Visit</a>
                                </div>
                                <div className="absolute bottom-0 p-2">                               
                                    <p className="text-white-color text-xs lg:text-sm xl:text-base font-bold">Masjid Tua Wapauwe</p>
                                    <p className="text-xs lg:text-sm xl:text-base text-white-color"><i className='bx bx-map-pin relative top-[1px] pr-1 mb-[5px]' ></i>Kaitetu, Maluku Tengah</p>
                                </div>
                            </div>

                       
                            <div className='relative'>
                                <img src="/Assets/imanuel.jpeg" className="w-[260px] h-[200px] sm:w-[300px] sm:h-[240px] md:w-[340px] md:h-[280px] lg:w-[380px] lg:h-[320px] xl:w-[420px] xl:h-[360px] object-cover relative rounded-t-2xl" alt="" />
                                <div className="absolute top-1 right-0">                              
                                    <a href="#" className="top-0 py-2 px-4 bg-primary-color text-white-color right-0 text-sm rounded-tr-2xl"><i className='bx bx-paper-plane relative top-[1px] pr-1 mb-[5px]'></i> Visit</a>
                                </div>
                                <div className="absolute bottom-0 p-2">                               
                                    <p className="text-white-color text-xs lg:text-sm xl:text-base font-bold">Gereja Tua Immanuel</p>
                                    <p className="text-xs lg:text-sm xl:text-base text-white-color"><i className='bx bx-map-pin relative top-[1px] pr-1 mb-[5px]' ></i>Kaitetu, Maluku Tengah</p>
                                </div>
                            </div>

                            <div className='relative'>
                                <img src="/Assets/amsterdam.jpg" className="w-[260px] h-[200px] sm:w-[300px] sm:h-[240px] md:w-[340px] md:h-[280px] lg:w-[380px] lg:h-[320px] xl:w-[420px] xl:h-[360px] object-cover relative rounded-t-2xl" alt="" />
                                <div className="absolute top-1 right-0">                              
                                    <a href="#" className="top-0 py-2 px-4 bg-primary-color text-white-color right-0 text-sm rounded-tr-2xl"><i className='bx bx-paper-plane relative top-[1px] pr-1 mb-[5px]'></i> Visit</a>
                                </div>
                                <div className="absolute bottom-0 p-2">                               
                                    <p className="text-white-color text-xs lg:text-sm xl:text-base font-bold">Gereja Tua Immanuel</p>
                                    <p className="text-xs lg:text-sm xl:text-base text-white-color"><i className='bx bx-map-pin relative top-[1px] pr-1 mb-[5px]' ></i>Hila - Kaitetu, Maluku Tengah</p>
                                </div>
                            </div>

                            <div className='relative'>
                                <img src="/Assets/museum.jpg" className="w-[260px] h-[200px] sm:w-[300px] sm:h-[240px] md:w-[340px] md:h-[280px] lg:w-[380px] lg:h-[320px] xl:w-[420px] xl:h-[360px] object-cover relative rounded-t-2xl" alt="" />
                                <div className="absolute top-1 right-0">                              
                                    <a href="#" className="top-0 py-2 px-4 bg-primary-color text-white-color right-0 text-sm rounded-tr-2xl"><i className='bx bx-paper-plane relative top-[1px] pr-1 mb-[5px]'></i> Visit</a>
                                </div>
                                <div className="absolute bottom-0 p-2">                               
                                    <p className="text-white-color text-xs lg:text-sm xl:text-base font-bold">Museum Siwalima</p>
                                    <p className="text-xs lg:text-sm xl:text-base text-white-color"><i className='bx bx-map-pin relative top-[1px] pr-1 mb-[5px]' ></i>Taman Makmur, Kota Ambon</p>
                                </div>
                            </div>

                            <div className='relative'>
                                <img src="/Assets/duurstede.jpg" className="w-[260px] h-[200px] sm:w-[300px] sm:h-[240px] md:w-[340px] md:h-[280px] lg:w-[380px] lg:h-[320px] xl:w-[420px] xl:h-[360px] object-cover relative rounded-t-2xl" alt="" />
                                <div className="absolute top-1 right-0">                              
                                    <a href="#" className="top-0 py-2 px-4 bg-primary-color text-white-color right-0 text-sm rounded-tr-2xl"><i className='bx bx-paper-plane relative top-[1px] pr-1 mb-[5px]'></i> Visit</a>
                                </div>
                                <div className="absolute bottom-0 p-2">                               
                                    <p className="text-white-color text-xs lg:text-sm xl:text-base font-bold">Benteng Duurstede</p>
                                    <p className="text-xs lg:text-sm xl:text-base text-white-color"><i className='bx bx-map-pin relative top-[1px] pr-1 mb-[5px]' ></i>Saparua, Maluku Tengah</p>
                                </div>
                            </div>

                            <div className='relative'>
                                <img src="/Assets/beverwijk.jpg" className="w-[260px] h-[200px] sm:w-[300px] sm:h-[240px] md:w-[340px] md:h-[280px] lg:w-[380px] lg:h-[320px] xl:w-[420px] xl:h-[360px] object-cover relative rounded-t-2xl" alt="" />
                                <div className="absolute top-1 right-0">                              
                                    <a href="#" className="top-0 py-2 px-4 bg-primary-color text-white-color right-0 text-sm rounded-tr-2xl"><i className='bx bx-paper-plane relative top-[1px] pr-1 mb-[5px]'></i> Visit</a>
                                </div>
                                <div className="absolute bottom-0 p-2">                               
                                    <p className="text-white-color text-xs lg:text-sm xl:text-base font-bold">Benteng Beverwijk</p>
                                    <p className="text-xs lg:text-sm xl:text-base text-white-color"><i className='bx bx-map-pin relative top-[1px] pr-1 mb-[5px]' ></i>Sila, Maluku Tengah</p>
                                </div>
                            </div>
    
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div className="pt-20"></div>
    </>

  )
}
