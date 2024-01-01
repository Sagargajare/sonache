import {
  Box,
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerContent,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface Props {
  onClose: () => void;
  isOpen: boolean;
  variant: string | undefined;
}
const SideBarLinks = [
  { name: "Home", path: "/" },
  { name: "Local Validator", path: "/validator" },
  { name: "Contact", path: "/contact" },
];

const SidebarContent = () => (
  <VStack gap={2} p="2">
    {SideBarLinks.map((link) => (
      <Box
        as={Link}
        to={link.path}
        bg="gray.100"
        _hover={{
          outline: "1px",
          outlineStyle: "solid",
          outlineColor: "#646cff",
          textColor: "#646cff",
        }}
        borderRadius={"md"}
        m="2"
        key={link.name}
        w="full"
        p="2"
        py="4"
      >
        {link.name}
      </Box>
    ))}
  </VStack>
);

const Sidebar = ({ isOpen, variant, onClose }: Props) => {
  return variant === "sidebar" ? (
    <Box
      position="fixed"
      left={0}
      px="0"
      py={5}
      w="200px"
      top={0}
      h="100%"
      bg="#dfdfdf"
    >
      <SidebarContent />
    </Box>
  ) : (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Chakra-UI</DrawerHeader>
          <DrawerBody>
            <SidebarContent />
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default Sidebar;
