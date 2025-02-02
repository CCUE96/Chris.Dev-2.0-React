import React from 'react';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ChrisHeroImage from '../assets/images/chris.png'


const AboutMeSection = styled('section')({
  marginTop: '20px',
  padding: '20px',
  backgroundColor: 'transparent',
  boxShadow: 'none',
});

const AboutMe = () => {
  return (
    <>
      <Header />
      <Grid container justifyContent="center">
        <Grid item xs={12} md={8}>
          <Paper component={AboutMeSection} elevation={0}>
            <Typography variant="h2" gutterBottom>
              About Me
            </Typography>
            <Divider />
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} md={4}>
                <img src={ChrisHeroImage} alt="Chris.Dev" style={{ width: '100%', borderRadius: '8px' }} />
              </Grid>
              <Grid item xs={12} md={8}>
                {/* sperated into multiple paragrahs to fill out the page */}
                <Typography variant="body1" paragraph>
                  I am currently a Software Engineering student at UCONN, passionate about web development and building
                  scalable applications. My journey started with learning HTML, CSS, and JavaScript, and now I am
                  exploring advanced topics in Full Stack Development such as Python, TypeScript and more.
                </Typography>
                <Typography variant="body1" paragraph>
                  I am always eager to learn new technologies and stay updated with the latest trends in software
                  development. My goal is to contribute meaningfully to projects and create valuable solutions that
                  solve real-world problems.
                </Typography>
                <Typography variant="body1" paragraph>
                  Besides coding, I enjoy film, Games, and Travel. Feel free to reach
                  out to me if you have any questions or collaboration opportunities.
                </Typography>
                <Typography variant="body1">
                Explore my portfolio by visiting the Projects tab, or download my resume directly from the Resume page. If you&apos;re interested in collaborating or have any inquiries, feel free to reach out through the Contact page. I can&apos;t wait to connect with you!
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default AboutMe;
