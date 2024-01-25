/* eslint-disable react/prop-types */
import { Box, Container } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

export default function DefaultLayout () {
    return (
        <Box bg="gray.50" minH="100dvh" py="2">
            <Container maxW="4xl">
                <Outlet />
            </Container>
        </Box>
    );
}