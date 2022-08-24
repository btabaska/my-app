import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { StoreProvider } from "easy-peasy";
import PageLayout from "../components/pageLayout";
import { store } from "../lib/store";

// theme is created and extended across app for easy color and link creation
// TODO: theme should be exported into its own lib page and imported here for readability
const theme = extendTheme({
  colors: {
    gray: {
      100: "#F5f5f5",
      200: "#EEEEEE",
      300: "#E0E0E0",
      400: "#BDBDBD",
      500: "#9E9E9E",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
    },
  },
  components: {
    Button: {
      variants: {
        link: {
          ":focus": {
            outline: "none",
            boxShadow: "none",
          },
        },
      },
    },
  },
});
// chakraprovider is wrapped to provide theme to all children
// store provider is wrapped for easy peasy to provide state and actions to children
// pageLayout is wrapped for children to receive base page formatting
const MyApp = ({ Component, pageProps }) => {
  const StoreProviderOverride = StoreProvider as any;
  return (
    <ChakraProvider theme={theme}>
      <StoreProviderOverride store={store}>
        <PageLayout>
          <Component {...pageProps} />
        </PageLayout>
      </StoreProviderOverride>
    </ChakraProvider>
  );
};

export default MyApp;
