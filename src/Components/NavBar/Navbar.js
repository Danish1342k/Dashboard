import React from 'react';
import { Search2Icon, BellIcon } from '@chakra-ui/icons';
import { FaCog, FaUser } from 'react-icons/fa';
import {
  Icon,
  ChakraProvider,
  Flex,
  Heading,
  Spacer,
  Input,
  InputLeftElement,
  InputGroup,
  IconButton,
  Button,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react';

function Navbar() {
  return (
    <ChakraProvider>
      <Flex
        as="nav"
        pr="4"
        alignItems="start"
        gap="2.5"
        mb="6"
        flexDirection={{
          base: 'column',
          md: 'inherit',
        }}
      >
        <Flex flexDirection="column">
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href="#" color="gray.400">
                Pages
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href="#" color="gray.700">
                Dashboard
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Heading fontSize="16" fontWeight="bold" color="gray.700">
            Dashboard
          </Heading>
        </Flex>
        <Spacer />
        <Flex alignItems="center">
          <InputGroup mr="-4">
            <InputLeftElement
              display={{ base: 'none', md: 'flex' }}
              children={<Search2Icon color="gray.700" w="4" h="4" />}
            />
            <Input
              display={{ base: 'flex', md: 'flex' }}
              type="text"
              w="80%"
              placeholder="Type here..."
              placeholderTextColor="gray.100"
              bg="#fff"
              fontSize="xs"
              fontWeight="500"
              focusBorderColor="blue.500"
              border="1px solid #e2e8f0"
              borderRadius="16px"
              _hover={{ borderColor: 'gray.300' }}
            />
          </InputGroup>

          <Button
            colorScheme="#f7fafc"
            color="gray.500"
            fontWeight="bold"
            fontSize="md"
            mr="2"
          >
            <Icon as={FaUser} boxSize={6} color="gray.500" h="4" w="4" mr="4" />
            Sign In
          </Button>
          <IconButton
            aria-label="FaCog"
            icon={<FaCog />}
            color="gray.500"
            h="4"
            w="4"
            bg="#f7fafc"
            // size="md"
          />
          <IconButton
            aria-label="BellIcon"
            icon={<BellIcon />}
            bg="#f7fafc"
            color="gray.500"
            h="4"
            w="4"
            // size="lg"
          />
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}

export default Navbar;
