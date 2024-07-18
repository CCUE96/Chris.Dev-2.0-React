import React from "react";
import { Typography } from "@mui/material";
import { styled } from "@mui/system";

const ProjectsSection = styled("section")({
  padding: "50px 0",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const ProjectRow = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "20px",
  marginBottom: "20px",
  maxWidth: "1200px",
  margin: "0 auto",
});

const ProjectBox = styled("section")({
  backgroundColor: "rgba(128, 0, 128, 0.8)",
  border: "1px solid #ccc",
  borderRadius: "8px",
  padding: "20px",
  width: "calc(33.33% - 40px)",
  minWidth: "300px",
  maxWidth: "300px",
  overflow: "hidden",
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  transition: "box-shadow 0.3s ease",
  "&:hover": {
    boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
  },
  margin: "10px",
});

const ProjectImage = styled("img")({
  width: "100%",
  height: "auto",
  display: "block",
  objectFit: "cover",
});

const ProjectTitle = styled(Typography)({
  textDecoration: "none",
  color: "#fff",
  fontWeight: "bold",
});

const Projects = ({ projectsData }) => {
  return (
    <ProjectsSection id="projects" className="projects">
      <div className="projects-title">
        <Typography variant="h2">Projects</Typography>
      </div>

      <ProjectRow>
        {projectsData.map((project, index) => (
          <ProjectBox key={index}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <ProjectImage src={project.image} alt={project.title} />
              <ProjectTitle variant="body1">{project.title}</ProjectTitle>
            </a>
          </ProjectBox>
        ))}
      </ProjectRow>
    </ProjectsSection>
  );
};

export default Projects;

