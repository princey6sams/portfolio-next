import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselPrevious,
  CarouselContent,
  CarouselNext,
  CarouselItem,
} from "./ui/carousel";
import projects from "@/db/fake/Projects";
import ProjectCard from "./ProjectCard";
import { IProject } from "@/db/models/Project";

interface ProjectCardCarouselProps {
  id: string;
}

const basis = "lg:basis-1/2 xl:basis-1/3";
const ProjectBuilder = (project: IProject) => (
  <CarouselItem className={basis}>
    <ProjectCard {...project} />
  </CarouselItem>
);

const ProjectCardCarousel: React.FC<ProjectCardCarouselProps> = ({ id }) => {
  return (
    <Carousel
      className="w-full"
      style={{
        display: "flex",
      }}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      id={id}
    >
      <CarouselPrevious />
      <CarouselContent>
        {projects.map((project, index) => (
          <ProjectBuilder key={index} {...project} />
        ))}
      </CarouselContent>
      <CarouselNext />
    </Carousel>
  );
};

export default ProjectCardCarousel;
