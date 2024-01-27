import { Box } from "@chakra-ui/react";

import { Head } from "@/shared/ui/head";
import { BRAND_NAME } from "@/shared/constants";
import { usePost } from "@/shared/hooks";
import { Alert } from "@/shared/ui/alert";
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
                {
                    error ? <Alert error={error} message="There was an error processing your request" /> : null
                }
                <UploadTents postBookings={postBookings} data={data} loading={loading} error={error} />
                {
                    data && !loading ? <BookingList bookings={data} /> : <EmptyPreview />
                }
            </Box>
        </>
    );
}