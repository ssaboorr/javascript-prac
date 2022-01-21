import App from "./App";
import ReactDom from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";

ReactDom.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>,

  document.querySelector("#root")
);
