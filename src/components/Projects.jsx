import React from 'react';
import { Typography } from '@mui/material';
import { styled } from '@mui/system';
import IndieIgnite from '../assets/images/IndieIgnite.png';
import BeforeTheStorm from '../assets/images/BeforeTheStorm.png';
import DebateCafe from '../assets/images/DebateCafe.png';
import MyTime from '../assets/images/MyTime.png';
import QuizBoi from '../assets/images/QuizBoi.png';
import AniName from '../assets/images/AniName.png';

const ProjectsSection = styled('section')({
  padding: '50px 0',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});


const ProjectRow = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  gap: '20px', 
  marginBottom: '20px',
});

const ProjectBox = styled('section')({
  backgroundColor: 'rgba(128, 0, 128, 0.8)', 
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: '20px',
  maxWidth: '300px',
  width: '100%',
  overflow: 'hidden',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  transition: 'box-shadow 0.3s ease',
  '&:hover': {
    boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
  },
  margin: '10px',
});

const ProjectImage = styled('img')({
  width: '100%',
  height: 'auto', 
  display: 'block',
  objectFit: 'cover', 
});


const ProjectTitle = styled(Typography)({
  textDecoration: 'none',
  color: '#fff',
  fontWeight: 'bold',
});

const Projects = () => {
  return (
    <ProjectsSection id="projects" className="projects">
      <div className="projects-title">
        <Typography variant="h2">Projects</Typography>
      </div>

 
      <ProjectRow>

        <ProjectBox>
          <a href="https://github.com/CCUE96/Debate-Cafe">
            <ProjectImage src={DebateCafe} alt="Debate Cafe" />
            <ProjectTitle variant="body1">Debate Cafe</ProjectTitle>
          </a>
        </ProjectBox>


        <ProjectBox>
          <a href="https://github.com/SpencerKlink/Indie-Ignite">
            <ProjectImage src={IndieIgnite} alt="Indie Ignite" />
            <ProjectTitle variant="body1">Indie Ignite</ProjectTitle>
          </a>
        </ProjectBox>

   
        <ProjectBox>
          <a href="https://github.com/mikef13x/project-1-null">
            <ProjectImage src={AniName} alt="AniName" />
            <ProjectTitle variant="body1">AniName</ProjectTitle>
          </a>
        </ProjectBox>
      </ProjectRow>


      <ProjectRow>

        <ProjectBox>
          <a href="https://github.com/CCUE96/Before-The-Storm">
            <ProjectImage src={BeforeTheStorm} alt="Before The Storm" />
            <ProjectTitle variant="body1">Before The Storm</ProjectTitle>
          </a>
        </ProjectBox>

        <ProjectBox>
          <a href="https://github.com/CCUE96/My-Day">
            <ProjectImage src={MyTime} alt="My Time" />
            <ProjectTitle variant="body1">My Time</ProjectTitle>
          </a>
        </ProjectBox>

    
        <ProjectBox>
          <a href="https://github.com/CCUE96/Quiz-Boi-2.0">
            <ProjectImage src={QuizBoi} alt="Quiz Boi 2.0" />
            <ProjectTitle variant="body1">Quiz Boi 2.0</ProjectTitle>
          </a>
        </ProjectBox>
      </ProjectRow>
    </ProjectsSection>
  );
};

export default Projects;
