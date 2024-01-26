import { Box } from "@chakra-ui/react";

import { Head } from "@/shared/ui/head";
import { BRAND_NAME } from "@/shared/constants";
import { UploadTents, Header, BookingList } from './widgets';

export default function Tent () {
    return (
        <>
            <Head>
                <title>Tent | {BRAND_NAME}</title>
            </Head>
            <Header />
            <Box as="main" py="2">
                <UploadTents />
                <BookingList />
            </Box>
        </>
    );
}