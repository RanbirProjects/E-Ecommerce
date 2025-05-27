import React, { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Box,
  Tabs,
  Tab
} from '@mui/material';
import axios from 'axios';

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products');
        setFeaturedProducts(response.data.slice(0, 3)); // Get first 3 products
      } catch (error) {
        console.error('Error fetching featured products:', error);
      }
    };

    fetchFeaturedProducts();
  }, []);

  return (
    <Container
      maxWidth="lg"
      className="home-container"
      sx={{
        mt: 4,
      }}
    >
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to Our Store
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Discover amazing products at great prices
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          component={RouterLink}
          to="/products"
          sx={{ mt: 2 }}
        >
          Shop Now
        </Button>
      </Box>

      <Box sx={{ width: '100%', mb: 4 }}>
        <Tabs value={tabValue} onChange={handleTabChange} centered>
          <Tab label="Featured Products" />
          <Tab label="New Arrivals" />
          <Tab label="On Sale" />
        </Tabs>
      </Box>

      {/* Conditional rendering based on selected tab */}
      {tabValue === 0 && (
        <Box>
          <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 4 }}>
            Featured Products
          </Typography>
          <Grid container spacing={4}>
            {featuredProducts.slice(0, 3).map((product) => (
              <Grid item key={product._id} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    '&:hover': {
                      transform: 'scale(1.02)',
                      transition: 'transform 0.2s ease-in-out',
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={product.image}
                    alt={product.name}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {product.name}
                    </Typography>
                    <Typography color="text.secondary" paragraph>
                      {product.description.substring(0, 100)}...
                    </Typography>
                    <Typography variant="h6" color="primary">
                      ${product.price}
                    </Typography>
                    <Button
                      variant="outlined"
                      color="primary"
                      component={RouterLink}
                      to={`/product/${product._id}`}
                      sx={{ mt: 2 }}
                    >
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}

      {tabValue === 1 && (
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Typography variant="h5" color="text.secondary">
            New Arrivals coming soon!
          </Typography>
        </Box>
      )}

      {tabValue === 2 && (
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Typography variant="h5" color="text.secondary">
            Sales items coming soon!
          </Typography>
        </Box>
      )}

    </Container>
  );
};

export default Home; 