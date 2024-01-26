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
import { Stack, Typography } from '@mui/material';

const imgPath = replaceBase("${Base}/ig.jpeg");
const basis = "md:basis-1 lg:basis-1/2"

const ProjectCard = () => {
  return (
    <Carousel style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: "90rem", height: "40rem"}} >
        <CarouselPrevious />
        <CarouselContent>
        <CarouselItem className={basis}>
            <Card className="w-[40rem] h-[650px]" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center'}}>  
                <Card className="w-[38rem]">
                <CardContent className='p-4'>
                    <Image src="/DSC_3418-01.jpeg" alt="hero" height="510" width="764"/>
                </CardContent>
                </Card>
                <Stack direction="row" spacing={51} alignItems="center" justifyContent="center">
                    <Typography fontSize={30}>Project 1</Typography>
                    <CardDescription>Aug 2023</CardDescription>
                </Stack>
                <CardContent>
                    <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum sem magna, ut porttitor nisi interdum facilisis. Nullam feugiat faucibus vestibulum. Nulla accumsan velit id urna faucibus imperdiet. Etiam ac tortor eget lectus rhoncus tempus quis vel eros. Integer commodo, erat vitae ullamcorper interdum, sapien lorem condimentum ante, quis lobortis elit lacus sit amet diam.</Typography>
                </CardContent>
            </Card>
        </CarouselItem>
        <CarouselItem className={basis}>
            <Card className="w-[40rem] h-[650px]" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center'}}>  
                <Card className="w-[38rem]">
                <CardContent className='p-4'>
                    <Image src={imgPath} alt="hero" height="510" width="764"/>
                </CardContent>
                </Card>
                <Stack direction="row" spacing={51} alignItems="center" justifyContent="center">
                    <Typography fontSize={30}>Project 2</Typography>
                    <CardDescription>Aug 2023</CardDescription>
                </Stack>
                <CardContent>
                    <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum sem magna, ut porttitor nisi interdum facilisis. Nullam feugiat faucibus vestibulum. Nulla accumsan velit id urna faucibus imperdiet. Etiam ac tortor eget lectus rhoncus tempus quis vel eros. Integer commodo, erat vitae ullamcorper interdum, sapien lorem condimentum ante, quis lobortis elit lacus sit amet diam.</Typography>
                </CardContent>
            </Card>
        </CarouselItem>
        <CarouselItem className={basis}>
            <Card className="w-[40rem] h-[650px]" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center'}}>  
                <Card className="w-[38rem]">
                    <CardContent className='p-4'>
                        <Image src="/DSC_4145-01.jpeg" alt="hero" height="510" width="764"/>
                    </CardContent>
                </Card>
                <Stack direction="row" spacing={51} alignItems="center" justifyContent="center">
                    <Typography fontSize={30}>Project 3</Typography>
                    <CardDescription>Aug 2023</CardDescription>
                </Stack>
                <CardContent>
                    <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum sem magna, ut porttitor nisi interdum facilisis. Nullam feugiat faucibus vestibulum. Nulla accumsan velit id urna faucibus imperdiet. Etiam ac tortor eget lectus rhoncus tempus quis vel eros. Integer commodo, erat vitae ullamcorper interdum, sapien lorem condimentum ante, quis lobortis elit lacus sit amet diam.</Typography>
                </CardContent>
            </Card>
        </CarouselItem>
        <CarouselItem className={basis}>
            <Card className="w-[40rem] h-[650px]" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center'}}>  
                <Card className="w-[38rem]">
                <CardContent className='p-4'>
                    <Image src="/1673305619062-01.jpeg" alt="hero" height="510" width="764"/>
                </CardContent>
                </Card>
                <Stack direction="row" spacing={51} alignItems="center" justifyContent="center">
                    <Typography fontSize={30}>Project 4</Typography>
                    <CardDescription>Aug 2023</CardDescription>
                </Stack>
                <CardContent>
                    <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum sem magna, ut porttitor nisi interdum facilisis. Nullam feugiat faucibus vestibulum. Nulla accumsan velit id urna faucibus imperdiet. Etiam ac tortor eget lectus rhoncus tempus quis vel eros. Integer commodo, erat vitae ullamcorper interdum, sapien lorem condimentum ante, quis lobortis elit lacus sit amet diam.</Typography>
                </CardContent>
            </Card>
        </CarouselItem>
        </CarouselContent>
        <CarouselNext />
    </Carousel>
  )
}

export default ProjectCard

// Make a map function that reads the db to get the info to populate the cards
// Use replaceBase to mutate path after mapping

// Project Schema to be used for both the card and the page
// For the card:
// Title, Description, Image Path, CreationDate

// Put the click handler on the card itself

// RENAME TO PROJECTCAROUSEL