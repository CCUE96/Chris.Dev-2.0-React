// import React from 'react';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import { Container, Typography, Button, Grid } from '@mui/material';
// import resumePdf from '../assets/resume/resume.pdf';
// import resumeImg from '../assets/images/resumeScreenshot.png'; // Adjust the path based on your project structure

// const Resume = () => {
//   const downloadPdf = () => {
//     const link = document.createElement('a');
//     link.href = resumePdf;
//     link.setAttribute('download', 'ChristopherCuellarResume.pdf');
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <>
//       <Header />
//       <Container maxWidth="lg">
//         <Grid container spacing={3}>
//           <Grid item xs={12} md={6}>
//             <Typography variant="h4" component="h1" gutterBottom>
//               Resume Page
//             </Typography>
//             <Typography variant="body1" gutterBottom>
//               Welcome to my resume page!
//             </Typography>
//             <Button variant="contained" color="primary" onClick={downloadPdf}>
//               Download Resume PDF
//             </Button>
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <img src={resumeImg} alt="Resume" style={{ maxWidth: '100%', height: 'auto' }} />
//           </Grid>
//         </Grid>
//       </Container>
//       <Footer />
//     </>
//   );
// };

// export default Resume;

