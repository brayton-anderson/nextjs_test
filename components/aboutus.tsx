import React from 'react'
import Items from './items'
// import Image from 'next/image'


const AboutUs: React.FC = ( ) => {
    return(
        <section className={`flex flex-col bg-white py-20 text-3xl md:text-4xl `}>
            <div className='container mx-auto px-11'>
                <p className='leading-tight max-w-5xl mx-auto text-4xl lg:text-4xl tracking-tight font-nunito'>
                    <strong>Browse our minerals, rocks and mining sites.</strong><br></br>
                    
                    Our database is filled with mining information you might need as a beginner, experienced or passionate explorer.

                </p>
            </div>
            <div className='container mx-auto px-11 text-center mt-28 font-nunito'>
                <h2 className='font-nunito'>Browse Items</h2>
                <div className='mt-2 font-nunito'> the &ldquo;spec-ops&rdquo;</div>
                <div className='mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-20'>
                    <Items
                    id="one"
                    item_name="Crystals"
                    details=""
                    likes= {90}
                    views={60}
                    tag="Minerals"
                    category="Carbonates"
                    link="#"
                    />
                    <Items
                    id="two"
                    item_name="Meteorite"
                    details=""
                    likes= {90}
                    views={60}
                    tag="Minerals"
                    category="Carbonates"
                    link="#"
                    />
                    <Items
                    id="three"
                    item_name="Crystals"
                    details=""
                    likes= {90}
                    views={60}
                    tag="Minerals"
                    category="Carbonates"
                    link="#"
                    />
                    <Items
                    id="four"
                    item_name="Meteorite"
                    details=""
                    likes= {90}
                    views={60}
                    tag="Minerals"
                    category="Carbonates"
                    link="#"
                    />
                    <Items
                    id="one"
                    item_name="Crystals"
                    details=""
                    likes= {90}
                    views={60}
                    tag="Minerals"
                    category="Carbonates"
                    link="#"
                    />
                    <Items
                    id="one"
                    item_name="Meteorite"
                    details=""
                    likes= {90}
                    views={60}
                    tag="Minerals"
                    category="Carbonates"
                    link="#"
                    />
                    <Items
                    id="one"
                    item_name="Crystals"
                    details=""
                    likes= {90}
                    views={60}
                    tag="Minerals"
                    category="Carbonates"
                    link="#"
                    />
                    <Items
                    id="one"
                    item_name="Meteorite"
                    details=""
                    likes= {90}
                    views={60}
                    tag="Minerals"
                    category="Carbonates"
                    link="#"
                    />
                    <Items
                    id="one"
                    item_name="Crystals"
                    details=""
                    likes= {90}
                    views={60}
                    tag="Minerals"
                    category="Carbonates"
                    link="#"
                    />
                    <Items
                    id="one"
                    item_name="Meteorite"
                    details=""
                    likes= {90}
                    views={60}
                    tag="Minerals"
                    category="Carbonates"
                    link="#"
                    />
                </div>
            </div>
            </section>
        // <div className="min-h-screen flex flex-col items-center justify-center"> 
        // <video autoPlay loop muted playsInline className="absolute w-full h-full object-cover">
        //     <source src="/assets/mbijiwe_masthead.mp4" type="video/mp4; codecs=avc1" />
        // </video>
        // <div className={`flex-grow-0 pt-10 transition-opacity duration-1000`}>
        //     <Image src="/assets/vercel.svg" width={128/3} height={144/3} alt="logo" />
        // </div>
        // <div className='p-12 font-bold z-10 text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-center flex-1 items-center justify-center flex-col'>
        //     <h1 className='mb-6 text-4xl xl:text-5xl font-pacifico'>Mbijiwexihibts</h1>
        //     <h2 className='mb-2 text-2xl xl:text-3xl tracking-tight font-nunito'>
        //         <span> Mining Database,</span><span> future app.</span>
        //     </h2>
        // </div>
        // <div className={`flex-grow-0 pb-20 md:pb-10 transition-all duration-1000`}>
        // <h2>Scroll &rarr;</h2>
        // </div>
        // </div>
    )
}

export default AboutUs