'use client'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Stack } from '@mui/material'
import { replaceBase } from '@/utils/utils'

const imgPath = replaceBase("${Base}/ig.png");

export default function Home() {
  return (
    <main>
      <Stack direction="column" spacing={4} alignItems="center">
        
      </Stack>
    </main>
  )
}
