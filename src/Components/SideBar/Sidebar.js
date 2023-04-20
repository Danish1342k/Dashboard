import { List, ListItem, Icon, Text, Flex } from '@chakra-ui/react';
import {
  FaAtom,
  FaHome,
  FaCreditCard,
  FaChartLine,
  FaToolbox,
  FaUser,
  FaFile,
  FaRocket,
} from 'react-icons/fa';

import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  return (
    <List
      color="Black"
      fontSize="1.2em"
      spacing={4}
      direction="column"
      display={{ base: 'none', lg: 'block', xl: 'block' }}
      alignItems={{ base: 'baseline' }}
      justifyContent={{ base: 'space-around' }}
      width={{ lg: '200px', xl: '250px' }}
      position={{ lg: 'fixed' }}
      line-height="2"
    >
      <ListItem display="flex" alignItems="center" m="20px 0px 20px 0px">
        <NavLink as="headnav" to="/" display="flex" alignItems="center">
          <Flex>
            <Icon
              as={FaAtom}
              boxSize={6}
              color="#4fd1c5"
              bg="#fff"
              p="5px"
              borderRadius="6px"
              mx="12px"
            />
            <Text color="gray.700" fontSize="sm" fontWeight="bold">
              Chakra UI Dashboard
            </Text>
          </Flex>
        </NavLink>
      </ListItem>

      <ListItem
        as="list"
        display="flex"
        alignItems="center"
        fontSize="sm"
        mb="3"
        py="3.5"
        w="80%"
        h="60px"
        // boxShadow="none"
        boxShadow="rgba(0, 0, 0, 0.02) 0px 3.5px 5.5px"
        borderRadius="15px"
        bg="#fff"
        color="gray.700"
        fontWeight="600"
      >
        <Icon
          as={FaHome}
          boxSize={6}
          color="#fff"
          fontSize="10px"
          bg="#4fd1c5"
          p="4px"
          mr="15px"
          ml="15px"
          borderRadius="6px"
        />
        <NavLink to="/" fontWeight="700">
          Dashboard
        </NavLink>
      </ListItem>
      <ListItem
        as="list"
        color="#a0aec0"
        display="flex"
        alignItems="center"
        fontSize="md"
        mb="3"
        py="3.5"
        px="4"
        fontWeight="700"
      >
        <Icon
          as={FaChartLine}
          boxSize={6}
          color="teal.300"
          bg="#fff"
          p="8px"
          borderRadius="12px"
          h="30px"
          w="30px"
          mr="4"
        />
        Table
      </ListItem>
      <ListItem
        as="list"
        color="gray.400"
        display="flex"
        alignItems="center"
        fontSize="sm"
        mb="3"
        py="3.5"
        px="4"
        fontWeight="700"
      >
        <Icon
          as={FaCreditCard}
          boxSize={6}
          color="teal.300"
          bg="#fff"
          p="8px"
          borderRadius="12px"
          h="30px"
          w="30px"
          mr="4"
        />
        Billing
      </ListItem>
      <ListItem
        as="list"
        color="#a0aec0"
        display="flex"
        alignItems="center"
        fontSize="md"
        mb="3"
        py="3.5"
        px="4"
        fontWeight="700"
      >
        <Icon
          as={FaToolbox}
          boxSize={6}
          color="teal.300"
          bg="#fff"
          p="8px"
          borderRadius="12px"
          h="30px"
          w="30px"
          mr="4"
        />
        RTL
      </ListItem>
      <ListItem as="list" ml="20px" fontWeight="bold" color="gray.700">
        Account Pages
      </ListItem>
      <ListItem
        as="list"
        color="gray.400"
        display="flex"
        alignItems="center"
        fontSize="sm"
        mb="3"
        py="3.5"
        px="4"
        fontWeight="700"
      >
        <Icon
          as={FaUser}
          boxSize={6}
          color="teal.300"
          bg="#fff"
          p="8px"
          borderRadius="12px"
          h="30px"
          w="30px"
          mr="4"
        />
        Profile
      </ListItem>
      <ListItem
        as="list"
        color="#a0aec0"
        display="flex"
        alignItems="center"
        fontSize="md"
        mb="3"
        py="3.5"
        px="4"
        fontWeight="700"
      >
        <Icon
          as={FaFile}
          boxSize={6}
          color="teal.300"
          bg="#fff"
          p="8px"
          borderRadius="12px"
          h="30px"
          w="30px"
          mr="4"
        />
        Sign in
      </ListItem>
      <ListItem
        as="list"
        color="gray.400"
        display="flex"
        alignItems="center"
        fontSize="sm"
        mb="3"
        py="3.5"
        px="4"
        fontWeight="700"
      >
        <Icon
          as={FaRocket}
          boxSize={6}
          color="teal.300"
          bg="#fff"
          p="8px"
          borderRadius="12px"
          h="30px"
          w="30px"
          mr="4"
        />
        Sign Up
      </ListItem>
    </List>
  );
}
