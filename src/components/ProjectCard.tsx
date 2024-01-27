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
import Autoplay from "embla-carousel-autoplay"


const imgPath = replaceBase("${Base}/ig.jpeg");
const basis = "lg:basis-1/2"

interface Project {
    title: string;
    description: string;
    date: string;
    imgPath: string;
}

// To come from db eventually
const projects = [
    {
        title: "Project 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum sem magna, ut porttitor nisi interdum facilisis. Nullam feugiat faucibus vestibulum. Nulla accumsan velit id urna faucibus imperdiet. Etiam ac tortor eget lectus rhoncus tempus quis vel eros. Integer commodo, erat vitae ullamcorper interdum, sapien lorem condimentum ante, quis lobortis elit lacus sit amet diam.",
        date: "Aug 2023",
        imgPath: "${Base}/DSC_3418-01.jpeg" // Maybe transform paths before storing to db using middleware???
    },
    {
        title: "Project 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum sem magna, ut porttitor nisi interdum facilisis. Nullam feugiat faucibus vestibulum. Nulla accumsan velit id urna faucibus imperdiet. Etiam ac tortor eget lectus rhoncus tempus quis vel eros. Integer commodo, erat vitae ullamcorper interdum, sapien lorem condimentum ante, quis lobortis elit lacus sit amet diam.",
        date: "Aug 2023",
        imgPath: "${Base}/ig.jpeg" // Maybe change to a video link after youtube player integration.
    },
    {
        title: "Project 3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum sem magna, ut porttitor nisi interdum facilisis. Nullam feugiat faucibus vestibulum. Nulla accumsan velit id urna faucibus imperdiet. Etiam ac tortor eget lectus rhoncus tempus quis vel eros. Integer commodo, erat vitae ullamcorper interdum, sapien lorem condimentum ante, quis lobortis elit lacus sit amet diam.",
        date: "Aug 2023",
        imgPath: "${Base}/DSC_4145-01.jpeg"
    },
    {
        title: "Project 4",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum sem magna, ut porttitor nisi interdum facilisis. Nullam feugiat faucibus vestibulum. Nulla accumsan velit id urna faucibus imperdiet. Etiam ac tortor eget lectus rhoncus tempus quis vel eros. Integer commodo, erat vitae ullamcorper interdum, sapien lorem condimentum ante, quis lobortis elit lacus sit amet diam.",
        date: "Aug 2023",
        imgPath: "${Base}/1673305619062-01.jpeg"
    },
]

const ProjectBuilder = (project: Project) => (
    <CarouselItem className={basis}>
        <Card className="w-[40rem] h-[650px] pt-3" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center'}}>  
            <Card className="w-[38rem]">
                <CardContent className='p-4'>
                    <Image src={replaceBase(project.imgPath)} alt="hero" height="510" width="764"/>
                </CardContent>
            </Card>
            <Stack direction="row" spacing={51} alignItems="center" justifyContent="center">
                <Typography fontSize={30}>{project.title}</Typography>
                <CardDescription>{project.date}</CardDescription>
            </Stack>
            <CardContent>
                <Typography>{project.description}</Typography>
            </CardContent>
        </Card>
    </CarouselItem>
);

const ProjectCard = () => {
  return (
    <Carousel style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: "90rem", height: "40rem"}} 
    plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}>
        <CarouselPrevious />
        <CarouselContent>
           {projects.map((project, index) => (
                <ProjectBuilder key={index} {...project} />
           ))}
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