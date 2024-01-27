import Autoplay from "embla-carousel-autoplay"
import { Carousel, CarouselPrevious, CarouselContent, CarouselNext, CarouselItem } from "./ui/carousel"
import projects from "@/db/fake/Projects"
import ProjectCard from "./ProjectCard";
import { IProject } from "@/db/models/Project";

const basis = "lg:basis-1/2";

const ProjectBuilder = (project: IProject) => (
    <CarouselItem className={basis}>
        <ProjectCard {...project}/>
    </CarouselItem>
);

const ProjectCardCarousel = () => {
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
  
  export default ProjectCardCarousel;