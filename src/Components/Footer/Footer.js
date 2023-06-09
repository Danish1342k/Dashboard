import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

function Footer() {
  return (
    <Flex w="full" color="#adb9c9" display="flex" justifyContent="center">
      <Flex
        flexDirection={{ base: 'column', md: 'inherit' }}
        alignItems="center"
      >
        © 2023, Made with ❤️ by
        <Text ml="5px" color="blue.400" fontWeight="600">
          Danish shaikh.
        </Text>
      </Flex>
    </Flex>
  );
}
export default Footer;
