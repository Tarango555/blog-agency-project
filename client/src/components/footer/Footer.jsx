import React from 'react';
import { Box, Container, Typography, Link, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#333333', // Neutral dark gray to complement a blue navbar
        color: '#fff',
        py: 5,
        mt: 5,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 4,
            justifyContent: 'space-between',
          }}
        >
          {/* About Section */}
          <Box sx={{ flex: '1 1 30%' }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
              About Us
            </Typography>
            <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
              We are a creative blog agency passionate about storytelling. Our mission is to inspire and inform through engaging blog content for all audiences.
            </Typography>
          </Box>

          {/* Quick Links Section */}
          <Box sx={{ flex: '1 1 30%' }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
              Quick Links
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', p: 0 }}>
              <li>
                <Link href="#" color="inherit" underline="hover">Home</Link>
              </li>
              <li>
                <Link href="#about" color="inherit" underline="hover">About</Link>
              </li>
              <li>
                <Link href="#blogs" color="inherit" underline="hover">Blogs</Link>
              </li>
              <li>
                <Link href="#contact" color="inherit" underline="hover">Contact</Link>
              </li>
            </Box>
          </Box>

          {/* Social Media Section */}
          <Box sx={{ flex: '1 1 30%' }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
              Follow Us
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Stay connected with us on social media!
            </Typography>
            <Box>
              <IconButton
                href="https://facebook.com"
                target="_blank"
                sx={{ color: '#fff', '&:hover': { color: '#4267B2' } }}
              >
                <Facebook />
              </IconButton>
              <IconButton
                href="https://twitter.com"
                target="_blank"
                sx={{ color: '#fff', '&:hover': { color: '#1DA1F2' } }}
              >
                <Twitter />
              </IconButton>
              <IconButton
                href="https://instagram.com"
                target="_blank"
                sx={{ color: '#fff', '&:hover': { color: '#E1306C' } }}
              >
                <Instagram />
              </IconButton>
              <IconButton
                href="https://linkedin.com"
                target="_blank"
                sx={{ color: '#fff', '&:hover': { color: '#0A66C2' } }}
              >
                <LinkedIn />
              </IconButton>
            </Box>
          </Box>
        </Box>

        {/* Footer Bottom */}
        <Box
          sx={{
            mt: 4,
            pt: 3,
            textAlign: 'center',
            fontSize: '0.875rem',
          }}
        >
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} Blog Agency. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
