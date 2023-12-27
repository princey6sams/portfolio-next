import Image from 'next/image'
import { Avatar, IconButton, Stack, Typography } from '@mui/material'
import CustomButton from '@/components/CustomButton'
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailIcon from '@mui/icons-material/Mail';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Home() {
  return (
    <main>
      <Stack direction="column" spacing={4} alignItems="center" p={5}>
        <Typography variant="h2" fontWeight="bold">Prince Authoy Singha</Typography>
        <Image src="/ig.png" alt="hero" height="510" width="764"/>
        <Stack direction = "row" spacing={4} alignItems="center">
            {/* // SSR used */}
            <CustomButton link="/photography" name="Photography" variant="outline" width="150px"/> 
            <CustomButton link="/programming" name="Programming" variant="outline" width="150px"/>
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
