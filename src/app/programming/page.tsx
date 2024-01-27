'use client'
import {
  Card,
  CardFooter,
} from "@/components/ui/card"
import {
  Command,
  CommandInput,
} from "@/components/ui/command"
import { Container, Grid, Stack, Typography } from '@mui/material'
import { replaceBase } from '@/utils/utils'
import CustomButton from '@/components/CustomButton';
import ProjectCardCarousel from '@/components/ProjectCardCarousel';
import projects from "@/db/fake/Projects"
import { Project } from "@/db/models/Project"
import ProjectCard from "@/components/ProjectCard"

const imgPath = replaceBase("${Base}/ig.png");

export default function Home() {

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
            <CustomButton link="/programming/projects" name="Explore" variant="default" width="150px" scrollTarget="all-projects" />
            {/* How to make it scroll to another section of the same page */}
            <CustomButton link="/contact" name="Contact" variant="outline" width="150px"/>
          </Stack>
        </Container>
      </Stack>
      <Card className="w-[100rem] h-[800px]" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <ProjectCardCarousel /> 
      </Card>
      <CardFooter></CardFooter>
      <Container maxWidth="sm">
        <Command className="rounded-lg border shadow-md">
          <CommandInput placeholder="Search..." />
        </Command >
      </Container>
      <CardFooter></CardFooter>
      <Container maxWidth="xl" id="all-projects">
        <Grid container justifyContent="center" alignItems="center" rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 2 }}>
            {projects.map((project, index) => (
              <Grid item key={index} lg={12} xl={6}>
                  <ProjectCard key={index} {...project} />
              </Grid>
            ))}
        </Grid> 
      </Container>
      <CardFooter></CardFooter>
    </Stack>
  )
}

// Project card should accept an array of project objects from the db (Also think about adding video link to schema).
// Project card should also accept a click handler to open the project page

// Make the search filter out and display only the projects that match the search query in the same page