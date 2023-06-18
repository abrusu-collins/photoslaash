import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ChakraProvider } from '@chakra-ui/react'
import "../styles/index.css";

export default function App({ Component, pageProps }) {
  return (
    <>
    <ChakraProvider>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      </ChakraProvider>
    </>
  );
}
