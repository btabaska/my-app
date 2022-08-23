import { Box, LinkBox, LinkOverlay } from "@chakra-ui/layout";
import Link from "next/link";

const Header = () => {
  return (
    <Box width="100vw" height="100px" bg="gray.400">
      <LinkBox>
        <Link
          href={{
            pathname: `/`,
          }}
          passHref
        >
          <LinkOverlay>hi</LinkOverlay>
        </Link>
      </LinkBox>
    </Box>
  );
};

export default Header;
