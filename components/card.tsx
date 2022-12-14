import { Box, Flex, LinkBox, LinkOverlay, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import { useStoreState, useStoreActions } from "easy-peasy";
import Link from "next/link";
import { useEffect, useState } from "react";

const Card = ({ image, subtitle, title, description, roundImage, id }) => {
  const [BGColor, setBGColor] = useState("gray.900");
  // import state and action from easy-peasy
  const cards = useStoreState((state: any) => state.activeCards);
  const changeCards = useStoreActions((store: any) => store.changeActiveCards);
  // set up card color change onClick handler function
  const handleClick = () => {
    setBGColor("purple");
    changeCards([...cards, id]);
  };
  // useEffect triggers on render and when changes are made to the cards array when easyPeasy state updates
  useEffect(() => {
    if (cards) {
      if (cards.includes(id)) {
        setBGColor("purple");
      } else {
        setBGColor("gray.900");
      }
    }
  }, [cards, id]);

  return (
    <Flex
      justify="center"
      bg={BGColor}
      borderRadius="4px"
      marginX="20px"
      boxShadow="2xl"
      onClick={() => handleClick()}
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
        <Text fontSize="xs" fontWeight="bold" casing="uppercase">
          {description}
        </Text>
        <Text fontSize="xl">{title}</Text>
        <Text fontSize="xs">{subtitle || "NASA"}</Text>
      </Box>
    </Flex>
  );
};

export default Card;
