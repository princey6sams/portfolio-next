import Image from 'next/image'
import { Avatar, Container, IconButton, Stack, Typography } from '@mui/material'
import CustomButton from '@/components/CustomButton'
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailIcon from '@mui/icons-material/Mail';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { replaceBase } from '@/utils/utils';

export default function Home() {
  return (
    <main>
      <Stack direction="column" spacing={4} alignItems="center" p={10}>
        <Stack direction={{ sm:"column", md:"row" }} justifyContent="space-around" px={10} pb={4} spacing={{ sm: 2 }}>
          <Container maxWidth="sm">
            <Typography variant="h4" fontWeight="bold" fontSize={45}>Combining Computer Engineering and Photography for Impact.</Typography>
          </Container>
          <Container maxWidth="md">
            <Typography variant="h6" fontSize={18} pb={2}>Welcome to my portfolio website! I am a computer engineering student with a passion for photography. This website is where I showcase my unique blend of computer engineering and photography.</Typography>
            <Typography variant="h6" fontSize={18}>Explore my work and projects to see how I bring creativity and technical expertise together.</Typography>
            <Stack direction="row" spacing={4} pt={2}>
              <CustomButton link="/about" name="Explore" variant="default" width="150px"/>
              {/* How to make it scroll to another section of the same page */}
              <CustomButton link="/contact" name="Contact" variant="outline" width="150px"/>
            </Stack>
          </Container>
        </Stack>
        <Image src={replaceBase("${Base}/ig.jpeg")} alt="hero" height="1020" width="1528" priority/>
        <Typography variant="h4" fontWeight="bold" fontSize={50} pt={5}>My Work</Typography>
        <Stack direction="row" justifyContent="space-around" pt={12} px={10}>
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
        <Stack direction = "row" spacing={4} alignItems="center">
            {/* // SSR used for custom button */}
            <CustomButton link={replaceBase("${Base}/photography")} name="Photography" variant="outline" width="150px"/> 
            <CustomButton link={replaceBase("${Base}/programming")} name="Programming" variant="outline" width="150px"/>
        </Stack>
        <Stack direction="row" spacing={1} pt={3}>
          <IconButton aria-label="GitHub" href="https://github.com/princey6sams">
            <Avatar alt="GitHub">
              <GitHubIcon/>
            </Avatar>
          </IconButton>
          <IconButton aria-label="Instagram" href="https://www.instagram.com/princey6sams">
            <Avatar alt="Instagram">
              <InstagramIcon/>
            </Avatar>
          </IconButton>
            <IconButton aria-label="Email" href="mailto:princeasingha@gmail.com">
            <Avatar alt="Email">
              <MailIcon/>
            </Avatar>
          </IconButton>
          <IconButton aria-label="YouTube" href="https://www.youtube.com/channel/UC9xswhHMEd2q-X7iEgNzwGw">
            <Avatar alt="YouTube">
              <YouTubeIcon/>
            </Avatar>
          </IconButton>
        </Stack>
      </Stack>
    </main>
  )
}
