import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { LineChart, Line, CartesianGrid, Legend } from 'recharts';
import { Box, Flex, Text, Card } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';
import { FaShoppingCart, FaRocket, FaChartPie, FaWallet } from 'react-icons/fa';
import { Progress } from '@chakra-ui/react';

function UserCards() {
  const data = [
    { name: 'Jan', uv: 4000 },
    { name: 'Feb', uv: 3000 },
    { name: 'Mar', uv: 5000 },
    { name: 'Apr', uv: 7000 },
    { name: 'May', uv: 8000 },
    { name: 'Jun', uv: 6000 },
  ];

  const Data = [
    { month: 'January', value: 400 },
    { month: 'February', value: 300 },
    { month: 'March', value: 500 },
    { month: 'April', value: 200 },
    { month: 'May', value: 600 },
    { month: 'June', value: 400 },
  ];
  return (
    <Flex
      gap="5"
      flexDirection={{
        base: 'column',
        sm: 'column',
        md: 'inherit',
        lg: 'inherit',
        xl: 'inherit',
      }}
    >
      <Card
        as="pieChart"
        overflow="auto"
        bg="#fff"
        w={{ base: 'full', sm: 'full', md: 'full', lg: '450px' }}
        p="20px"
        mb="20px"
        boxShadow="none"
      >
        <Box w="100%" h="300px">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="uv" fill="#4fd1c5" barSize={5} />
            </BarChart>
          </ResponsiveContainer>
        </Box>
        <Box d="flex" alignItems="center" fontSize="sm">
          <Box>
            <Text color="black" fontWeight="700">
              Active Users
            </Text>
            <Flex>
              <Text color="#6dc994" fontWeight="500">
                +23%
              </Text>
              <Text color="gray.500" fontSize="sm" fontWeight="500">
                than last week
              </Text>
            </Flex>
          </Box>
          <Flex gap="10">
            <Box>
              <Flex align="center">
                <Icon
                  as={FaWallet}
                  boxSize={6}
                  color="#fff"
                  fontSize="10px"
                  bg="#4fd1c5"
                  p="5px"
                  borderRadius="6px"
                />
                <Box as="p" fontSize="sm" mt={1} color="gray.500">
                  Users
                </Box>
              </Flex>
              <Text color="Black">32,984</Text>
              <Progress color="#4fd1c5" value={50} />
            </Box>
            <Box>
              <Flex align="center">
                <Icon
                  as={FaRocket}
                  boxSize={6}
                  color="#fff"
                  fontSize="10px"
                  bg="#4fd1c5"
                  p="5px"
                  borderRadius="6px"
                />
                <Box as="p" fontSize="sm" mt={1} color="gray.500">
                  Click
                </Box>
              </Flex>
              <Text color="Black">2.42m</Text>
              <Progress color="#4fd1c5" value={20} />
            </Box>
            <Box>
              <Flex alignItems="center">
                <Icon
                  as={FaShoppingCart}
                  boxSize={6}
                  color="#fff"
                  fontSize="10px"
                  bg="#4fd1c5"
                  p="5px"
                  borderRadius="6px"
                />
                <Box as="p" fontSize="sm" mt={1} color="gray.500">
                  Sales
                </Box>
              </Flex>
              <Text color="Black">2,400$</Text>
              <Progress color="#4fd1c5" value={25} />
            </Box>
            <Box>
              <Flex alignItems="center">
                <Icon
                  as={FaChartPie}
                  boxSize={6}
                  color="#fff"
                  fontSize="10px"
                  bg="#4fd1c5"
                  p="5px"
                  borderRadius="6px"
                />
                <Box as="p" fontSize="sm" mt={1} color="gray.500">
                  Items
                </Box>
              </Flex>
              <Text color="Black">320</Text>
              <Progress color="#4fd1c5" value={45} />
            </Box>
          </Flex>
        </Box>
      </Card>
      <Card
        as="pieChart"
        bg="#fff"
        w={{ base: 'full', sm: 'full', md: 'full', lg: '600px' }}
        p="20px"
        mb="20px"
        boxShadow="none"
      >
        <Box mt={5} overflow={{ base: 'auto', md: 'auto', lg: 'hidden' }}>
          <Box>
            <Text color="black" fontWeight="700" fontSize="20px">
              Sales Overview
            </Text>
            <Flex alignItems="center" my="2">
              <Text color="#6dc994" fontWeight="500">
                5% more
              </Text>
              <Text color="gray.500" fontSize="sm" fontWeight="500">
                in2021
              </Text>
            </Flex>
          </Box>
          <LineChart width={460} height={350} data={Data}>
            <XAxis dataKey="month" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </Box>
      </Card>
    </Flex>
  );
}

export default UserCards;
