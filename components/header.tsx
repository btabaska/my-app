import { Box, LinkBox, LinkOverlay, Flex, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import Link from "next/link";

const Header = () => {
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

        <Box
          width="100px"
          height="50px"
          bg="gray.900"
          margin="20px"
          borderRadius="10px"
        >
          <Text color="white" marginY="10px" marginX="30px">
            Clear
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
