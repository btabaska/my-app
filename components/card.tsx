import { Box, Flex, LinkBox, LinkOverlay, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import NextLink from "next/link";

const Card = ({ image, subtitle, title, description, roundImage, id }) => {
  return (
    <Flex
      justify="center"
      bg="gray.800"
      borderRadius="4px"
      marginX="20px"
      boxShadow="2xl"
    >
      <LinkBox>
        <Box padding="20px" boxShadow="2xl">
          <Image
            boxSize="250px"
            src={image}
            alt={title}
            fit="contain"
            borderRadius={roundImage ? "100%" : "3px"}
          />
        </Box>
        <Box padding="20px" lineHeight="40px" color="white">
          <Text fontSize="xs" fontWeight="bold" casing="uppercase">
            {description}
          </Text>
          <Text fontSize="xl">{title}</Text>
          <Text fontSize="xs">{subtitle || "NASA"}</Text>
        </Box>
        <NextLink
          href={{
            pathname: `/photo/[id]`,
            query: { id },
          }}
          passHref
        >
          <LinkOverlay>{title}</LinkOverlay>
        </NextLink>
      </LinkBox>
    </Flex>
  );
};

export default Card;
