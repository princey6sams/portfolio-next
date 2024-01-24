import { Container, Stack, Typography } from "@mui/material";
import CustomButton from "./CustomButton";

export default function IntroBlock() {
    return (
      <Stack direction="row" justifyContent="space-around" pt={10} px={20}>
        <Container maxWidth="md">
          <Typography variant="h4" fontWeight="bold" fontSize={50}>Combining computer engineering and photography for impact.</Typography>
        </Container>
        <Container maxWidth="md">
          <Typography variant="h6">Welcome to my portfolio website, where I showcase my unique blend of computer engineering and photography. Explore my work and projects to see how I bring creativity and technical expertise together.</Typography>
          <Stack direction="row" spacing={4} pt={4}>
            <CustomButton link="/about" name="Explore" variant="default" width="150px"/>
            <CustomButton link="/contact" name="Contact" variant="outline" width="150px"/>
          </Stack>
        </Container>
      </Stack>
    )
};