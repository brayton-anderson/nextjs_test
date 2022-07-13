import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import internal from 'stream'

interface Props {
    id: string
    item_name: string
    details: string
    likes: number
    views: number
    tag: string
    category: string
    link: string
}
const Items: React.FC<Props> = ({id, item_name, details, likes, views, tag, category, link}) => (
    
        <div>
            <Image src={`/assets/items/mbijiwe_item_${id}.webp`} alt={item_name} width={1366} height={1555}/>
            <div className='text-2xl xl:text-3xl font-nunito'>{item_name}</div>
            <div className='text-xl font-nunito'>
                <Link href={link}>
                    <a target="_blank">{category}</a>
                </Link>
            </div>
        </div>
)

export default Items