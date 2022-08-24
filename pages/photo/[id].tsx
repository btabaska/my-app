import { Box, Flex, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";

import { formatDate } from "../../lib/formatters";

const Photo = ({ NASAPhoto }) => {
  return (
    <Flex
      justify="center"
      bg="gray.800"
      borderRadius="4px"
      marginX="20px"
      marginY="150px"
      boxShadow="2xl"
      height="100vh"
    >
      <Image
        boxSize="50vw"
        src={NASAPhoto.hdurl}
        alt="Test"
        fit="contain"
        borderRadius="3px"
        padding="10px"
      />

      <Box padding="20px" lineHeight="40px" color="white">
        <Text fontSize="xs" fontWeight="bold" casing="uppercase">
          {`${NASAPhoto.copyright} ${NASAPhoto.date}`}
        </Text>
        <Text fontSize="xl">{NASAPhoto.title}</Text>
        <Text fontSize="xs">{NASAPhoto.explanation}</Text>
      </Box>
    </Flex>
  );
};

export const getServerSideProps = async ({ query }) => {
  const res = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${formatDate(
      new Date(),
      8 - query.id
    )}`
  );
  const NASAPhoto = await res.json();

  // Pass data to the page via props
  return { props: { NASAPhoto } };
};
export default Photo;
