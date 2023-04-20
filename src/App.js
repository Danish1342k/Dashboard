import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import Navbar from './Components/NavBar/Navbar';
import Dashboard from './Pages/Dashboard';
import Sidebar from './Components/SideBar/Sidebar';
import './App.css';

function App() {
  return (
    <Grid templateColumns="repeat(6, 1fr)" bg="#f7fafc">
      <GridItem
        as="aside"
        colSpan={{ base: 6, lg: 1, xl: 1 }}
        bg="#f7fafc"
        minHeight={{ lg: '100vh' }}
        p={{ lg: '30px 0 20px 20px' }}
      >
        <Sidebar />
      </GridItem>

      <GridItem
        as="main"
        colSpan={{ base: 6, lg: 5, xl: 5 }}
        p="8"
        // px="12"
        // pt="6"
        // pb="10"
        className="scrollbar"
      >
        <Navbar />
        <Dashboard />
      </GridItem>
    </Grid>
  );
}

export default App;
