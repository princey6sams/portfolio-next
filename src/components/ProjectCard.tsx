import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import Image from 'next/image';
import { Carousel, CarouselPrevious, CarouselContent, CarouselItem, CarouselNext } from './ui/carousel';
import { replaceBase } from '@/utils/utils'

const imgPath = replaceBase("${Base}/ig.jpeg");
const basis = "md:basis-1 lg:basis-1/2"

const ProjectCard = () => {
  return (
    <Carousel style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: "90rem", height: "40rem"}} >
        <CarouselPrevious />
        <CarouselContent>
        <CarouselItem className={basis}>
            <Card className="w-[40rem] h-[700px]" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center'}}>  
                <Card className="w-[38rem]">
                    <CardContent className='p-4'>
                        <Image src="/DSC_4145-01.jpeg" alt="hero" height="510" width="764"/>
                    </CardContent>
                </Card>
                <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Card Content</p>
                </CardContent>
                <CardFooter>
                    <p>Card Footer</p>
                </CardFooter>
            </Card>
        </CarouselItem>
        <CarouselItem className={basis}>
            <Card className="w-[40rem] h-[700px]" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center'}}>  
                <Card className="w-[38rem]">
                <CardContent className='p-4'>
                    <Image src="/DSC_3418-01.jpeg" alt="hero" height="510" width="764"/>
                </CardContent>
                </Card>
                <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Card Content</p>
                </CardContent>
                <CardFooter>
                    <p>Card Footer</p>
                </CardFooter>
            </Card>
        </CarouselItem>
        <CarouselItem className={basis}>
            <Card className="w-[40rem] h-[700px]" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center'}}>  
                <Card className="w-[38rem]">
                <CardContent className='p-4'>
                    <Image src="/1673305619062-01.jpeg" alt="hero" height="510" width="764"/>
                </CardContent>``
                </Card>
                <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Card Content</p>
                </CardContent>
                <CardFooter>
                    <p>Card Footer</p>
                </CardFooter>
            </Card>
        </CarouselItem>
        <CarouselItem className={basis}>
            <Card className="w-[40rem] h-[700px]" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center'}}>  
                <Card className="w-[38rem]">
                <CardContent className='p-4'>
                    <Image src={imgPath} alt="hero" height="510" width="764"/>
                </CardContent>
                </Card>
                <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Card Content</p>
                </CardContent>
                <CardFooter>
                    <p>Card Footer</p>
                </CardFooter>
            </Card>
        </CarouselItem>
        </CarouselContent>
        <CarouselNext />
    </Carousel>
  )
}

export default ProjectCard

//Make a map function that reads the db to get the info to populate the cards