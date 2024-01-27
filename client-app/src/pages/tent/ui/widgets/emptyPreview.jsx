import { Container, Flex, Icon, Text, VStack } from "@chakra-ui/react";
import { LuTent } from "react-icons/lu";

export default function EmptyPreview() {
    return (
        <Container maxW="4xl" py="2">
            <Flex
                h="48"
                w="100%"
                p="44"
                align="center"
                justify="center"
                bg="gray.50"
                rounded="md"
                border="1px"
                borderColor="gray.200"
            >
                <VStack>
                    <Icon boxSize="10" as={LuTent} />
                    <Text>No Tents Yet!</Text>
                </VStack>
            </Flex>
        </Container>
    );
}
