/* eslint-disable react/prop-types */
import {
    Box,
    Container,
    Grid,
    GridItem,
    HStack,
    Heading,
    Icon,
    Text,
    VStack,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
} from "@chakra-ui/react";
import { PiTentThin } from "react-icons/pi";
import { FiUser, FiUsers } from "react-icons/fi";

export default function BookingList () {
    return (
        <Container maxW="4xl" py="2">
            <Grid
                templateColumns={{
                    base: "repeat(1, 1fr)",
                    md: "repeat(2, 1fr)",
                    lg: "repeat(3, 1fr)",
                }}
                gap={4}
            >
                <GridItem w="100%">
                    <StatsSimpleIcon
                        title="Total Tents"
                        icon={PiTentThin}
                        count="25"
                    />
                </GridItem>
                <GridItem w="100%">
                    <StatsSimpleIcon
                        title="Group Bookings"
                        icon={FiUsers}
                        count="14"
                    />
                </GridItem>
                <GridItem w="100%">
                    <StatsSimpleIcon
                        title="Individual Bookings"
                        icon={FiUser}
                        count="43"
                    />
                </GridItem>
            </Grid>
            <BookingTable />
        </Container>
    );
}

const StatsSimpleIcon = ({ title, icon, count }) => {
    return (
        <Box
            bg="white"
            rounded="md"
            shadow="sm"
            p="4"
            border="1px"
            borderColor="gray.200"
        >
            <Heading as="h2" size="sm" fontWeight="normal">
                {title}
            </Heading>
            <HStack pt="2">
                <VStack
                    align="center"
                    justify="center"
                    w="12"
                    h="12"
                    rounded="md"
                    border="1px"
                    borderColor="gray.200"
                >
                    <Icon as={icon} boxSize="7" />
                </VStack>
                <Text fontWeight="bold" fontSize="2xl">
                    {count}
                </Text>
            </HStack>
        </Box>
    );
};

const mockData = [
    { id: 1, userName: "JohnDoe", bookingType: "Individual" },
    { id: 2, userName: "JaneSmith", bookingType: "Group" },
    { id: 3, userName: "BobJohnson", bookingType: "Individual" },
    { id: 4, userName: "AliceWilliams", bookingType: "Group" },
    { id: 5, userName: "CharlieBrown", bookingType: "Individual" },
];

const BookingTable = () => {
    return (
        <TableContainer py="4">
            <Heading as="h1" size="md">Booking List</Heading>
            <Table variant="striped" colorScheme="gray">
                <Thead>
                    <Tr>
                        <Th>id</Th>
                        <Th>user name</Th>
                        <Th>booking type</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {mockData.map(({ id, userName, bookingType }) => (
                        <TableRow
                            key={id}
                            id={id}
                            userName={userName}
                            bookingType={bookingType}
                        />
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    );
};

const TableRow = ({ id, userName, bookingType }) => {
    return (
        <Tr>
            <Td>{id}</Td>
            <Td>{userName}</Td>
            <Td>{bookingType}</Td>
        </Tr>
    );
};
