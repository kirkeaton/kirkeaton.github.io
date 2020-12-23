import { ChakraProvider } from '@chakra-ui/react';

export const App = ({ Component, pageProps }) => (
  <ChakraProvider>
    <Component {...pageProps} />
  </ChakraProvider>
);

export default App;
