'use client'
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Container, Stack, Typography } from '@mui/material'
import { replaceBase } from '@/utils/utils'
import { ParallaxProvider, useParallax } from 'react-scroll-parallax';
import { useRef } from 'react'
import CustomButton from '@/components/CustomButton';
import ProjectCard from '@/components/ProjectCard';

const imgPath = replaceBase("${Base}/ig.png");

export default function Home() {
  const target = useRef(null);

  return (
    <Stack direction="column" spacing={2} alignItems="center">
      <Stack direction="row" justifyContent="space-around" pt="25rem" px={10} pb={15}>
        <Container maxWidth="sm">
          <Typography variant="h4" fontSize={20} pb={2}>Creativity</Typography>
          {/* Specify colors for creativity for dark and light modes */}
          <Typography variant="h4" fontWeight="bold" fontSize={45}>Passionate individal with a love for creativity.</Typography>
        </Container>
        <Container maxWidth="md">
          <Typography variant="h6">Welcome to my portfolio website, where I showcase my unique blend of computer engineering and photography. Explore my work and projects to see how I bring creativity and technical expertise together.</Typography>
          <Stack direction="row" spacing={4} pt={4}>
            <CustomButton link="/about" name="Explore" variant="default" width="150px"/>
            {/* How to make it scroll to another section of the same page */}
            <CustomButton link="/contact" name="Contact" variant="outline" width="150px"/>
          </Stack>
        </Container>
      </Stack>
      <Card className="w-[100rem] h-[800px]" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <ProjectCard /> 
      </Card>
    </Stack>
  )
}

// Project card should accept an array of project objects from the db (Also think about adding video link to schema).