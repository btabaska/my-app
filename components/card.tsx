import { Box, Flex, LinkBox, LinkOverlay, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import Link from "next/link";
import { useState, useLayoutEffect, useEffect } from "react";

const Card = ({ image, subtitle, title, description, roundImage, id }) => {
  const [clicked, setClicked] = useState(false);

  useLayoutEffect(() => {
    if (sessionStorage.getItem("state")) {
      setClicked(sessionStorage.getItem("state") === "true");
    } else {
      sessionStorage.setItem("state", clicked.toString());
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem("state", clicked.toString());
  }, [clicked]);
  return (
    <Flex
      justify="center"
      bg={clicked ? "purple" : "gray.800"}
      borderRadius="4px"
      marginX="20px"
      boxShadow="2xl"
    >
      <Box padding="20px" boxShadow="2xl">
        <LinkBox>
          <Link
            href={{
              pathname: `/photo/[id]`,
              query: { id },
            }}
            passHref
          >
            <LinkOverlay>
              <Image
                boxSize="250px"
                src={image}
                alt={title}
                fit="contain"
                borderRadius={roundImage ? "100%" : "3px"}
              />
            </LinkOverlay>
          </Link>
        </LinkBox>
      </Box>
      <Box padding="20px" lineHeight="40px" color="white">
        <Text
          fontSize="xs"
          fontWeight="bold"
          casing="uppercase"
          onClick={() => {
            setClicked(!clicked);
          }}
        >
          {description}
        </Text>
        <Text fontSize="xl">{title}</Text>
        <Text fontSize="xs">{subtitle || "NASA"}</Text>
      </Box>
    </Flex>
  );
};

export default Card;
