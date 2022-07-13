import React from "react"
import Image from 'next/image'
import { InformationCircleIcon } from "@heroicons/react/solid"

const HomeCard: React.FC = ( ) => {
    return (

    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-center lg:pr-16 lg:pl-16 lg:pb-12 font-nunito">
      {/* <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
        <Image
          layout="fill"
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          objectFit="cover"
        />
      </div> */}

<div className='grid grid-rows-auto font-semibold pt-[200px] subpixel-antialiased text-white'>
      <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">
      Explore the world
      </h1> 
      <h1 className="text-2xl font-bold pl-[70px] md:text-4xl lg:text-7xl">
      of minerals , rocks
      </h1>
      <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">
      &#38; mining sites
      </h1>
      </div>
      <p className="max-w-xs text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
      <p>
                 <span> Millions of minors and organisations around the world
                 showcase their extractions on <strong>Mbijiwe exihition </strong> 
                 platform.
                 </span>
                 </p>
                 <br/>
             <p className='text-sm md:text-lg xl:text-xl font-extralight subpixel-antialiased'>
                <i> <strong className='text-2xl'> 
                 &#34;
                 </strong>
                  -the home to the world's  
                 <strong> mining, rocks and minerals. </strong>
                 <strong className='text-2xl'>
                 &#34;
                     </strong>
                     </i>
                     </p>
      </p>
      <div className="flex space-x-3">
        <button className="bannerButton bg-white text-black">
          {/* <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7" /> */}
          Play
        </button>

        <button
          className="bannerButton bg-[gray]/70"
          onClick={() => {
            // setCurrentMovie(movie)
            // setShowModal(true)
          }}
        >
          <InformationCircleIcon className="h-5 w-5 md:h-8 md:w-8" /> More Info
        </button>
      </div>
    </div>
    )
}

export default HomeCard