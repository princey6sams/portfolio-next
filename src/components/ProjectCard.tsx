import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
  } from "@/components/ui/card";
import Image from 'next/image';
import { replaceBase } from '@/utils/utils'
import { Stack, Typography } from '@mui/material';
import { IProject } from '@/db/models/Project';

const ProjectCard = (project: IProject) => (
    <Card className="w-[40rem] h-[650px] pt-3" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center'}}>  
        <Card className="w-[38rem]">
            <CardContent className='p-4'>
                <Image src={replaceBase(project.imgPath)} alt="hero" height="510" width="764"/>
            </CardContent>
        </Card>
        <Stack direction="row" spacing={51} alignItems="center" justifyContent="center">
            <Typography fontSize={30}>{project.title}</Typography>
            <CardDescription>{project.time}</CardDescription>
        </Stack>
        <CardContent>
            <Typography>{project.description}</Typography>
        </CardContent>
    </Card>
)

export default ProjectCard;

// Put the click handler on the card itself