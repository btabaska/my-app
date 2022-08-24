import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { StoreProvider } from "easy-peasy";
import PageLayout from "../components/pageLayout";
import { store } from "../lib/store";

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
