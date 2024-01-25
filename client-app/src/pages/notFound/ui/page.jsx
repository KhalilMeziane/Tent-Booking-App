import { Flex, Stack, Heading, Text } from '@chakra-ui/react'

import { Head } from '@/shared/ui/head'
import { BRAND_NAME } from "@/shared/constants"
import { Link } from 'react-router-dom'

export default function NotFound () {
    return (
        <>
            <Head>
                <title>{BRAND_NAME} | Not Found</title>
            </Head>
            <Flex
                as="main"
                minH={'100vh'}
                align={'center'}
                justify={'center'}
            >
                <Stack align={'center'} spacing={4} mx={'auto'} maxW={'xl'} py={12} px={6}>
                    <Heading fontSize={'3xl'} textAlign={'center'}>
                        Page Not Found
                    </Heading>
                    <Text color="blue.500" textDecor="underline" as={Link} to="/tents" fontSize={'xl'} fontWeight="semibold" textAlign={'center'}>Home</Text>
                </Stack>
            </Flex>
        </>
    )
}