import React from "react";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import Image from "next/image";
import { replaceBase } from "@/utils/utils";
import { Container, Stack, Typography } from "@mui/material";
import { IProject } from "@/db/models/Project";

const ProjectCard = (project: IProject) => (
  <Card
    className="max-w-[40rem] h-[650px] pt-3 p-4"
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
    }}
  >
    <Card className="w-full">
      <CardContent className="p-4">
        <Image
          src={replaceBase(project.imgPath)}
          alt="hero"
          className="aspect-[3/2]"
          height={1280}
          width={1920}
          style={{
            objectFit: "cover",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        />
      </CardContent>
    </Card>
    <Stack
      direction={{ lg: "column", xl: "row" }}
      spacing={{ lg: 1, xl: "320px" }}
      alignItems="center"
      justifyContent="space-between"
      pt={1}
    >
      <Typography fontSize={30}>{project.title}</Typography>
      <CardDescription>{project.time}</CardDescription>
    </Stack>
    <CardContent>
      <Typography>{project.description}</Typography>
    </CardContent>
  </Card>
);

export default ProjectCard;

// Put the click handler on the card itself
