import Image from "next/image";
import "../globals.css";
import { replaceBase } from "@/utils/utils";
import CustomButton from "@/components/CustomButton";
import { Stack, Typography, Container } from "@mui/material";

export default function Contact() {
  return (
    <>
      <Image
        src={replaceBase("${Base}/signal_hill_foggy_city.JPG")}
        alt="contact-hero"
        className="background-image"
        height="2160"
        width="3840"
        quality={100}
        priority
      />
      <Stack direction="row" justifyContent="space-around" pt={40} px={10}>
        <Container maxWidth="sm">
          <Typography variant="h4" fontSize={20} pb={2}>
            Creativity
          </Typography>
          {/* Specify colors for creativity for dark and light modes */}
          <Typography variant="h4" fontWeight="bold" fontSize={45}>
            Passionate individal with a love for creativity.
          </Typography>
        </Container>
        <Container maxWidth="md">
          <Typography variant="h6">
            Welcome to my portfolio website, where I showcase my unique blend of
            computer engineering and photography. Explore my work and projects
            to see how I bring creativity and technical expertise together.
          </Typography>
          <Stack direction="row" spacing={4} pt={4}>
            <CustomButton
              link="/about"
              name="Explore"
              variant="default"
              width="150px"
            />
            {/* How to make it scroll to another section of the same page */}
            <CustomButton
              link="/contact"
              name="Contact"
              variant="outline"
              width="150px"
            />
          </Stack>
        </Container>
      </Stack>
    </>
  );
}

// Make the image a Carousel
