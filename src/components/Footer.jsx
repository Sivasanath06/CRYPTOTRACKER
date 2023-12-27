import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const avatarSrc = "https://media.licdn.com/dms/image/C4D03AQEzD8lpUOs7MA/profile-displayphoto-shrink_400_400/0/1664249773693?e=1676505600&v=beta&t=3dFrWCSW7LqbcW77e7GaeDJfHdHEeScQie6hDF0ypNA";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            Cryptocurrency Keeps Going, And Going, And Going...
          </Text>
        </VStack>

        <VStack>
          <Avatar boxSize={"28"} mt={["4", "0"]} src={avatarSrc} />
          <Text>Website Designer</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;