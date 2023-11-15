import { Heading, HStack, Image, Text, VStack, } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
   return (
    <VStack bg="white" spacing={5} borderRadius={15} align="left" >
      <HStack>
      <Image src={imageSrc} borderRadius={15}></Image>
      </HStack>     
      <Heading as="h4" size="md" color="black" paddingX={25}>{title}</Heading>
      <Text size="l" color="grey" paddingX={25} >{description}</Text>
      <HStack>
        <Text fontSize="x" color="black" paddingX={25} paddingBottom={25}>See more <FontAwesomeIcon icon={faArrowRight} size="1x" /></Text>
        
      </HStack>
    </VStack>
   );
};

export default Card;