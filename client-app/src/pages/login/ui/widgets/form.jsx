import { Button } from "@chakra-ui/react";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import { usePost } from "@/shared/hooks";
import { Alert } from "@/shared/ui/alert";
import { Form, Input } from "@/shared/ui/form";

const initialValues = { email: "", password: "" };
const validationSchema = yup.object().shape({
    email: yup
        .string()
        .email("invalid email")
        .required("email field is required"),
    password: yup.string().required("password field is required"),
});

export function LoginForm() {
    const [login, { error, loading }] = usePost();
    const navigate = useNavigate();

    const handelSubmit = async (values) => {
        try {
            const { accessToken } = await login("/auth/login", values);
            Cookies.set("accessToken", accessToken, {
                sameSite: "strict",
                secure: true,
            });
            navigate("/tents");
        } catch (error) {
            console.log('error: ', error)
        }
    };

    return (
        <>
            {
                error ? <Alert error={error} message="There was an error processing your request" /> : null
            }
            <Form
                initialValues={initialValues}
                validationSchema={validationSchema}
                handelSubmit={handelSubmit}
            >
                <Input
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="john@doa.com"
                />
                <Input
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="Password"
                />
                <Button
                    type="submit"
                    mt="2"
                    size="md"
                    w="full"
                    colorScheme="blue"
                    isLoading={loading}
                >
                    submit
                </Button>
            </Form>
        </>
    );
}
