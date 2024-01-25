import { Flex, Heading, VStack } from '@chakra-ui/react'

import { Head } from "@/shared/ui/head";
import { BRAND_NAME } from "@/shared/constants";
import { LoginForm } from './widgets/form';

export default function Login () {
    return (
        <>
            <Head>
                <title>Login | {BRAND_NAME}</title>
            </Head>
            <Flex
                as="main"
                minH={"100vh"}
                align={"center"}
                justify={"center"}
                bg="gray.100"
            >
                <VStack
                    w={{ base: "100%", lg: "40%", xl: "30%" }}
                    p="5"
                    bg="white"
                    rounded="md"
                >
                    <Heading as="h1" fontSize="xl">{BRAND_NAME}</Heading>
                    <LoginForm />
                </VStack>   
            </Flex>
        </>
    );
}