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
        <Carousel className="w-full" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: 800, height: 800}} >
            <CarouselPrevious />
            <CarouselContent>
              <CarouselItem>
                <Card style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  <CardContent className='p-4'>
                    <Image src={imgPath} alt="hero" height="510" width="764"/>
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  <CardContent className='p-4'>
                    <Image src={imgPath} alt="hero" height="510" width="764"/>
                  </CardContent>
                </Card>
              </CarouselItem>
            </CarouselContent>
            <CarouselNext />
        </Carousel>
      </Stack>
    </main>
  )
}
