import React from 'react';
import { Flex, Text, Icon, Box } from '@chakra-ui/react';

function Cards({ title, amount, percentage, icon }) {
  return (
    <Box bg="white" borderRadius="15px" p="22px" mb="20px">
      <Flex direction="row" justify="space-between" align="center">
        <Flex direction="column">
          <Text fontSize="18px" color="#a0aec0" fontWeight="600">
            {title}
          </Text>
          <Text fontSize="18px" fontWeight="700" color="black">
            {amount}
            <Text as="span" fontSize="18px" color="#6dc994">
              {percentage}
            </Text>
          </Text>
        </Flex>
        <Flex align="center">
          <Icon
            as={icon}
            fontSize="40px"
            bg="#4fd1c5"
            color="#fff"
            p="10px"
            borderRadius="6px"
          />
        </Flex>
      </Flex>
    </Box>
  );
}

export default Cards;
