import { Text } from '@chakra-ui/react'

import { Head } from "@/shared/ui/head";
import { BRAND_NAME } from "@/shared/constants";

export default function Tent () {
    return (
        <>
            <Head>
                <title>Tent | {BRAND_NAME}</title>
            </Head>
            <Text>Tent page</Text>
        </>
    );
}