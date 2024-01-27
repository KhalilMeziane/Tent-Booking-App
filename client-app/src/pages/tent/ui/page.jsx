import { Box } from "@chakra-ui/react";

import { Head } from "@/shared/ui/head";
import { BRAND_NAME } from "@/shared/constants";
import { usePost } from "@/shared/hooks";
import { UploadTents, Header, BookingList, EmptyPreview } from './widgets';

export default function Tent () {
    const [postBookings, { error, loading, data }] = usePost();
    return (
        <>
            <Head>
                <title>Tent | {BRAND_NAME}</title>
            </Head>
            <Header />
            <Box as="main" py="2">
                <UploadTents postBookings={postBookings} loading={loading} error={error} />
                {
                    !loading && !error && data ? <BookingList bookings={data.data} /> : <EmptyPreview />
                }
            </Box>
        </>
    );
}