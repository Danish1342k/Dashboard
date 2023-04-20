import React from 'react';
import { Flex, Text, Icon, Box } from '@chakra-ui/react';

function Cards({ title, amount, percentage, icon }) {
  return (
    <Box
      bg="white"
      borderRadius="15px"
      p="5"
      boxShadow="rgba(0, 0, 0, 0.02) 0px 3.5px 5.5px"
    >
      <Flex direction="row" justify="space-between" align="center">
        <Flex direction="column">
          <Text fontSize="sm" color="gray.400" fontWeight="bold">
            {title}
          </Text>
          <Text fontSize="lg" fontWeight="semibold" color="gray.700">
            {amount}
            <Text
              as="span"
              fontSize="md"
              color={percentage.includes('-') ? 'red.400' : 'green.400'}
              fontWeight="bold"
            >
              {percentage}
            </Text>
          </Text>
        </Flex>
        <Flex align="center">
          <Icon
            as={icon}
            bg="teal.300"
            color="#fff"
            borderRadius="12px"
            p="13px"
            h="45px"
            w="45px"
          />
        </Flex>
      </Flex>
    </Box>
  );
}

export default Cards;
