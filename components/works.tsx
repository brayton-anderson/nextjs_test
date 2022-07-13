import React from 'react'
import { Tile, TileBackground, TileContent, TileWrapper } from './tiles'
import { WorkBackground, WorkContainer, WorkLeft, WorkLink, WorkRight } from './work'
import Image from 'next/image'
const Works = () => (
    <TileWrapper numOfPages={4}>
        <TileBackground><WorkBackground /></TileBackground>
        <TileContent>
            <Tile 
            page={0} 
            renderContent={({progress}) => (
                <WorkContainer>
                    <WorkLeft progress={progress}>
                        <div>We built</div>
                        <div className='text-4xl md:text-5xl font-semibold tracking-tight'>
                           <WorkLink href='#'> Pink Pantha</WorkLink>&apos;s app
                            </div>
                    </WorkLeft>
                    <WorkRight progress={progress}>
                        <Image
                        src="/assets/items/mbijiwe_item_four.webp"
                        layout='responsive'
                        width={840}
                        height={1620}
                        alt="Pink Pantha"
                        />
                    </WorkRight>
                </WorkContainer>
            
        )}>
            </Tile> 
            </TileContent>
        <TileContent>
            <Tile page={1} renderContent={({progress}) => (
                <WorkContainer>
                <WorkLeft progress={progress}>
                    <div>We bought</div>
                    <div className='text-4xl md:text-5xl font-semibold tracking-tight'>
                    <WorkLink href='#'> Stick Pantha</WorkLink>&apos;s app
                        </div>
                </WorkLeft>
                <WorkRight progress={progress}>
                    <Image
                    src="/assets/items/mbijiwe_item_one.webp"
                    layout='responsive'
                    width={840}
                    height={1620}
                    alt="Stick Pantha"
                    />
                </WorkRight>
            </WorkContainer>
        )}>
            </Tile>
            </TileContent>
        <TileContent>
            <Tile page={2} renderContent={({progress}) => (
                <WorkContainer>
                <WorkLeft progress={progress}>
                    <div>We translated</div>
                    <div className='text-4xl md:text-5xl font-semibold tracking-tight'>
                    <WorkLink href='#'>The Hebrew</WorkLink> bible
                        </div>
                </WorkLeft>
                <WorkRight progress={progress}>
                    <Image
                    src="/assets/items/mbijiwe_item_two.webp"
                    layout='responsive'
                    width={840}
                    height={1620}
                    alt="The Hebrew"
                    />
                </WorkRight>
            </WorkContainer>
        )}>
            </Tile>
            </TileContent>
        <TileContent>
            <Tile page={3} renderContent={({progress}) => (
                <WorkContainer>
                <WorkLeft progress={progress}>
                    <div>We adopted</div>
                    <div className='text-4xl md:text-5xl font-semibold tracking-tight'>
                    <WorkLink href='#'>The Germanshephered</WorkLink> dog
                        </div>
                </WorkLeft>
                <WorkRight progress={progress}>
                    <Image
                    src="/assets/items/mbijiwe_item_three.webp"
                    layout='responsive'
                    width={840}
                    height={1620}
                    alt="The Germanshephered"
                    />
                </WorkRight>
            </WorkContainer>
        )}>
            </Tile>
            </TileContent>
    </TileWrapper>
)

export default Works