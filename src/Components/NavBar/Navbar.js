import React from 'react';
import { Search2Icon, BellIcon } from '@chakra-ui/icons';
import { FaCog, FaUser } from 'react-icons/fa';
import {
  Icon,
  ChakraProvider,
  Flex,
  Heading,
  Spacer,
  Text,
  Input,
  InputLeftElement,
  InputGroup,
  IconButton,
  Button,
} from '@chakra-ui/react';

function Navbar() {
  return (
    <ChakraProvider>
      <Flex
        as="nav"
        p="9px 30px 8px 12px"
        alignItems="center"
        gap="10px"
        mb="4"
        flexDirection={{
          base: 'column',
          sm: 'inherit',
          lg: 'inherit',
          xl: 'inherit',
        }}
      >
        <Flex flexDirection="column">
          <Text as="h4">
            <Text color="#a0aec0" as="span" fontSize="16px" fontWeight="500">
              Pages
            </Text>
            <Text
              color="#1f2733"
              fontSize="16px"
              as="span"
              fontWeight="400"
              ml="5px"
            >
              / Dashboard
            </Text>
          </Text>
          <Heading fontSize="16px" color="#1f2733">
            Dashboard
          </Heading>
        </Flex>
        <Spacer />
        <Flex spacing="20px" alignItems="center" gap="3px">
          <InputGroup mr="-40px">
            <InputLeftElement
              display={{ base: 'none', sm: 'none', md: 'flex', lg: 'flex' }}
              pointerEvents="none"
              children={<Search2Icon color="gray.400" />}
            />
            <Input
              display={{ base: 'none', sm: 'none', md: 'flex', lg: 'flex' }}
              color="black"
              type="text"
              w="80%"
              placeholder="Type here..."
              bg="#fff"
              fontSize="14px"
              fontWeight="700"
              focusBorderColor="blue.500"
              border="1px solid #e2e8f0"
              borderRadius="16px"
              _hover={{ bg: 'gray.100' }}
              sx={{
                '::placeholder': {
                  color: 'gray.400',
                },
              }}
            />
          </InputGroup>
          <Icon as={FaUser} boxSize={6} color="gray.500" height="15px" />
          <Button colorScheme="#f7fafc" color="#718096" fontWeight="800">
            Sign In
          </Button>
          <IconButton
            aria-label="FaCog"
            icon={<FaCog />}
            color="#718096"
            bg="#f7fafc"
            size="md"
          />
          <IconButton
            aria-label="BellIcon"
            icon={<BellIcon />}
            bg="#f7fafc"
            color="#718096"
            size="lg"
          />
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}

export default Navbar;
