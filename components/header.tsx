import { Box, LinkBox, LinkOverlay, Flex, Text } from "@chakra-ui/layout";
import { Image, Button } from "@chakra-ui/react";
import { useStoreActions, useStoreState } from "easy-peasy";
import Link from "next/link";

const Header = () => {
  //  Import state and actions from easy peasy for use within clear button
  const changeCards = useStoreActions((store: any) => store.changeActiveCards);
  const cards = useStoreState((state: any) => state.activeCards);
  // set up click handler for Clear button
  const handleClick = () => {
    // set changeCards to empty array to clear state of colored cards
    changeCards([]);
  };

  // TODO: Move back button onto cards instead of having it always sitting in the header.
  return (
    <Box width="100vw" height="100px" bg="gray.400">
      <Flex justifyContent="space-between">
        <LinkBox
          width="100px"
          height="50px"
          bg="gray.900"
          margin="20px"
          borderRadius="10px"
        >
          <Link
            href={{
              pathname: `/`,
            }}
            passHref
          >
            <LinkOverlay>
              <Text color="white" marginY="10px" marginX="30px">
                Back
              </Text>
            </LinkOverlay>
          </Link>
        </LinkBox>

        <Image src="https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg" />

        <Box width="100px" height="50px" margin="20px" borderRadius="10px">
          <Button onClick={() => handleClick()} colorScheme="blue">
            clear
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
