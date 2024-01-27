/* eslint-disable react/prop-types */
import { Alert as Al, AlertIcon } from "@chakra-ui/react";

export default function Alert({ error, status = "error" }) {
    console.log("error: ", error);
    let message = "";
    if (error.code === "ECONNABORTED") {
        message = "Request timed out. Please try again later.";
    }
    if (error.code === "ERR_BAD_REQUEST") {
        message = error?.response?.data?.error?.message;
    }

    if (error.code === "ERR_BAD_RESPONSE") {
        message = "Internal Server Error. Please try again later";
    }
    return (
        <Al status={status} mb="2">
            <AlertIcon />
            {message || "There was an error processing your request"}
        </Al>
    );
}
