/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { useState } from "react";

import {
    Container,
    Flex,
    Icon,
    Input,
    Text,
    VStack,
    Spinner,
    Button,
    HStack,
} from "@chakra-ui/react";
import { IoCloudUploadOutline } from "react-icons/io5";
import Cookies from "js-cookie";

import { Alert } from "@/shared/ui/alert";

export default function UploadTents({ postBookings, loading, error }) {
    const [file, setFile] = useState(null);

    const handelFile = (e) => {
        if (!e.target.files[0].name.match(/\.(csv)$/)){
            return false;
        }
        setFile(e.target.files[0]);
    };

    const handleDrop = (event) => {
        event.preventDefault();
        if (!event.dataTransfer.files[0].name.match(/\.(csv)$/)){
            return false;
        }
        setFile(event.dataTransfer.files[0]);
    };

    const handelReupload = () => {
        setFile(null);
    };

    const handelUpload = async () => {
        try {
            const formData = new FormData();
            formData.append("booking", file);
            const headers = {
                "content-type": "multipart/form-data",
                Authorization: `Bearer ${Cookies.get("accessToken")}`,
            };
            await postBookings("/tent", formData, { headers });
        } catch (error) {
            console.log("error: ", error);
        }
    };

    return (
        <Container maxW="4xl" py="2">
            {error ? (
                <Alert
                    error={error}
                />
            ) : null}
            <Input
                type="file"
                hidden
                onChange={handelFile}
                id="bookings"
                accept="text/csv"
            />
            <Flex
                as="label"
                htmlFor="bookings"
                h="36"
                cursor="pointer"
                w="100%"
                p="4"
                border="2px"
                borderColor={file ? "blue.300" : "gray.300"}
                borderStyle="dashed"
                align="center"
                justify="center"
                bg={file ? "blue.50" : "gray.50"}
                rounded="md"
                opacity={loading ? 0.7 : 1}
                pointerEvents={loading ? "none" : "auto"}
                onDrop={handleDrop}
                onDragOver={(event) => event.preventDefault()}
            >
                {file && !loading ? (
                    <UploadedFile
                        file={file}
                        handelUpload={handelUpload}
                        handelReupload={handelReupload}
                    />
                ) : null}
                {!file ? <EmptyUpload /> : null}
                {loading && file ? <Spinner color="blue" size="lg" /> : null}
            </Flex>
        </Container>
    );
}

const EmptyUpload = () => {
    return (
        <VStack>
            <Icon boxSize="12" color="gray.700" as={IoCloudUploadOutline} />
            <Text fontSize="md">Drag and Drop your csv file here</Text>
            <Text color="blue.500">or click to browse from your computer</Text>
        </VStack>
    );
};

const UploadedFile = ({ file, handelUpload, handelReupload }) => {
    return (
        <VStack>
            <Text>{file.name}</Text>
            <HStack>
                <Button onClick={handelUpload} colorScheme="blue">
                    Upload
                </Button>
                <Button
                    onClick={handelReupload}
                    colorScheme="blue"
                    variant="outline"
                >
                    Reset
                </Button>
            </HStack>
        </VStack>
    );
};
