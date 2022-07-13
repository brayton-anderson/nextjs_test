import React, { useContext, useRef } from 'react'
import ad from '../styles/adverts.module.css'
import { ScrollContext } from '../utils/scroll-observer'
//import Items from './items'
// import Image from 'next/image'
const opacityForBlock = (sectionProgress: number, blockNo: number) =>{
    const progress = sectionProgress - blockNo
    if (progress >= 0 && progress < 1) return 1
    return 0.2
}


const Adverts: React.FC = ( ) => {
    const {scrollY} = useContext(ScrollContext)
    const refContainer = useRef<HTMLDivElement>(null)

    const numOfPages = 3
    let progress = 0

    const {current: elContainer} = refContainer

    if(elContainer) {
        const {clientHeight, offsetTop} = elContainer
        const screenH = window.innerHeight
        const halfH = screenH / 2
        const percentY = Math.min(
            clientHeight + halfH,
            Math.max(-screenH, scrollY - offsetTop) + halfH
        )/ clientHeight

        progress = Math.min(numOfPages - 0.5, Math.max(0.5, percentY * numOfPages))
    }
    return (
        <div ref={refContainer} className='bg-black text-white'>
            <div className='min-h-screen max-w-5xl mx-auto px-10 lg:px-20 py-24 md:py-28 lg:py-36 flex flex-col justify-center items-center text-4xl md:text-6xl lg:text-7xl tracking-tight font-semibold font-nunito'>
                <div className='leading-[1.15]'>
                    <div className={ad.advertText} style={{
                        opacity: opacityForBlock(progress, 0)
                    }}>
                        We know our tools inside out
                        </div>
                    <span className={`${ad.advertText} inline-block after:content-['_']`}
                    style={{
                        opacity: opacityForBlock(progress, 1)
                    }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
                    <span className={`${ad.advertText} inline-block`}
                    style={{
                        opacity: opacityForBlock(progress, 2)
                    }}>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 
                        <strong>
                            2,234
                            </strong> 
                            years old. 
                            </span>
                    </div>
            </div>
        </div>

    )
}

export default Adverts