import { Button } from "@chakra-ui/react"
import * as yup from "yup"

import { usePost } from '@/shared/hooks'

import { Form, Input } from "@/shared/ui/form"

const initialValues = { email: "", password: "" }
const validationSchema = yup.object().shape({
    email: yup.string().email('invalid email').required('email field is required'),
    password: yup.string().required('password field is required')
})

export function LoginForm () {
    const [login, { data, loading, error }] = usePost()

    const handelSubmit = (values) => {
        login('/auth/login', values)
    }

    if (data) {
        console.log('data: ', data)
    }

    if (error) {
        console.log('error: ', error)
    }

    return (
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
    )
}