import { Box, Button, Container, HStack, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import { BRAND_NAME } from "@/shared/constants";

export default function Header () {
    const navigate = useNavigate();
    const HandelLogout = () => {
        Cookies.remove("accessToken");
        navigate("/");
    }
    return (
        <Box bg="white" py="3" shadow="sm">
            <Container maxW="4xl">
                <HStack justifyContent="space-between">
                    <Heading as="h1" fontSize="xl">{BRAND_NAME}</Heading>
                    <Button variant="outline" colorScheme="gray" onClick={HandelLogout}>Logout</Button>
                </HStack>
            </Container>
        </Box>
    )
}
