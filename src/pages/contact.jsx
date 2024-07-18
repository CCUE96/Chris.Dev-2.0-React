import React from 'react';
import { styled } from '@mui/material/styles';
import { Container, Typography, TextField, Button, Grid } from '@mui/material';
import Footer from '../components/Footer';
import Header from '../components/Header';

const ContactSection = styled('section')({
  padding: '20px',
  backgroundColor: '#f0f0f0',
  fontFamily: 'Arial, sans-serif',
});

const ContactForm = styled('form')({
  maxWidth: '600px',
  margin: '0 auto',
});

const SubmitButton = styled(Button)({
  backgroundColor: '#007bff',
  color: '#fff',
  padding: '10px 20px',
  fontSize: '16px',
  borderRadius: '5px',
  '&:hover': {
    backgroundColor: '#0056b3',
  },
});

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleMailto = () => {
    const { name, email, message } = formData;
    const mailtoLink = `mailto:rival100x@gmail.com?subject=Message from ${name}&body=${message}`;
    window.location.href = encodeURI(mailtoLink);
  };

  return (
    <>
      <Header />
      <ContactSection id="contact">
        <Container maxWidth="lg">
          <Typography variant="h2" component="h2" gutterBottom>
            Contact Me
          </Typography>
          <ContactForm>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Name"
                  variant="outlined"
                  fullWidth
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Message"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={6}
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <SubmitButton type="button" variant="contained" onClick={handleMailto}>
                  Submit
                </SubmitButton>
              </Grid>
            </Grid>
          </ContactForm>
        </Container>
      </ContactSection>
      <Footer />
    </>
  );
};

export default Contact;
