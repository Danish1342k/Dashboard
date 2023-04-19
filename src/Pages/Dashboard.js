import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import Cards from '../Components/FirstCard/Cards';
import SecondCard from '../Components/SecondCard/SecondCard';
import UserCards from '../Components/UsersCard/UserCards';
import Project from '../Components/ProjectCard/Project';
import Footer from '../Components/Footer/Footer';
import { FaWallet, FaGlobe, FaFile, FaShoppingCart } from 'react-icons/fa';

const cardData = [
  {
    title: "Today's Moneys",
    amount: '$53,000',
    percentage: '+55%',
    icon: FaWallet,
  },
  {
    title: "Today's Users",
    amount: '2300',
    percentage: '+5%',
    icon: FaGlobe,
  },
  {
    title: 'New Clint',
    amount: '+3,020',
    percentage: '-14%',
    icon: FaFile,
  },
  {
    title: 'Totall Sales',
    amount: '$173,000',
    percentage: '+8%',
    icon: FaShoppingCart,
  },
];

function Dashboard() {
  return (
    <div>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      >
        {cardData.map((card, index) => (
          <Cards
            key={index}
            title={card.title}
            amount={card.amount}
            percentage={card.percentage}
            icon={card.icon}
          />
        ))}
      </SimpleGrid>
      <SecondCard />
      <UserCards />
      <Project />
      <Footer />
    </div>
  );
}
export default Dashboard;
