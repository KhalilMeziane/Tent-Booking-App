import { Box, Button, Container, HStack, Heading } from "@chakra-ui/react";

import { BRAND_NAME } from "@/shared/constants";

export default function Header () {
    return (
        <Box bg="white" py="3" shadow="sm">
            <Container maxW="4xl">
                <HStack justifyContent="space-between">
                    <Heading as="h1" fontSize="xl">{BRAND_NAME}</Heading>
                    <Button variant="outline" colorScheme="gray">Logout</Button>
                </HStack>
            </Container>
        </Box>
    )
}
