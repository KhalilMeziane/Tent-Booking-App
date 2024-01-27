/* eslint-disable react/prop-types */
import { Alert as Al, AlertIcon } from "@chakra-ui/react";

export default function Alert({ message, status = "error" }) {
    return (
        <Al status={status}>
            <AlertIcon />
            {message}
        </Al>
    );
}
