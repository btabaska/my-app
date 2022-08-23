import { Box } from "@chakra-ui/layout";

const PageLayout = ({ children }) => {
  return (
    <Box width="100%" height="100%">
      <Box bg="gray.900" paddingTop="20px">
        {children}
      </Box>
    </Box>
  );
};

export default PageLayout;
