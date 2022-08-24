import { Box } from "@chakra-ui/layout";
import Header from "./header";

// This is just used to create a box to hold main page elements and control their space on page
const PageLayout = ({ children }) => {
  return (
    <Box width="100%" height="100%" bg="gray.900">
      <Box width="250px">
        <Header />
      </Box>
      <Box marginTop="20px">{children}</Box>
    </Box>
  );
};

export default PageLayout;
