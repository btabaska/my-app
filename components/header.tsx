import { Box, LinkBox, LinkOverlay } from "@chakra-ui/layout";
import NextLink from "next/link";

const Header = () => {
  return (
    <Box width="100vw" height="100px" bg="gray.400">
      <LinkBox>
        <NextLink
          href={{
            pathname: `/`,
          }}
          passHref
        >
          <LinkOverlay>hi</LinkOverlay>
        </NextLink>
      </LinkBox>
    </Box>
  );
};

export default Header;
