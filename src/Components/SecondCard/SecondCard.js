import React from 'react';
import { Box, Flex, Text, Button, Card } from '@chakra-ui/react';

function BigCard() {
  return (
    <Flex
      as="chakraCard"
      gap="1rem"
      flexDirection={{
        base: 'column',
        sm: 'column',
        lg: 'inherit',
        xl: 'inherit',
      }}
    >
      <Box
        bg="white"
        borderRadius="15px"
        p="22px"
        mb="20px"
        h={{ base: '600px', sm: 'full', md: 'full', lg: '300px' }}
        width={{ base: 'full', sm: 'full', md: 'full', lg: '650px' }}
      >
        <Flex
          gap="12"
          direction="row"
          justify="space-between"
          align="center"
          flexDirection={{
            base: 'column',
            sm: 'inherit',
            md: 'inherit',
            lg: 'inherit',
          }}
        >
          <Flex direction="column">
            <Text fontSize="lg" fontWeight="500" mb="4" color="#a0aec0">
              Built by Developers
            </Text>
            <Text fontSize="md" mb="4" color="black" fontWeight="900">
              Purity UI Dashboard
            </Text>
            <Text
              mb={{ base: '10px', lg: '20px' }}
              color="#a0aec0"
              fontSize="14px"
            >
              From colors, cards, typography to complex elements, you will find
              the full documentation.
            </Text>
            <Button
              colorScheme="#fff"
              justifyContent="flex-start"
              p="0"
              mt="10"
            >
              <Text>Read more</Text>
              <Box
                as="svg"
                height="1em"
                width="1em"
                ml="1"
                viewBox="0 0 16 16"
                focusable="false"
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                ></path>
              </Box>
            </Button>
          </Flex>
          <Flex
            align="center"
            bg="#4fd1c5"
            width="250px"
            height="250px"
            display="flex"
            p="0px 30px"
            borderRadius="15px"
          >
            <svg
              width="163"
              height="43"
              bg="gray"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M63.452 19.292c2.877 0 4.16 1.911 4.587 3.623l4.043-1.513c-.777-3.106-3.576-6.371-8.668-6.371-5.443 0-9.68 4.3-9.68 10.274 0 5.893 4.237 10.313 9.796 10.313 4.976 0 7.813-3.305 8.707-6.331l-3.965-1.473c-.427 1.473-1.788 3.583-4.742 3.583-2.837 0-5.286-2.19-5.286-6.092 0-3.903 2.449-6.013 5.208-6.013zM79.196 23.632c.078-2.469 1.438-4.38 3.926-4.38 2.838 0 3.887 1.911 3.887 4.3v11.47h4.51V22.755c0-4.26-2.255-7.685-6.92-7.685-1.982 0-4.12.716-5.403 2.429V6.19h-4.509v28.831h4.51V23.632zM94.287 29.765c0 3.066 2.449 5.853 6.414 5.853 3.071 0 4.936-1.592 5.83-3.066 0 1.553.156 2.35.195 2.47h4.198c-.039-.2-.233-1.355-.233-3.107v-9.637c0-3.862-2.216-7.247-8.047-7.247-4.664 0-7.619 2.986-7.968 6.332l4.12.955c.194-1.951 1.516-3.504 3.887-3.504 2.488 0 3.576 1.314 3.576 2.947 0 .677-.311 1.234-1.399 1.393l-4.859.757c-3.226.478-5.714 2.39-5.714 5.854zm7.269 2.23c-1.788 0-2.76-1.195-2.76-2.509 0-1.593 1.127-2.39 2.527-2.628l4.936-.757v.876c0 3.783-2.176 5.018-4.703 5.018zM132.312 15.628h-5.986l-7.269 7.845V6.191h-4.47v28.83h4.47v-5.416l2.332-2.508 5.559 7.924h5.52l-7.93-11.19 7.774-8.203zM145.254 15.509a6.3 6.3 0 00-1.205-.12c-2.487 0-4.587 1.235-5.481 3.345v-3.106h-4.392v19.393h4.509v-9.238c0-3.624 1.594-5.695 5.092-5.695.467 0 .972.04 1.477.12v-4.7zM146.335 29.765c0 3.066 2.449 5.853 6.414 5.853 3.071 0 4.937-1.592 5.831-3.066 0 1.553.156 2.35.194 2.47h4.199c-.039-.2-.234-1.355-.234-3.107v-9.637c0-3.862-2.215-7.247-8.046-7.247-4.665 0-7.619 2.986-7.969 6.332l4.121.955c.194-1.951 1.516-3.504 3.887-3.504 2.488 0 3.576 1.314 3.576 2.947 0 .677-.311 1.234-1.399 1.393l-4.859.757c-3.227.478-5.715 2.39-5.715 5.854zm7.269 2.23c-1.788 0-2.759-1.195-2.759-2.509 0-1.593 1.127-2.39 2.526-2.628l4.937-.757v.876c0 3.783-2.177 5.018-4.704 5.018zM41.975 21.5C41.975 9.626 32.578 0 20.987 0 9.398 0 0 9.626 0 21.5S9.396 43 20.988 43c11.59 0 20.987-9.626 20.987-21.5z"
                fill="#fff"
              />
              <path
                d="M11.36 22.418L25.668 7.863c.267-.272.697.06.517.398l-5.325 9.997c-.119.223.039.495.287.495h9.202c.296 0 .44.372.223.58L14.446 34.748c-.29.277-.72-.113-.488-.44l7.633-10.788c.157-.221.003-.531-.264-.531H11.59c-.292 0-.437-.362-.23-.572z"
                fill="#3BCBBE"
              />
            </svg>
          </Flex>
        </Flex>
      </Box>
      <Card
        p="4"
        borderRadius="15px"
        bg="#fff"
        h="300px"
        mb="20px"
        width={{ base: 'full', sm: 'full', md: 'full', lg: '400px' }}
        boxShadow="none"
      >
        <Box
          bg="url('https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=600')"
          bgSize="cover"
          bgPosition="center"
          p="20px 10px"
          d="flex"
          h="270px"
          justifyContent="flex-start"
          alignItems="center"
          borderRadius="15px"
        >
          <Box maxWidth="300px" ml="8">
            <Text fontWeight="bold" mb="4" fontSize="20px" color="#fff">
              Work with the rockets
            </Text>
            <Text mb="4" fontSize="14px" fontWeight="500" color="#fff">
              Wealth creation is a revolutionary recent positive-sum game. It is
              all about who takes the opportunity first.
            </Text>
            <Button colorScheme="transparent" color="#fff" p="0" mt="3rem">
              <Text>Read more</Text>
              <Box
                as="svg"
                height="1em"
                width="1em"
                ml="1"
                viewBox="0 0 16 16"
                focusable="false"
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                ></path>
              </Box>
            </Button>
          </Box>
        </Box>
      </Card>
    </Flex>
  );
}

export default BigCard;
