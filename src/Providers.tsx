import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
};

const Providers = ({ children }: Props) => {
  return <ChakraProvider>{children}</ChakraProvider>;
};

export default Providers;
