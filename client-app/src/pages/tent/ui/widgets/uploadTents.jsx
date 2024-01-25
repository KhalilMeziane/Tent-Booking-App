import { Container, Flex, Icon, Text, VStack } from "@chakra-ui/react";
import { IoCloudUploadOutline } from "react-icons/io5";

export default function UploadTents() {
    return (
        <Container maxW="4xl" my="8">
            <Flex
                h="96"
                w="100%"
                p="4"
                border="2px"
                borderColor="gray.300"
                borderStyle="dashed"
                align="center"
                justify="center"
                bg="gray.50"
                rounded="md"
            >
                <VStack>
                    <Icon boxSize="12" color="gray.700" as={IoCloudUploadOutline} />
                    <Text fontSize="lg">Drag and Drop your csv file here</Text>
                    <Text color="blue.500">or click to browse from your computer</Text>
                </VStack>
            </Flex>
        </Container>
    );
}
