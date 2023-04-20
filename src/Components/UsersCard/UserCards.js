import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import { Box, Flex, Text, Card } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';
import { FaShoppingCart, FaRocket, FaChartPie, FaWallet } from 'react-icons/fa';
import { Progress } from '@chakra-ui/react';
import LineChart from './LineChart';

function UserCards() {
  const bardata = [
    {
      icon: FaWallet,
      label: 'Users',
      value: '32,984',
      progressValue: 50,
    },
    {
      icon: FaRocket,
      label: 'Click',
      value: '2.42m',
      progressValue: 20,
    },
    {
      icon: FaShoppingCart,
      label: 'Sales',
      value: '2,400$',
      progressValue: 25,
    },
    {
      icon: FaChartPie,
      label: 'Items',
      value: '320',
      progressValue: 45,
    },
  ];

  const data = [
    { name: 'Jan', uv: 4000 },
    { name: 'Feb', uv: 3000 },
    { name: 'Mar', uv: 5000 },
    { name: 'Apr', uv: 7000 },
    { name: 'May', uv: 8000 },
    { name: 'Jun', uv: 6000 },
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
        w={{ base: 'full', md: 'full', lg: '500px' }}
        h={{ base: 'full', md: 'full', lg: '608px' }}
        p="4"
        mb="20px"
        boxShadow="rgba(0, 0, 0, 0.02) 0px 3.5px 5.5px"
        borderRadius="15px"
      >
        <Box w="100%" h="400px">
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={data} barSize={25}>
              <XAxis
                dataKey="name"
                tick={{ fontSize: 16, fontWeight: 'bold' }}
              />
              <YAxis tick={{ fontSize: 16, fontWeight: 'bold' }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fff',
                  border: 'none',
                  borderRadius: '5px',
                }}
              />
              <Bar
                dataKey="uv"
                fill="#4fd1c5"
                radius={[10, 10, 0, 0]}
                label={{ position: 'top', fill: '#666' }}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={index % 2 === 0 ? '#4fd1c5' : '#e6e6e6'}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </Box>

        <Box d="flex" alignItems="center" fontSize="sm">
          <Box my="6">
            <Text color="gray.700" fontSize="lg" mb="6px" fontWeight="bold">
              Active Users
            </Text>
            <Flex>
              <Text color="green.400" fontWeight="bold">
                +23%
              </Text>
              <Text color="gray.400" fontSize="md" fontWeight="medium">
                than last week
              </Text>
            </Flex>
          </Box>
          <Flex display="flex" justifyContent="space-between">
            {bardata.map((item, index) => (
              <Box key={index}>
                <Flex align="center">
                  <Icon
                    as={item.icon}
                    boxSize={6}
                    color="#fff"
                    bg="#4fd1c5"
                    w="30px"
                    h="30px"
                    p="8px"
                    mr="6px"
                    borderRadius="6px"
                  />
                  <Box
                    as="p"
                    fontSize="sm"
                    mt={1}
                    color="gray.400"
                    fontWeight="semibold"
                  >
                    {item.label}
                  </Box>
                </Flex>
                <Text color="gray.700" fontSize="md" my="6px" fontWeight="bold">
                  {item.value}
                </Text>
                <Progress
                  // colorScheme="teal.500"
                  color="#319795"
                  borderRadius="12px"
                  h="5px"
                  bg="gray.100"
                  value={item.progressValue}
                />
              </Box>
            ))}
          </Flex>
        </Box>
      </Card>
      <Card
        as="pieChart"
        bg="#fff"
        w={{ base: 'full', md: 'full', lg: '550px' }}
        h={{ base: 'full', md: 'full', lg: '608px' }}
        p="20px"
        mb="20px"
        color="gray.700"
        boxShadow="rgba(0, 0, 0, 0.02) 0px 3.5px 5.5px"
        borderRadius="15px"
      >
        <LineChart />
      </Card>
    </Flex>
  );
}

export default UserCards;
