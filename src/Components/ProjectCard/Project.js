import React from 'react';
import './Projects.css';
import {
  Icon,
  Card,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Flex,
  Heading,
  Text,
  Box,
  Progress,
} from '@chakra-ui/react';
import {
  FaBell,
  FaHtml5,
  FaShoppingCart,
  FaCreditCard,
  FaLockOpen,
  FaClipboardList,
  FaCheckCircle,
  FaExclamationCircle,
  FaMobileAlt,
  FaMoneyBillAlt,
  FaDesktop,
} from 'react-icons/fa';

function Project() {
  const tasks = [
    {
      title: 'Purity UI Version',
      img: [
        'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/837306/pexels-photo-837306.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/769745/pexels-photo-769745.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?auto=compress&cs=tinysrgb&w=600',
      ],
      budget: '$14,000',
      completion: '60',
      icon: FaCheckCircle,
      progressValue: '60',
      color: 'green',
      bgcolor: '#fff',
    },
    {
      title: 'Add Progress Track',
      img: [
        'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?auto=compress&cs=tinysrgb&w=600',
      ],
      budget: '$3,000',
      completion: '10',
      icon: FaExclamationCircle,
      progressValue: '10',
      color: 'orange',
      bgcolor: '#fff',
    },
    {
      title: 'Fix Platform Errors',
      img: [
        'https://images.pexels.com/photos/837306/pexels-photo-837306.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=600',
      ],
      budget: 'Not set',
      completion: '100',
      icon: FaMoneyBillAlt,
      progressValue: '100',
      color: 'blue.400',
      bgcolor: 'blue.100',
    },
    {
      title: 'Launch our Mobile App',
      img: [
        'https://images.pexels.com/photos/837306/pexels-photo-837306.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/769745/pexels-photo-769745.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=600',
      ],
      budget: '$32,000',
      completion: '100',
      icon: FaMobileAlt,
      progressValue: '100',
      color: '#193154',
      bgcolor: '#fff',
    },
    {
      title: 'Add the New Pricing Page',
      img: [
        'https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/769745/pexels-photo-769745.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/837306/pexels-photo-837306.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600',
      ],
      budget: '$400',
      completion: '25',
      icon: FaShoppingCart,
      progressValue: '25',
      color: '#fff',
      bgcolor: '#4fd1c5',
    },
    {
      title: 'Redesign New Online Shop',
      img: [
        'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?auto=compress&cs=tinysrgb&w=600',
      ],
      budget: '$7,600',
      completion: '40',
      icon: FaDesktop,
      progressValue: '40',
      color: '#fff',
      bgcolor: 'red.300',
    },
  ];

  const notifications = [
    {
      id: 1,
      icon: FaBell,
      message: '$2400, Design changes',
      time: '22 DEC 7:20 PM',
      color: 'yellow.300',
    },
    {
      id: 2,
      icon: FaHtml5,
      message: 'New order #4219423',
      time: '21 DEC 9:28 PM',
      color: '#ffa500',
    },
    {
      id: 3,
      icon: FaShoppingCart,
      message: 'Server Payments for April',
      time: '21 DEC 9:28 PM',
      color: 'blue.400',
    },
    {
      id: 4,
      icon: FaCreditCard,
      message: 'New card added for order #3210145',
      time: '20 DEC 3:52 PM',
      color: '#f6ad55',
    },
    {
      id: 5,
      icon: FaLockOpen,
      message: 'Unlock packages for Development',
      time: '19 DEC 11:35 PM',
      color: 'purple.400',
    },
    {
      id: 6,
      icon: FaClipboardList,
      message: 'New order #9851258',
      time: '18 DEC 4:41 PM',
      color: 'red.400',
    },
  ];

  return (
    <Flex
      gap="5"
      mb="30px"
      flexDirection={{
        base: 'column',
        md: 'inherit',
      }}
    >
      <Card
        className="tableCard"
        as="table"
        bg="#fff"
        w={{ base: 'full', md: '500px', lg: '750px' }}
        p="16px"
        overflow="auto"
        borderRadius="15px"
        boxShadow="rgba(0, 0, 0, 0.02) 0px 3.5px 5.5px"
      >
        <Heading color="gray.700" fontSize="lg" fontWeight="bold">
          Projects
        </Heading>
        <Flex alignItems="center" my="2">
          <Text color="gray.400" fontWeight="bold" mr="2">
            30 done
          </Text>
          <Text color="gray.400" fontSize="sm" fontWeight="semibold">
            this month
          </Text>
        </Flex>
        <Table>
          <Thead>
            <Tr>
              <Th fontWeight="700" color="gray.400" fontSize="xs">
                Companies
              </Th>
              <Th fontWeight="700" color="gray.400" fontSize="xs">
                Members
              </Th>
              <Th fontWeight="700" color="gray.400" fontSize="xs">
                Budget
              </Th>
              <Th fontWeight="700" color="gray.400" fontSize="xs">
                Completion
              </Th>
            </Tr>
          </Thead>
          <Tbody color="black">
            {tasks.map(task => (
              <Tr key={task.title}>
                <Flex display="flex" alignItems="center">
                  <Icon
                    as={task.icon}
                    boxSize={6}
                    color={task.color}
                    fontSize="10px"
                    bg={task.bgcolor}
                    p="5px"
                    borderRadius="6px"
                  />
                  <Td
                    borderBottom="none"
                    whiteSpace="nowrap"
                    fontWeight="bold"
                    fontSize="md"
                    color="gray.700"
                  >
                    {task.title}
                  </Td>
                </Flex>

                <Td>
                  <Flex>
                    {task.img.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt={`Task`}
                        width="50"
                        height="50"
                        className="taskImg"
                      />
                    ))}
                  </Flex>
                </Td>
                <Td fontWeight="bold" fontSize="md" color="gray.700">
                  {task.budget}
                </Td>
                <Td color="#4fd1c5" borderBottom="none" fontWeight="500">
                  {task.completion}%
                  <Progress
                    color="#4fd1c5"
                    bg="gray.100"
                    value={task.progressValue}
                    h="5px"
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Card>
      <Card
        borderRadius="15px"
        bg="#fff"
        w={{ base: 'full', md: '500px', lg: '350px' }}
        p="20px 40px"
        boxShadow="rgba(0, 0, 0, 0.02) 0px 3.5px 5.5px"
      >
        <Heading color="gray.700" as="h4" fontSize="lg" fontWeight="bold">
          Orders Overview
        </Heading>
        <Flex alignItems="center" my="2">
          <Text color="green.400" fontWeight="bold">
            30%
          </Text>
          <Text color="gray.300" fontSize="sm" fontWeight="bold">
            this month
          </Text>
        </Flex>
        {notifications.map(notification => (
          <Flex
            key={notification.id}
            className="cardMain"
            display="flex"
            alignItems="flex-start"
          >
            <div className="cardLine"></div>
            <Icon
              className="cardIcons"
              as={notification.icon}
              boxSize={6}
              color={notification.color}
              fontSize="10px"
              bg="#fff"
              p="1px"
              mr="15px"
              borderRadius="6px"
            />
            <Box mb="8">
              <Text color="gray.700" fontWeight="bold">
                {notification.message}
              </Text>
              <Text color="gray.400" fontStyle="sm" fontWeight="bold">
                {notification.time}
              </Text>
            </Box>
          </Flex>
        ))}
      </Card>
    </Flex>
  );
}

export default Project;
