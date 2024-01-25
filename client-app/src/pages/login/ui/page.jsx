import { Text } from '@chakra-ui/react'

import { Head } from "@/shared/ui/head";
import { BRAND_NAME } from "@/shared/constants";

export default function Login () {
    return (
        <>
            <Head>
                <title>Login | {BRAND_NAME}</title>
            </Head>
            <Text>Login page</Text>
        </>
    );
}